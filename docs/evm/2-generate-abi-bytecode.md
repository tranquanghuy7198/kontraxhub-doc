---
sidebar_position: 2
---

# Generate EVM ABI and Bytecode

## Compile Contracts

Compile your smart contracts:

```bash
npx hardhat compile
```

This generates:

- **ABI (Application Binary Interface)**: JSON describing contract interface
- **Bytecode**: Compiled contract code for deployment

Build artifacts are located in:

```
artifacts/contracts/MyContract.sol/MyContract.json
```

## Contract Artifacts Structure

The compiled JSON file contains:

```json
{
  "contractName": "MyContract",
  "abi": [...],           // Contract interface
  "bytecode": "0x60...",  // Deployment bytecode
  "deployedBytecode": "0x60...",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
```

In this artifact, your ABI is available at the `abi` field as a JSON array, and your bytecode is a hexa string at the `bytecode` field. These are both useful to interact with your smart contract.
