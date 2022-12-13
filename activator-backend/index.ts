const Poll = require('./poll.ts');
const poll = Poll.poll;
const { connect, KeyPair, keyStores, providers } = require("near-api-js");
const { parseSeedPhrase } = require('near-seed-phrase');
const fs = require("fs");
import level from 'level-ts';
import { ethers } from "ethers";

const database = new level('./database');

const ACCOUNT_ID = "ashitz.near";
const NETWORK_ID = "mainnet";
const NEAR_KEY_PATH = './.mnemonic';
const EVM_KEY_PATH = './.private';

const mnemonic = fs.readFileSync(NEAR_KEY_PATH).toString();
const evm_private_key = fs.readFileSync(EVM_KEY_PATH).toString();
const myKeyStore = new keyStores.InMemoryKeyStore();
const { _, secretKey } = parseSeedPhrase(mnemonic);
myKeyStore.setKey(NETWORK_ID, ACCOUNT_ID, KeyPair.fromString(secretKey));

const connectionConfig = {
    networkId: "mainnet",
    keyStore: myKeyStore, // first create a key store
    nodeUrl: "https://rpc.ankr.com/near",
    walletUrl: "https://wallet.mainnet.near.org",
    helperUrl: "https://helper.mainnet.near.org",
    explorerUrl: "https://explorer.mainnet.near.org",
};

const provider = new providers.JsonRpcProvider(connectionConfig.nodeUrl)

var nearConnection: any

async function connectNear() {
    nearConnection = await connect(connectionConfig);
}

const polygon_provider = new ethers.providers.JsonRpcProvider('https://rpc-mainnet.maticvigil.com');
const polygon_signer = new ethers.Wallet(evm_private_key, polygon_provider)

const hexToByte = (hex: String) => {
    const key = '0123456789abcdef'
    let newBytes = []
    let currentChar = 0
    let currentByte = 0
    for (let i = 0; i < hex.length; i++) {   // Go over two 4-bit hex chars to convert into one 8-bit byte
        currentChar = key.indexOf(hex[i])
        if (i % 2 === 0) { // First hex char
            currentByte = (currentChar << 4) // Get 4-bits from first hex char
        }
        if (i % 2 === 1) { // Second hex char
            currentByte += (currentChar)     // Concat 4-bits from second hex char
            newBytes.push(currentByte)       // Add byte
        }
    }
    return new Uint8Array(newBytes)
}

const { binary_to_base58 } = require('base58-js')

function formatPublicKey(public_key: String): String {
    if (public_key.length === 66) {
        public_key = public_key.substring(2)
        public_key = binary_to_base58(hexToByte(public_key))
    } else if (public_key.length === 64) {
        public_key = binary_to_base58(hexToByte(public_key))
    }
    return public_key
}

async function activate(account_id: String, public_key: string, callback: (succ: boolean, new_account_name: String) => any) {
    public_key = formatPublicKey(public_key).toString()
    if (account_id.length === 64 || (account_id.length === 66 && account_id.substring(0, 2) === '0x')) {
        fundHexAccount(account_id, callback)
    } else {
        createDotNearAccount(account_id, public_key, callback)
    }
}

async function createDotNearAccount(new_account_name: String, public_key: string, callback: (succ: boolean, new_account_name: String) => any) {
    const account = await nearConnection.account(ACCOUNT_ID);
    var exists = true
    try {
        let res = await provider.query({
            request_type: "view_account",
            account_id: new_account_name,
            finality: "final",
        });
        console.log(`res : ${JSON.stringify(res)}`)
    } catch (e: any) {
        if (e.type === 'AccountDoesNotExist' || e.toString().includes("does not exist while viewin")) {
            exists = false;
        } else {
            console.log(e)
        }
    }
    if (exists) {
        console.log(`account already exists : ${new_account_name}`)
        callback(false, new_account_name)
        return
    }
    try {
        let res = await account.functionCall({
            contractId: 'near',
            methodName: 'create_account',
            args: {
                new_account_id: new_account_name,
                new_public_key: public_key
            },
            gas: '100000000000000',
            attachedDeposit: '100000000000000000000000'
        })
        console.log(res);
        callback(true, new_account_name)
    } catch (e: any) {
        console.log(e)
        callback(false, new_account_name)
    }
}

async function fundHexAccount(account_id: String, callback: (succ: boolean, new_account_name: String) => any) {
    const account = await nearConnection.account(ACCOUNT_ID);
    try {
        let res = await account.sendMoney(account_id, '100000000000000000000000')
        console.log(res);
        callback(true, account_id)
    } catch (e: any) {
        console.log(e)
        callback(false, account_id)
    }
}

var activator_abi = [{ "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "owner", "type": "address" }], "name": "AcceptOwner", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "string", "name": "near_account", "type": "string" }, { "components": [{ "internalType": "address", "name": "payer", "type": "address" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "string", "name": "publicKey", "type": "string" }, { "internalType": "enumActivator.activationStatus", "name": "status", "type": "uint8" }], "indexed": false, "internalType": "structActivator.ActivationInfo", "name": "activationInfo", "type": "tuple" }], "name": "ActivationFailed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "string", "name": "near_account", "type": "string" }, { "components": [{ "internalType": "address", "name": "payer", "type": "address" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "string", "name": "publicKey", "type": "string" }, { "internalType": "enumActivator.activationStatus", "name": "status", "type": "uint8" }], "indexed": false, "internalType": "structActivator.ActivationInfo", "name": "activationInfo", "type": "tuple" }], "name": "ActivationRequest", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "string", "name": "near_account", "type": "string" }, { "components": [{ "internalType": "address", "name": "payer", "type": "address" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "string", "name": "publicKey", "type": "string" }, { "internalType": "enumActivator.activationStatus", "name": "status", "type": "uint8" }], "indexed": false, "internalType": "structActivator.ActivationInfo", "name": "activationInfo", "type": "tuple" }], "name": "ActivationSuccess", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "string", "name": "near_account", "type": "string" }, { "indexed": false, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Refund", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }], "name": "SetPrice", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "to", "type": "address" }], "name": "TransferOwner", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "to", "type": "address" }], "name": "Withdrawl", "type": "event" }, { "inputs": [], "name": "acceptOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "accountName", "type": "string" }, { "internalType": "string", "name": "publicKey", "type": "string" }], "name": "activate", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "accountName", "type": "string" }, { "internalType": "bool", "name": "success", "type": "bool" }], "name": "postResult", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "accountName", "type": "string" }], "name": "refund", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "price_", "type": "uint256" }], "name": "setPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner_", "type": "address" }], "name": "transferOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "withdrawAccrued", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "price_", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "accrued", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "", "type": "string" }], "name": "activationInfoOf", "outputs": [{ "internalType": "address", "name": "payer", "type": "address" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "string", "name": "publicKey", "type": "string" }, { "internalType": "enumActivator.activationStatus", "name": "status", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pendingOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "price", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]

var activator_address = '0x2De68366eF3F5cB580a210312CDa5adA218deb5c'

async function main(start: Number) {
    await connectNear()
    let activator_contract = new ethers.Contract(activator_address, activator_abi, polygon_signer);
    poll(start, async (req: any) => {
        console.log(JSON.stringify(req))
        var data;
        try { data = await database.get(req.id) } catch (e: any) { }
        if (data !== null && data !== undefined) {
            console.log(`duplicated data ${JSON.stringify(data)}`)
            return
        }

        await activate(req.near_account, req.activationInfo_publicKey, async (succ: boolean, account_name: String) => {
            console.log(`succ : ${succ}\taccount name : ${account_name}`)
            await database.put(req.id, {
                account: req.near_account,
                pubkey: formatPublicKey(req.activationInfo_publicKey).toString(),
                payer: req.activationInfo_payer,
                price: req.activationInfo_price,
                block: req.blockNumber,
                result: succ
            });
            // write results
            console.log(`write result\tsucc : ${succ}\taccount name : ${account_name}`)
            try {
                let gasPrice = await polygon_provider.getGasPrice()
                gasPrice = gasPrice.mul(11).div(10)
                let createReceipt = await activator_contract.postResult(req.near_account, succ, { gasPrice: gasPrice })
                await createReceipt.wait();
                await database.put("result:" + req.id, {
                    result: succ,
                    txhash: createReceipt.hash
                })
                console.log(`write result tx hash : ${createReceipt.hash}`)
            } catch (e: any) {
                console.log(e)
            }
        })
    })
}

main(36500000) // test env
//main(36772631) // production env