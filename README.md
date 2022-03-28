# Nuqtah Smartcontracts

## Instructions
Open `migrations/2_deploy_contracts.js` file
- Set contract initialization values (token name, symbol, ipfs prefix url and root admin wallet address).

In the root directory:
- Install dependencies :`npm install` 
- Rename .env-sample file to .env and fill the missing values.
- To compile truffle project: `truffle compile`

##### For deployment

1. Ethereum Testnet: ` truffle migrate --network rinkeby`
2. Ethereum mainnet: `truffle migrate --network live`