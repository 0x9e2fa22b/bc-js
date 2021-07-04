const Blockchain = require('./Blockchain');
const Transaction = require('./Transaction');

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('b3f54cbe65ee64b7c84750d85b24ab994cb22fe65e3b17ef20313958e4c70a25');
const myWalletAddress = myKey.getPublic('hex')

const blockchain = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'address2', 10);
tx1.signTransaction(myKey);
blockchain.addTransaction(tx1);


console.log('Starting the miner....');
blockchain.minePendingTransactions(myWalletAddress);
console.log('Balance of Miner is: ' + blockchain.getBalanceOfAddress(myWalletAddress));
