---
sidebar_position: 1
---

# Prepare Sui Project

## Prerequisites

- Rust (latest stable)
- Git
- Cargo

## Install Sui CLI

Using cargo:

```bash
cargo install --locked --git https://github.com/MystenLabs/sui.git --branch mainnet sui
```

Using Brew:

```bash
brew install sui
```

Verify installation:

```bash
sui --version
```

## Configure Sui Client

Initialize the Sui client:

```bash
sui client
```

This creates a configuration file and generates a new wallet address.

Switch to testnet (for development):

```bash
sui client new-env --alias testnet --rpc https://fullnode.testnet.sui.io:443
sui client switch --env testnet
```

## Get Testnet SUI Tokens

Request testnet tokens via Discord:

```bash
sui client faucet
```

Or join the [Sui Discord](https://discord.gg/sui) and use the #testnet-faucet channel.

Check your balance:

```bash
sui client gas
```

## Create a New Sui Move Project

Initialize a new project:

```bash
sui move new my_project
cd my_project
```

## Project Structure

```
my_project/
├── sources/           # Move source files
│   └── my_module.move
├── tests/            # Move unit tests
├── Move.toml         # Package manifest
└── README.md
```

## Basic Module Structure

Edit `sources/my_module.move`:

```move
module my_project::my_module {
    use sui::object::{Self, UID};
    use sui::tx_context::{Self, TxContext};
    use sui::transfer;

    public struct MyObject has key {
        id: UID,
        value: u64,
    }

    public entry fun create(value: u64, ctx: &mut TxContext) {
        let obj = MyObject {
            id: object::new(ctx),
            value,
        };
        transfer::transfer(obj, tx_context::sender(ctx));
    }
}
```

## Important Commands

```bash
# Build package
sui move build

# Test package
sui move test

# Publish package
sui client publish --gas-budget 100000000

# Call a function
sui client call --package <PKG_ID> --module <MODULE> --function <FUNC> --args <ARGS> --gas-budget 10000000
```

## Next Steps

- Implement entry functions for user interactions
- Define custom object types with `has key`
- Add shared objects for multi-user state
- Test with `sui move test`

---

**For detailed documentation, visit:** [Sui Documentation](https://docs.sui.io)
