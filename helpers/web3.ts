import Web3 from 'web3'

declare var window: any

export const getWeb3 = async () => {
  const eth = await ethEnabled()
  if (eth) {
    return window.web3
  }

  return null
}

export const ethEnabled = async () => {
  if (window.ethereum) {
    await window.ethereum.send('eth_requestAccounts');
    window.web3 = new Web3(window.ethereum);
    return true;
  }
  return false;
}