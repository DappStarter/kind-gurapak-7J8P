require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food jar rice magic around hen light army giggle'; 
let testAccounts = [
"0x9c041a49beeb127a1846b7f012a1570137feb64d3e9d454a6a53490355a61469",
"0xc4b454b113e81749d5443b3ba0b00d731d858e64f1fd6528264733203fb662f2",
"0xabe879bed2f1215ee7a99b68641e138487ca5248eece50887386004b8aa14172",
"0x8edb402eba1abbc20fa8d254e426674de37e16049cd2188f529acdbbd63a6610",
"0x56ea74bc5f63dae2a6f6e29e806c89063325570c874ff00e3c53e83cf1eb7618",
"0xb4a252b8079a651fadf4de54cf13ff886b32b932993a7810f90ca86aa33a46a0",
"0xe48015ceb7437e6cc56a9cbd29cd753f2b4fd5bacca876815fad9c32afcd89d6",
"0x24b10be1ee91ed517bd6055d2675715859d854d3533ef1c367f46fd3a8036264",
"0x8a597c769655381e27eb134afedbd536f98186d452a36a3e611c732a312be88b",
"0xfb72cd3a625b2a5c20143a481b3000ae046a43f8a31a728f8437e915d658db2a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

