const Poll = require('./poll.ts');
const poll = Poll.poll;
const { connect, KeyPair, keyStores } = require("near-api-js");
const { parseSeedPhrase } = require('near-seed-phrase');
const fs = require("fs");
import level from 'level-ts';
const database = new level('./database');

const ACCOUNT_ID = "ashitz.near";
const NETWORK_ID = "mainnet";
const KEY_PATH = './.mnemonic';

const mnemonic = fs.readFileSync(KEY_PATH).toString();
const myKeyStore = new keyStores.InMemoryKeyStore();
const { _, secretKey } = parseSeedPhrase(mnemonic);
myKeyStore.setKey(NETWORK_ID, ACCOUNT_ID, KeyPair.fromString(secretKey));

const connectionConfig = {
    networkId: "mainnet",
    keyStore: myKeyStore, // first create a key store
    nodeUrl: "https://rpc.mainnet.near.org",
    walletUrl: "https://wallet.mainnet.near.org",
    helperUrl: "https://helper.mainnet.near.org",
    explorerUrl: "https://explorer.mainnet.near.org",
};

var nearConnection: any

async function connectNear() {
    nearConnection = await connect(connectionConfig);
}

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

async function activate(new_account_name: String, public_key: string, callback: (succ: boolean, new_account_name: String) => any) {
    const account = await nearConnection.account(ACCOUNT_ID);
    try {
        public_key = formatPublicKey(public_key).toString()
        let res = await account.createAccount(
            new_account_name,
            public_key, // "8hSHprDq2StXwMtNd43wDTXQYsjXcD4MJTXQYsjXcc"
            "20000000000000000000" // initial balance for new account in yoctoNEAR
        );
        console.log(await res.wait());
        callback(true, new_account_name)
    } catch (e: any) {
        console.log(e);
        callback(false, new_account_name)
    }
}

function formatPublicKey(public_key: String): String {
    if (public_key.length === 66) {
        public_key = public_key.substring(2)
        public_key = binary_to_base58(hexToByte(public_key))
    } else if (public_key.length === 64) {
        public_key = binary_to_base58(hexToByte(public_key))
    }
    return public_key
}

async function main() {
    await connectNear()
    poll(36500000, async (req: any) => {
        console.log(JSON.stringify(req))
        var data;
        try { data = await database.get(req.id) } catch (e: any) { }
        if (data !== null && data !== undefined) {
            console.log(`duplicated data ${JSON.stringify(data)}`)
            return
        }
        await activate(req.near_account, req.activationInfo_publicKey, async (succ: boolean, account_name: String) => {
            console.log(`succ : ${succ}\naccount name : ${account_name}`)
            await database.put(req.id, {
                account: req.near_account,
                pubkey: formatPublicKey(req.activationInfo_publicKey).toString(),
                payer: req.activationInfo_payer,
                price: req.activationInfo_price,
                block: req.blockNumber,
                result: succ
            });
        })
    })
}

async function main1() {
    await connectNear()
    await activate("deepdarkfantasy.near", "e967b2761d979317771aa50a4f21a03a5b44d83a1c0acb63267142a80db29207", (succ: boolean, account_name: String) => {
        console.log(`succ : ${succ}\naccount name : ${account_name}`)
    })
}

main()