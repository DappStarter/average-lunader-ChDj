require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note range punch gesture case frame gather'; 
let testAccounts = [
"0x9cc858657a9ec2cb9ba7b7f1d8d61c21f61ec58dd4f7be83b174fa6b6e56d088",
"0x7fc36ed51688c145a4714a5d9e54cc965fdfefe5dc51cd513e329d48a8c74177",
"0x0b754eafa560151a0ed91eb5121e7f42c701a60b50881c1fca1b1dfb6c630b24",
"0x5822beccf0f6a5678d4883a615805ae5c6618193049a922f28d4dfb7100c72b0",
"0xf4f0661377a99f731100f150c941c548ea8c953b6fa454cef07f5ea2f13a11a0",
"0x4a61ceccd726e836fd9e659c2e554a51bb4062cfefedbb334c38400a17abb78d",
"0x08a1dd4f92947c95292d54da18dc71626cb9b63065b3b84427e411a2f110a1b1",
"0xc3e6a5893c6e5479739e0484eb5e5e1fa8ec05f9afb1533ee686d3ac0b44f866",
"0xe9ff72f41bde216eed93e40958991f01a66237b5da9a615a2e24643cf07d18ad",
"0x8d5cba5345f36c7d272c8be921bfa0a60f479a78c5ad9d5e35122f869720c9ad"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

