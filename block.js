// Nima makhmali  blockChain project

const {GENESIS_DATA} = require('./config');

class Block { 
   constructor({timestamp,lasthash,hash,data}){
    this.timestamp = timestamp;
    this.lasthash = lasthash;
    this.hash = hash;  
    this.data = data;
  } 
  static genesis() {  // factory method
    return new this(GENESIS_DATA);
  }
}

module.exports = Block;

