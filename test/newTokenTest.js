const sampleToken = artifacts.require("NewToken");

contract('NewToken', (accs) => {
    accounts = accs;
    owner = accounts[0];

    console.log(accounts);

    before(async() => {
        newToken = await sampleToken.deployed()
    })

    it("Gives the oner of the token 2M tokens", async () => {
        let balance = await newToken.balanceOf(accounts[0]);
        console.log(web3.utils.fromWei(balance, 'ether'));

        balance = web3.utils.fromWei(balance, 'ether');
        assert.equal(balance, '2000000', "Balance should be 2M for the contract creator");
    })
});