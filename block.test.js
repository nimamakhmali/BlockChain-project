const Block = require("./block");
const {GENESIS_DATA} = require('./config');
const cryptoHash = require('./crypto_Hash');

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

    describe('mineBlock()', ()=>{
        const lastBlock = Block.genesis();
        const data = 'mined data ';
        const minedBlock = Block.mineBlock({lastBlock, data});
        it('returns a block instance', ()=>{
            expect(minedBlock instanceof Block).toEqual(true);
        });
        it('sets the `lasthash` to the `hash` of the lastBlock ', ()=>{  // property
            expect(minedBlock.lasthash).toEqual(lastBlock.hash);
        });
        it('sets the `data`', ()=>{  // property
            expect(minedBlock.data).toEqual(data);
        });
        it('sets the `timestamp`', ()=>{  // property
            expect(minedBlock.timestamp).not.toEqual(undefined);
        });      
        
        it('creates a SHA-256 `hash` based on proper inputs', ()=>{
            expect(minedBlock.hash).toEqual(cryptoHash(minedBlock.timestamp, lastBlock.hash, data));
        })
    });
}); 