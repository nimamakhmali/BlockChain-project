// Nima makhmali  blockChain project
class Block{
  constructor({timestamp,lasthash,hash,data}){
    this.timestamp = timestamp;
    this.lasthash = lasthash;
    this.hash = hash;  
    this.data = data;
  }
}

const s = new Block({
  timestamp:"1234",
  lasthash:"foo_last", 
  hash:"foo_hash", 
  data:"foo_data"
});
console.log(s);