---
sidebar_position: 2
---

# Generate Solana IDL and Bytecode

## Build Your Program

The `anchor build` command compiles your Solana program and generates essential artifacts:

```bash
anchor build
```

## Generated Files

After building, you'll find these key files:

### Program Binary (.so file)

**Location:** `target/deploy/your_program_name.so`

This is the compiled Solana program in BPF bytecode format. Solana uses eBPF (extended Berkeley Packet Filter), which produces `.so` (shared object) files.

```bash
# Example path
target/deploy/my_project.so
```

### IDL (Interface Definition Language)

**Location:** `target/idl/your_program_name.json`

The IDL describes your program's interface - instructions, accounts, types, events, and errors in JSON format.

```bash
# Example path
target/idl/my_project.json
```

**IDL Contents:**

- Instruction definitions
- Account structures
- Custom types
- Events
- Error codes
- Program metadata

:::warning Use latest IDL format
Solana v0.30.0 (and later) produces a new IDL format. For detailed information, visit [Anchor v0.30.0 Release Notes](https://github.com/acheroncrypto/anchor/blob/v0.30.0/docs/src/pages/release-notes/0.30.0.md)

**_KontraxHub_** only supports the latest format of IDL. For legacy IDLs, please use `anchor idl convert` CLI to convert to the latest format. Please note that in certain situations, this conversion cannot provide enough/correct IDL details.
:::

## Program ID

Your program's address is stored in:

```
target/deploy/your_program_name-keypair.json
```

View your program ID:

```bash
solana address -k target/deploy/your_program_name-keypair.json
```

## Verify Build Artifacts

Check that files were generated:

```bash
ls -la target/deploy/
ls -la target/idl/
ls -la target/types/
```

## Clean Build

To rebuild from scratch:

```bash
anchor clean
anchor build
```

## Notes

- **Solana programs compile to .so files** in BPF/eBPF bytecode format
- The `.so` file is the deployable program binary
- The IDL enables client-side program interaction
- Build artifacts are gitignored by default
- Always rebuild after modifying program code
