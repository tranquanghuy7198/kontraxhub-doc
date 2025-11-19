---
sidebar_position: 1
---

# Prepare EVM Project

## Prerequisites

- Node.js (v18+)
- npm or yarn
- Git

## Install Hardhat

Create a new project directory:

```bash
mkdir my-hardhat-project
cd my-hardhat-project
npm init -y
```

Install Hardhat:

```bash
npm install --save-dev hardhat
```

:::note
This documentation focuses on Hardhat. If you use other frameworks like Foundry or Truffle, please follow their documentations.
:::

## Initialize Hardhat Project

Create a new Hardhat project:

```bash
npx hardhat init
```

Select a project type:

- **Create a JavaScript project** (recommended for beginners)
- **Create a TypeScript project** (recommended for production)
- Create an empty file `hardhat.config.js`

Install recommended dependencies when prompted.

## Project Structure

```
my-hardhat-project/
├── contracts/          # Solidity smart contracts
│   └── Lock.sol       # Example contract
├── scripts/           # Deployment scripts
│   └── deploy.js
├── test/              # Contract tests
│   └── Lock.js
├── hardhat.config.js  # Hardhat configuration
├── package.json
└── artifacts/         # Compiled contracts (generated)
```

## Write Your Smart Contract

Edit or create contracts in `contracts/` directory:

```solidity
// contracts/MyContract.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MyContract {
    uint256 public value;

    event ValueChanged(uint256 newValue);

    function setValue(uint256 _value) public {
        value = _value;
        emit ValueChanged(_value);
    }

    function getValue() public view returns (uint256) {
        return value;
    }
}
```

## Common Plugins

```bash
# Ethers.js integration
npm install --save-dev @nomicfoundation/hardhat-ethers ethers

# Contract verification
npm install --save-dev @nomicfoundation/hardhat-verify
```

**For detailed documentation, visit:** [Hardhat Documentation](https://hardhat.org/docs)
