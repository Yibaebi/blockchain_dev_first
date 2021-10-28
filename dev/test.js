const Blockchain = require('./blockchain.js')

// Create a new block
const bitcoin = new Blockchain()

// Add a blocks to the existing chain
bitcoin.createNewBlock(125667, 'h898weihouq2ihwekbnfjk', 'hwhsjew823jbjdsbjlafeokreniu')
bitcoin.createNewBlock(12372, 'jsjhjskdhuwjkjskjsej', 'uudsiy892hjskhaohikfena')
bitcoin.createNewBlock(12332, 'gshghsghsgsjskjkksh', 'yqw78728y892hjskhaohikksjfbjfena')

console.log('This is my bitcoin blockchain', bitcoin)
