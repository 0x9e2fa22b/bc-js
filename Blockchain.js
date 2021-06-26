const SHA256 = require('crypto-js/sha256')

class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = '0x' + this.calculateHash();
  }

  calculateHash() {
    return SHA256(
      this.index
      + this.timestamp
      + JSON.stringify(this.data)
      + this.previousHash
    ).toString();
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(
      0,
      new Date(2021, 0, 2), // 2021-01-01
      'Genesis Block',
      '0x0000000000000000000000000000000000000000000000000000000000000000'
    )
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = '0x' + newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }
}

module.exports = {
  Block,
  Blockchain
};