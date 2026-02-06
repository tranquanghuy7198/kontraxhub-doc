---
sidebar_position: 2
---

# Generate Near ABI and Bytecode

## Build the Project

### Project Build

If you want to simply build your Near project during development process:

```bash
cargo near build non-reproducible-wasm
```

Build artifacts are generated in `target/` directory:

- Compiled WASM bytecode
- Contract ABI

### Contract ABI and Bytecode

Your Near ABI and bytecode are stored in the `target/` directory. When the build process finishes, it will suggest you the paths to the ABI file and the bytecode file. Normally they are at:

- ABI: `/target/near/<your-contract-name>_abi.json`
- Bytecode: `/target/near/<your-contract-name>.wasm`
