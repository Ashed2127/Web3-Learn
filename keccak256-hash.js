
//EXECRSIE 1 USING ETHEREUM CRYPTOGRAPHY(hash using keccak256)
const {keccak256} = require('ethereum-cryptography/keccak')
const {utf8ToBytes, toHex} = require('ethereum-cryptography/utils')

function HashMessage(message){
    return toHex(keccak256(utf8ToBytes(message)))
}

console.log(HashMessage('True Feed'))
