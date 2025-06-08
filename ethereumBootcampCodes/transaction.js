//1.
// On this stage, we introduce a new file Transaction.js.

// In the Transaction constructor you'll see two arguments passed in: inputUTXOs and outputUTXOs. Both of these objects are arrays containing instances of transaction outputs.

// Store inputUTXOs and outputUTXOs on the transaction object.
// In the execute function do one thing for now: ensure that none of the inputUTXOs are already spent. We can't allow double-spending TXOs!
// Throw an error in execute if any input TXO is already spent.
//important:
//  The terminology between UTXO and TXO can sometimes get confusing. Remember that a TXO is just the nomenclature for a UTXO that is already spent!

//2. 
// Let's make sure that the inputUTXOs have enough total value in them to cover the total value of the outputUTXOs.
// If the total value of the inputs is less than the total value of the outputs, throw an error in the execute function.
class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;


    }
    execute() {
        const anyspent = this.inputUTXOs.some((x) => x.spent)
        if(anyspent){
            throw new error("cannot be done cutie")
        }
        const inputAmount = this.inputUTXOs.reduce((p,c) => 
        {return p + c.amount},0)
        const outputAmount = this.outputUTXOs.reduce((p,c) => 
        {return p + c.amount},0)
        if(inputAmount<outputAmount){
            throw new error("not enough sweeto")
        }
        this.inputUTXOs.forEach((utxo)=>{return utxo.spend()}) //transaction successsfullll
        this.fee = (inputAmount - outputAmount); // output fee given to miner as reward smt typa concept
    }
}

module.exports = Transaction;