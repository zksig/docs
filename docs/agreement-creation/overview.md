---
sidebar_position: 1
title: Overview
---

import pdfTree from "./img/pdf-tree.png";

# Overview

A new agreement is primary processed in a user's browser (see [Agreement Processing](./agreement-processing.md))
with the zksig SDK. The in-browser processing results in:

- Document ID
- Expected Participants
- Encrypted PDF
- Encrypted Details
- Encrypted Encryption Key
- Zero Knowledge Proof of Valid Agreement

This information is sent to the zksig API where it is verified and stored.

## In-Browser

```mermaid
sequenceDiagram
  actor Creator
  participant Web3Auth
  participant SDK
  participant API

  Creator ->> Web3Auth: Login
  Web3Auth -->> Creator: Wallet
  Creator ->> SDK: Process agreement details
  SDK ->> API: Document ID & ZKP of valid agreement
  API -->> Creator: Transaction hash
```

## zksig API

```mermaid
sequenceDiagram
  participant API
  participant Database
  participant OnChainVerifier
  participant SmartContract
  participant Web3Storage
  participant Tableland

  API ->> OnChainVerifier: Verify valid agreement ZKP
  OnChainVerifier -->> API: Verification result
  API ->> Database: Store UserDocument and ExpectedParticipants
  API ->> Web3Storage: Store encrypted files
  API ->> SmartContract: Document ID & ZKP of valid agreement
  SmartContract ->> OnChainVerifier: Verify valid agreement ZKP
  OnChainVerifier -->> SmartContract: Verification result
  SmartContract ->> Tableland: Store document ID & ZKP
  SmartContract -->> API: Transaction hash
```
