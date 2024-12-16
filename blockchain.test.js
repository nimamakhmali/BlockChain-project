const Block = require('./block');
const Blockchain = require('./blockchain')

describe('blockchain', ()=>{
    const blockchain = new Blockchain();
    it('contains a `chain` Array instance', ()=>{
        expect(blockchain.chain instanceof Array).toBe(true);
    });

    it('starts with the genesis block', ()=>{
        expect(blockchain.chain[0]).toEqual(Block.genesis());
    });

    it('adds a new block to the chain', ()=>{
        const newData = 'foo_bar';
        blockchain.addBlock({data: newData});
        expect(blockchain.chain[blockchain.chain.length-1].data).toEqual(newData);
    });

})

