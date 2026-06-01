const MyBlock = require('./sha256-hash.js');

const MyBlock1 = new MyBlock(
    1, 
    Date.now(), 
    "a3ncnd9fdb78wv4", 
    "2Ton from eh4hlhfl to le9345hf"
);

console.log(MyBlock1.blockHash());        