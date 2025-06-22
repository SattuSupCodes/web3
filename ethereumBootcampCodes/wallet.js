const ethers = require('ethers');
const { Wallet } = ethers;

// create a wallet with a private key
const wallet1 = new Wallet("0xf..." );

// create a wallet from mnemonic
const wallet2 = Wallet.fromMnemonic("plate la..."); //these are examples haa but dont ever be such a bewakoof ullu ka pathhaa (idiot disgrace) that you openly expose your private key and phrase!
module.exports = {
    wallet1,
    wallet2,
}
//NEVER EVER SHAREEEE THESEEEEEEEEE