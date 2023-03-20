---
sidebar_position: 3
title: Agreement Storage
---

# Agreement Storage

## Filecoin/IPFS

We encrypt (using [xsalsa20](https://www.xsalsa20.com/)) and store two files for every created deal.

- an encrypted agreement PDF
- an encrypted JSON file with agreement details

To facilitate storage deals and IPFS pinning we use [web3.storage](https://web3.storage).

## On-Chain

We store the document ID, status (pending or complete), and ZKP of valid document ID on-chain
for every agreement created.

## Tableland

We also store the document ID, status (pending or complete), and ZKP of valid document ID on
tableland for easy querying.
