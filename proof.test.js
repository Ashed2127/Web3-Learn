
const Blockchain = require("./proof")
const block1 = new Blockchain(1, Date.now(), "ash", "cvv")
block1.prooOfWork()