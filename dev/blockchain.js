// Block chain constructor function
function Blockchain() {
  this.chain = []
  this.newTransactions = []
}

// Add create new block to block chain method
Blockchain.prototype.createNewBlock = function (nonce, hash, previousBlockHash) {
  const newBlock = {
    blockId: this.chain.length + 1,
    nonce,
    transactions: this.newTransactions,
    timestamp: Date.now(),
    hash,
    previousBlockHash,
  }

  this.newTransactions = []
  this.chain.push(newBlock)
}

module.exports = Blockchain
