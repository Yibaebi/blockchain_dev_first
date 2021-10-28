const Blockchain = require('./blockchain.js')

// Create a new block
const bitcoin = new Blockchain()

// Add a blocks to the existing chain
bitcoin.createNewBlock(125667, 'h898weihouq2ihwekbnfjk', 'hwhsjew823jbjdsbjlafeokreniu')
bitcoin.createNewBlock(67281, 'jsjhjskdhuwjkjskjsej', 'uudsiy892hjskhaohikfena')
bitcoin.createNewBlock(32, 'gshghsghsgsjskjkksh', 'yqw78728y892hjskhaohikksjfbjfena')
bitcoin.createNewBlock(1627663, 'gsuywuyueywb63iuqnuiqh32uiu43bhs', '9j873yhqo02hqwhjeh')

// Get last block in chain
bitcoin.getLastChainBlock()

// Create a new transaction
bitcoin.createNewTransaction(2000, 'Elliot', 'Joshua Nwokoye')

console.log(bitcoin)
