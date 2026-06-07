//to test proof of work

const {SHA256} = require('crypto-js');

class Blockchain{
    constructor(index, timestamp, prevhash, Data){
        this.index = index
        this.timestamp = timestamp
        this.prevhash = prevhash
        this.Data = Data
        this.nonce = 0
    }

    hashBlock() {
        return SHA256(this.index +  this.timestamp + this.prevhash + this.Data + this.nonce).toString();
    }

    prooOfWork(){
        let hash = this.hashBlock();
        while (hash.substring(0, 2) !== "aa") { //at this t  arget dificultty is aa
            this.nonce +=1
            hash = this.hashBlock()
            console.log('trail hash: ', hash)
        }
        console.log(this.nonce)
        console.log('Proof hash: ', hash)
    }
}

module.exports = Blockchain;  