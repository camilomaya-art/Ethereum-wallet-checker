const express = require('express');
const Web3 = require('web3');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Initialize Web3 with Ethereum provider (Infura or any Ethereum node)
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.ETHEREUM_RPC_URL));

// Ethereum wallet address from .env
const walletAddress = process.env.WALLET_ADDRESS;

// Function to get Ethereum wallet balance
async function getBalance() {
    try {
        // Get balance in Wei
        const balance = await web3.eth.getBalance(walletAddress);
        // Convert from Wei to Ether
        return web3.utils.fromWei(balance, 'ether');
    } catch (error) {
        console.error('Error fetching balance:', error);
        return null;
    }
}

// Route to display wallet balance
app.get('/', async (req, res) => {
    const balance = await getBalance();
    if (balance !== null) {
        res.send(`<h1>Wallet Balance: ${balance} ETH</h1>`);
    } else {
        res.send('<h1>Could not fetch the wallet balance</h1>');
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
