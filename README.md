# Ethereum Wallet Balance Checker

This is a simple Node.js application that connects to the Ethereum blockchain using the Web3.js library and checks the balance of a given Ethereum wallet.

## Installation

### Requirements

- Node.js (v14 or above)
- npm (or yarn)

### Steps to Run Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/ethereum-wallet-checker.git
    ```

2. Navigate into the project directory:
    ```bash
    cd ethereum-wallet-checker
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory with the following content:
    ```env
    ETHEREUM_RPC_URL=https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID
    WALLET_ADDRESS=0xYourEthereumWalletAddress
    ```

    - **ETHEREUM_RPC_URL**: Use Infura or any Ethereum node RPC URL.
    - **WALLET_ADDRESS**: Replace this with the Ethereum wallet address whose balance you want to check.

5. Start the server:
    ```bash
    npm start
    ```

6. Open your browser and navigate to `http://localhost:3000` to view the wallet balance.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to your fork (`git push origin feature-branch`).
5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
