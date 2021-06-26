const { Block, Blockchain } = require('./Blockchain');

const blockchain = new Blockchain();

const block1 = new Block(
  1,
  new Date(),
  {
    sender: '0xa76ee6c1d53637eb5791fd88501576c2ad01ce54',
    receiver: '0x10ed43c718714eb63d5aa57b78b54704e256024e',
    value: 1.796
  }
);

blockchain.addBlock(block1);

console.log(JSON.stringify(blockchain, null, 4));
