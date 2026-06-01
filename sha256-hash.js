
// function hashing256(data){
//     return SHA256(data).toString();
// }

// console.log(hashing256("ashed"))

//SHA256 is one way(we cannot decrypt the incrypted data)
//avalanch change/deterministic(we get same hash for same data)


//EXECRSIE 1 TO GENERATE HASH USING GIVEN DATA (hash using sha256)        
const {SHA256} = require('crypto-js');

class MyBlock{
    constructor(blocknumber, timestamp, prevhash, transactionaldata){
        this.blocknumber = blocknumber
        this.timestamp = timestamp
        this.prevhash = prevhash
        this.transactionaldata = transactionaldata
        this.blockhash = this.blockHash()
    }

    blockHash() {
        return SHA256(this.blocknumber +  this.timestamp + this.prevhash + this.transactionaldata).toString();
    }
}

module.exports = MyBlock;  
 