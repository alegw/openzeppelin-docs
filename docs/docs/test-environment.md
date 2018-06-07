---
id: test-environment
title: Setting up your test environment
---

To start developing Ethereum apps (or DApps, for decentralized applications),
you’ll need a client to connect to the network.
It will act as your window to the distributed network, and provide a view of
the blockchain, where all the EVM state is represented.

There are various compatible clients for the protocol, At OpenZeppelin, we've found
[ganache-cli](https://github.com/trufflesuite/ganache-cli) to be the most
beginner-friendly option (rather than the more popular `geth`). Install it and leave it running in a new terminal.

> You may need to prepend `sudo` depending on your setup.

```sh
npm install -g ganache-cli
ganache-cli
```

Each time you run `ganache-cli`, it will generate 10 new addresses with
simulated test funds for you to use. This is not real money and you’re safe to
try anything with no risk of losing funds. Its state is volatile – every time you close it, the state of your node and accounts will be cleared.

The most popular language for writing smart contracts in Ethereum is
[Solidity](https://solidity.readthedocs.io/en/latest/), so we’ll be using that.
We’ll use the [Truffle development framework](https://github.com/trufflesuite/truffle), which helps with smart contract creation, compiling, deployment and testing.

```sh
npm install -g truffle
mkdir solidity-experiments
cd solidity-experiments/
truffle init
```

> macOS users: Truffle is sometimes confused by `.DS_Store` files. If you get an error mentioning one of those files, just delete it.

Configure Truffle to deploy to your local `ganache-cli` development network. Edit `truffle.js` and paste in:

```
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
```

Next up, we'll be adding some Solidity contracts to the `solidity-experiments` directory, compiling them and deploying them on your local `ganache-cli` test network.