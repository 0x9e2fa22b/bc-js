const Block = require('./Block');
const Blockchain = require('./Blockchain');

const blockchain = new Blockchain();

console.log('Mining block 1...')
const block1 = new Block(
  1,
  new Date(),
  {
    sender: '1Bf9sZvBHPFGVPX71WX2njhd1NXKv5y7v5',
    receiver: '3FxUA8godrRmxgUaPv71b3XCUxcoCLtUx2',
    value: 1.796
  }
);
blockchain.addBlock(block1);

console.log('Mining block 2...')
const block2 = new Block(
  2,
  new Date(),
  {
    sender: '1Bf9sZvBHPFGVPX71WX2njhd1NXKv5y7v5',
    receiver: '3FxUA8godrRmxgUaPv71b3XCUxcoCLtUx2',
    value: 1.46
  }
);
blockchain.addBlock(block2);

console.log(JSON.stringify(blockchain, null, 4));
