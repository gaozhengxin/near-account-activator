const { expect } = require("chai");

describe("Activator test", function () {
    it("Test", async function () {
        const [owner] = await ethers.getSigners();
        console.log("owner " + owner.address);

        let Activator = await ethers.getContractFactory("Activator");
        let price = 10000000000000000n; // 0.01 ether
        let activator = await Activator.deploy(price);
        await activator.deployed();
        console.log(`activator : ${activator.address}`);

        expect(await activator.owner()).to.equal(owner.address);

        let account = "1111111111111111";
        let pubkey = "111111";
        let tx1 = await activator.activate(account, pubkey, { value: price });
        await tx1.wait();

        console.log(await activator.activationInfoOf(account));

        let tx2 = await activator.postResult(account, true);
        await tx2.wait();

        expect(await activator.accrued()).to.equal(price);

        let account2 = "2222222222222222";
        let pubkey2 = "222222";
        let tx3 = await activator.activate(account2, pubkey2, { value: price });
        await tx3.wait();

        let tx4 = await activator.postResult(account, false);
        await tx4.wait();

        expect(await activator.accrued()).to.equal(price);

        let tx5 = await activator.withdrawAccrued(owner.address);
        await tx5.wait();
    })
});