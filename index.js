const Block = require('./Block');
const Blockchain = require('./Blockchain');
const Transaction = require('./Transaction');

const blockchain = new Blockchain();

blockchain.createTransaction(new Transaction('sender', 'receiver', 1.32));
blockchain.createTransaction(new Transaction('sender', 'receiver2', 14.32));

console.log('Starting the miner....');
blockchain.minePendingTransactions('Miner');
console.log('Balance of Miner is: ' + blockchain.getBalanceOfAddress('Miner'));

blockchain.minePendingTransactions('Miner');
console.log('Balance of Miner is: ' + blockchain.getBalanceOfAddress('Miner'));


console.log(JSON.stringify(blockchain, null, 4));
