---
id: start
title: OpenZeppelin
---

OpenZeppelin is a library for writing secure [smart contracts](https://en.wikipedia.org/wiki/Smart_contract) on Ethereum, in the [Solidity language](https://solidity.readthedocs.io/en/develop/). With OpenZeppelin, you can build distributed applications, protocols and organizations taking advantage of good code patterns.

> New to smart contract development? Read our [Smart Contracts 101 guide](smart-contracts-101.md).

The OpenZeppelin community is focused on providing short, secure smart contracts that serve as building blocks for complex decentralized applications. Our contracts have been widely reviewed and safely manage millions of dollars' worth of digital assets every day. 

## Quick Start

OpenZeppelin integrates with [Truffle](https://github.com/ConsenSys/truffle), an Ethereum development environment. Please install Truffle and initialize your project with `truffle init`.

```sh
npm install -g truffle
mkdir myproject && cd myproject
truffle init
```

To install the OpenZeppelin library, run the following in your Solidity project root directory:
```sh
npm init -y
npm install -E openzeppelin-solidity
```

**Note that OpenZeppelin does not currently follow semantic versioning.** You may encounter breaking changes upon a minor version bump. We recommend pinning the version of OpenZeppelin you use, as done by the `-E` (`--save-exact`) option.

After that, you'll get all the library's contracts in the `node_modules/openzeppelin-solidity/contracts` folder. You can use the contracts in the library like so:

```js
import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';

contract MyContract is Ownable {
  ...
}
```

## Developer resources
Please visit the [OpenZeppelin Wiki](https://github.com/OpenZeppelin/openzeppelin-solidity/wiki). You'll find links to our [contribution guidelines](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/CONTRIBUTING.md), [issue tracker](https://github.com/OpenZeppelin/openzeppelin-solidity/issues), and other resources. 

## Security Notice
Please [follow best practices](https://consensys.github.io/smart-contract-best-practices/) and use common sense when handling real money. OpenZeppelin is provided as-is, and we assume no responsibility for other parties' implementation decisions. The simplest change in a contract can have unintended consequences.

If you find a security issue in our codebase, please email [security@openzeppelin.org](mailto:security@openzeppelin.org).

## License
Code released under the [MIT License](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/LICENSE).

## Team
OpenZeppelin was started and is sponsored by [Zeppelin](https://zeppelin.solutions/).