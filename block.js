// Nima makhmali  blockChain project
class Block{
  constructor(data,hash,lasthash){
    //this.timestamp = timestamp;
    this.data = data;
    this.hash = hash;
    this.lasthash = lasthash;
  }
}

class BlockChain{
  constructor(){
    const genesis = new Block('gendata','genhash','genlasthash');
    this.chain = [genesis];
  }

  addBlock(data){
    const lasthash = this.chain[this.chain.length-1].hash;
    const hash = hashFunc(data + lasthash);
    const block = new Block(data,hash,lasthash);
    this.chain.push(block);
  }
}



const hashFunc = (input)=>{
  return "*" + input + "*";
}


const fooBlock = new BlockChain();
fooBlock.addBlock('one');
fooBlock.addBlock('two');
fooBlock.addBlock('three');
console.log(fooBlock);
