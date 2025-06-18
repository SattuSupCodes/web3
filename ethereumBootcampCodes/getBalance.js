require('dotenv').config();
const { API_KEY } = process.env; //api key stayes in .env files (hidden). 
const axios = require('axios');
const url = `https://eth-mainnet.g.alchemy.com/v2/${API_KEY}`;

async function getBalance(address) {
    const response = await axios.post(url, {
        jsonrpc: "2.0",
        id: 1,
        method: "eth_getBalance", 
        params: [address, "latest"],  
    });

  

    // TODO: return the balance of the address
    return response.data.result
}

module.exports = getBalance;
//When sending transactions in Ethereum it's a requirement to include a nonce. 
// The reasoning is quite simple: you wouldn't want your transaction to be executed multiple times

//soooo.... for that we can use method : eth_getTransactionCount

require('dotenv').config();
// const { API_KEY } = process.env;
const axios = require('axios');
// const url = `https://eth-mainnet.g.alchemy.com/v2/${API_KEY}`; had to comment it cause it caused error

async function getTotalBalance(addresses) {
    const batch = addresses.map((addr, i) => ({
        jsonrpc: "2.0",
        id: i,
        method: "eth_getBalance",
        params: [addr],
    }));

    const response = await axios.post(url, batch);

    return response.data.reduce((p,c) => p + parseInt(c.result), 0);
}

module.exports = getTotalBalance; //remembinder to me to chatgpt this code cause i don get it fully