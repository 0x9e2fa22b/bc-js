const { SHA256 } = require("crypto-js");
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

class Transaction {
  constructor(sender, receiver, amount) {
    this.sender = sender;
    this.receiver = receiver;
    this.amount = amount;
  }

  calculateHash() {
    return SHA256(this.sender + this.receiver + this.amount).toString()
  }

  signTransaction(signingKey) {
    if (signingKey.getPublic('hex') !== this.sender) {
      throw new Error('You cannot sign transactions for other wallet');
    }

    const hashTx = this.calculateHash();
    const sig = signingKey.sign(hashTx, 'base64');
    this.signature = sig.toDER('hex');
  }

  isValid() {
    if (this.sender === null) {
      return true;
    }

    if (!this.signature || this.signature.length === 0) {
      throw new Error('No signature in this transaction');
    }

    const publicKey = ec.keyFromPublic(this.sender, 'hex');
    return publicKey.verify(this.calculateHash(), this.signature);
  }
}

module.exports = Transaction;