---
id: ethereum-basics
title: Ethereum basics
---

## Ethereum
Ethereum is an open-source public platform, distributed and based on blockchain
technology, to run applications without censorship or third-party
interference.

## The Ethereum Virtual Machine
Ethereum was designed as a smart contract platform after 
Vitalik Buterin's critique of Bitcoin's limitations for this specific use case.
The [Ethereum Virtual Machine (EVM)](https://ethereum.github.io/yellowpaper/paper.pdf) is where smart contracts run in Ethereum.

Ethereum provides a more expressive and complete language than Bitcoin for scripting.
EVM code is, in fact, [Turing Complete](https://github.com/ethereum/wiki/wiki/White-Paper#computation-and-turing-completeness) .  A good metaphor is that the EVM is a distributed global computer where all smart contracts are executed.

## Gas
Since smart contracts run on the EVM, whose every single operation is executed
by every node in the network, there must be a mechanism to limit the
resources used by each contract. Otherwise, it could starve the whole network’s
computing power. This is why gas exists – it fixes a cost for every
instruction, like data reads and writes, expensive computations like cryptographic primitives, making calls (sending messages) to other contracts, etc.

Each gas unit consumed by a transaction must be paid for in ether (ETH), the native currency of the Ethereum network.
The account that sends the transaction must specify a gas price it's willing to pay
(the higher, the faster the code will execute) and and gas budget (an upper bound on how much gas the transaction can consume).

You can read more about gas [here](https://ethereum.gitbooks.io/frontier-guide/content/costs.html).

## Accounts

Every account is identified by an address. There are two kinds of accounts
sharing the same address space: external accounts,
controlled by individuals' private keys,
and contract accounts, controlled by the code that they're stored with. 

If you have a wallet that stores ETH, you control a set of external accounts.
Note that **only external accounts can initiate transactions**.

## Transactions
A transaction is a message sent from one account to another account. You can
send a transaction to another external account in order to transfer ETH. If the
target account is a contract account, its code will be executed as well. Note
that every transaction that involves code execution will be executed on all
nodes of the network. Furthermore, every code run, or transaction execution,
will be recorded in the Ethereum blockchain.

## Solidity
Solidity is a contract-oriented high-level language, with similar syntax to
JavaScript. It is statically typed, supports inheritance, libraries and complex
user-defined types. It compiles to EVM assembly, which is run by the nodes.
