---
id: start
title: OpenZeppelin
---

OpenZeppelin is a library for writing secure [smart contracts](https://en.wikipedia.org/wiki/Smart_contract) on Ethereum, in the [Solidity language](https://solidity.readthedocs.io/en/develop/). With OpenZeppelin, you can build distributed applications, protocols and organizations taking advantage of good code patterns.

The OpenZeppelin community is focused on providing short, secure smart contracts that serve as building blocks for complex decentralized applications. Our contracts have been widely reviewed and safely manage millions of dollars' worth of digital assets every day. 

## Quick Start

OpenZeppelin integrates with [Truffle](http://truffleframework.com) for professional smart contract development.

> New to smart contract development? Never heard of Truffle before? We recommend following our [Smart Contracts 101 guide](smart-contracts-101.md).

```sh
mkdir my-project
cd my-project
truffle init
npm init -y
npm install -E openzeppelin-solidity
```

> OpenZeppelin does not currently follow semantic versioning. You may encounter breaking changes upon a minor version bump. We recommend pinning the version of OpenZeppelin you use, as done by the `-E` (`--save-exact`) option.

Now, all the OpenZeppelin contracts live in the `node_modules/openzeppelin-solidity/contracts` folder. To use the library, just import the contracts you need:

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