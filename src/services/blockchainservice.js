// src/services/blockchainService.js
import { ethers } from 'ethers';

// Prüfen, ob MetaMask vorhanden is
export const getProvider = () => {
    if (window.ethereum) {
        return new ethers.providers.Web3Provider(window.ethereum);
    } else {
        throw new Error("MetaMask is ned installiert, du Schlawiner!");
    }
};

// Contract-Instanz erstellen
export const getContract = (contractAddress, contractABI) => {
    const provider = getProvider();
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
};
