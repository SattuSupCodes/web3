require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const url = `https://eth-mainnet.g.alchemy.com/v2/${API_KEY}`;

async function getTotalTransactions(blockNumber) {
    const response = await axios.post(url, {
        jsonrpc: "2.0",
        id: 1,
        method: "eth_getBlockByNumber",
        params: [blockNumber, false], 
    });
    
    
    return response.data.result.transactions.length
    
}


//2

const provider = require('./provider');

async function getTotalTransactions(blockNumber) {
    const { result } = await provider.send({
        jsonrpc: "2.0",
        id: 1,
        method: "eth_getBlockByNumber",
        params: [ 
            "0x" + blockNumber.toString(16), 
            false
        ],
    });
    
    return result.transactions.length;
}

module.exports = getTotalTransactions;
