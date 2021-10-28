// Block chain constructor function
function Blockchain() {
  this.chain = []
  this.pendingTransactions = []
}

// Add create new block to block chain method
Blockchain.prototype.createNewBlock = function (nonce, hash, previousBlockHash) {
  const newBlock = {
    blockId: this.chain.length + 1,
    nonce,
    transactions: this.pendingTransactions,
    timestamp: Date.now(),
    hash,
    previousBlockHash,
  }

  this.pendingTransactions = []
  this.chain.push(newBlock)
}

// Add function to get last block in chain
Blockchain.prototype.getLastChainBlock = function () {
  return this.chain[this.chain.length - 1]
}

// Create a new transaction
Blockchain.prototype.createNewTransaction = function (amount, sender, receiver) {
  const newTransaction = {
    amount,
    sender,
    receiver,
  }

  this.pendingTransactions.push(newTransaction)
  return this.getLastChainBlock()['blockId'] + 1
}

module.exports = Blockchain
