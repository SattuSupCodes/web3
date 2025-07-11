const { Wallet, providers } = require('ethers');
const { ganacheProvider } = require('./config');

const provider = new providers.Web3Provider(ganacheProvider);

function findMyBalance(privateKey) {
    const wallet = new Wallet(privateKey, provider)// retrieve the balance, given a private key
    return wallet.getBalance()
} 

module.exports = findMyBalance;