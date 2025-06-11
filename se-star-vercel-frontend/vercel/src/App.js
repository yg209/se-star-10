import React from 'react';
import Web3Modal from "web3modal";
import { ethers } from "ethers";

function App() {
  const connectWallet = async () => {
    const providerOptions = {};
    const web3Modal = new Web3Modal({ cacheProvider: false, providerOptions });
    const instance = await web3Modal.connect();
    const provider = new ethers.BrowserProvider(instance);
    const signer = await provider.getSigner();
    alert('Connected: ' + await signer.getAddress());
  };

  return (
    <div className="App" style={{ padding: '50px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>SE-STAR Web3 Dashboard</h1>
      <button onClick={connectWallet}>Connect Wallet</button>
      <p>Protecting Web3 one wallet at a time.</p>
    </div>
  );
}

export default App;