const Block = require("./block");
const {GENESIS_DATA} = require('./config');


describe("Block", ()=>{
    const timestamp = '123456';
    const lasthash = 'foo-hash';
    const hash = 'bar-hash';
    const data =  ['Blaockchain', 'data'];

    const block = new Block({
        timestamp,
        lasthash,
        hash,
        data
    });

    it("has a timestamp, lasthash, hash and property", ()=>{
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lasthash).toEqual(lasthash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);

    });
    
    describe("genesis()", ()=>{
        const genesisBlock = Block.genesis();

        
        it("returns a block instance", ()=>{
            expect(genesisBlock instanceof Block).toEqual(true);
        })

        it("returns the genesis data", ()=>{
            expect(genesisBlock).toEqual(GENESIS_DATA);
        })
    });

});