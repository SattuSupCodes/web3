const { providers } = require('ethers');
const { ganacheProvider } = require('./config');

const provider = new providers.Web3Provider(ganacheProvider);

async function findEther(address) {
    const addresses = [];
    const blockNumber = await provider.getBlockNumber(); //You define an async function that takes an Ethereum address.

                                // Then it gets the latest block number from the blockchain to know how many blocks to scan.

    for (let i = 0; i <= blockNumber; i++) { //You loop through each block from 0 to latest.

        getBlockWithTransactions(i) //gives you the full block including all its transactions.


        const block = await provider.getBlockWithTransactions(i);
        block.transactions.forEach((tx) => {
            if(tx.from === address) {
                addresses.push(tx.to);
            }
        });
    }
    return addresses;
}

module.exports = findEther;