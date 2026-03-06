---
sidebar_position: 2
---

# Generate CosmWasm ABI and Bytecode

## Generate JSON Schema (ABI)

Schema files describe your contract's interface (similar to ABI):

```bash
cargo schema
```

This creates JSON schema files in `schema/` directory:

- `instantiate_msg.json`
- `execute_msg.json`
- `query_msg.json`
- Main JSON schema

Only the main JSON schema file is necessary to interact with your CosmWasm smart contract. This file has the same name as your smart contract. For example, if your contract name is `my-contract`, you can find the main JSON schema file at `schema/my-contract.json`.

## Optimized Build for Deployment

Use the CosmWasm optimizer to create production-ready WASM:

```bash
docker run --rm -v "$(pwd)":/code \
  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
  cosmwasm/optimizer-arm64:0.17.0
```

This generates an optimized `.wasm` file in the `artifacts/` directory. This file contains the bytecode of your CosmWasm smart contract. It is necessary when you want to deploy your CosmWasm contract to blockchains.

:::warning Use correct optimizer
For Intel chip, please use `cosmwasm/optimizer` instead. It is recommended to always check the latest optimizer versions at [Docker Hub](https://hub.docker.com/r/cosmwasm/optimizer-arm64).
:::

---

**For detailed documentation, visit:** [CosmWasm Documentation](https://docs.cosmwasm.com) and [Optimizer Documentation](https://github.com/CosmWasm/optimizer).
