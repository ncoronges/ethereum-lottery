const HDWalleProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode}=require('./compile');
const provider = new HDWalleProvider(
    'license carbon dumb pilot capital various oak tide initial aunt genius rocket',
    'https://rinkeby.infura.io/n09ZT1kEIs7jIkkDCR73 '
);
const web3 =new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('attempting to deploy from account', accounts[0]);
    const tx = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ gas:'1000000', from: accounts[0], gasLimit: '10000000' });
    console.log('Contract deployed to', tx.options.address);
};
deploy();