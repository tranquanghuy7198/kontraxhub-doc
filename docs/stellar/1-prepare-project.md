---
sidebar_position: 1
---

# Prepare Stellar Project

## Prerequisites

- Rust (latest stable)
- Git
- Cargo
- Node.js (v18+)

## Install Stellar CLI

Using cargo:

```bash
cargo install --locked stellar-cli --features opt
```

Verify installation:

```bash
stellar --version
```

## Configure Stellar Client

Login to Stellar (generates or imports a keypair):

```bash
stellar keys generate --global alice --network testnet
```

This creates a new identity stored in your local config.

Switch to testnet (for development):

```bash
export STELLAR_NETWORK=testnet
```

Or add to your shell profile for persistence:

```bash
echo 'export STELLAR_NETWORK=testnet' >> ~/.bashrc
source ~/.bashrc
```

## Get Testnet Stellar Tokens

Create a testnet account using the Stellar CLI:

```bash
stellar keys fund alice --network testnet
```

This uses Friendbot to fund your testnet account automatically.

Check your balance:

```bash
stellar account balances <your-public-key> --network testnet
```

Or request tokens directly via [Stellar Friendbot](https://friendbot.stellar.org/).

## Create a New Stellar Rust Project

Initialize a new project:

```bash
cargo new --lib my_project
cd my_project
```

## Project Structure

```
my_project/
├── src/
│   └── lib.rs            # Main contract code
├── Cargo.toml            # Package manifest
├── Cargo.lock
└── README.md
```

---

**For detailed documentation, visit:** [Stellar Documentation](https://developers.stellar.org/docs)
