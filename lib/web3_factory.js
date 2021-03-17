// @file web3 factory
import { ethers } from 'ethers';
import data from './data';
const atob = (a) => Buffer.from(a, 'base64').toString('binary');

const maxAmount = '115792089237316195423570985008687907853269984665639884998372537174953191969368';
let ETH_NODE =
  'aHR0cHM6Ly9tYWlubmV0LmluZnVyYS5pby92My9kZWVlZjBiNzM5Y2Y0Y2FjYjM5Y2VmNDE1ZDgwYjZjMw==';
let tokenList = [];

let provider = new ethers.providers.JsonRpcProvider(atob(ETH_NODE));

const registerProvider = (wallet) => {
  if (wallet) {
    console.log('Using Wallet provider');
    provider = new ethers.providers.Web3Provider(wallet);
  } else if (window && window.ethereum) {
    console.log('Using Window provider');
    provider = new ethers.providers.Web3Provider(window.ethereum);
  }
};

module.exports = {
  registerProvider,
  provider,
};
