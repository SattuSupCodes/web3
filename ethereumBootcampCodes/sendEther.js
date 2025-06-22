///we have created wallet and sign butttttt now we have to broadcast our transaction to the
//whol netowrk (cause thats how blockchain be)

//1. Create the Provider
//To create the ethers.js provider, use the ganacheProvider passed in from config. 
// The ganacheProvider is considered a Web3Provider by ethers.js. 

const { Wallet, utils, providers } = require('ethers');
const { ganacheProvider, PRIVATE_KEY } = require('./config');

const provider = new providers.Web3Provider(ganacheProvider);

const wallet = new Wallet(PRIVATE_KEY);

async function sendEther({value, to}) {
    // sign the transaction using our wallet's private key
    const rawTx = await wallet.signTransaction({ value, to, gasLimit: 0x5208, gasPrice: 0x3b9aca00 });

    // broadcast the transaction to the ethereum network
    return provider.sendTransaction(rawTx);
}

module.exports = sendEther;

//but this does nott add nonce value which is very much needed to keep track of transactions and 
//to avoid double spending frauds

const { Wallet, utils, providers } = require('ethers');
const { ganacheProvider, PRIVATE_KEY } = require('./config');

//const provider = new providers.Web3Provider(ganacheProvider);

//const wallet = new Wallet(PRIVATE_KEY, provider); had to comment out these two cause it caused error to be in same file with the code above

async function sendEther({value, to}) {
    // sign the transaction using our wallet's private key
     

    // broadcast the transaction to the ethereum network
    return wallet.sendTransaction({ value, to });
}

module.exports = sendEther;