---
sidebar_position: 1
title: Overview
---

# Overview

Using the zkSig SDK, a new agreement signatures is processed in a user's browser (see [Agreement Processing](../agreement-creation/agreement-processing.md))
and then added to a public audit trail. The in-browser processing results in:

- **Participant ID** - the root hash of an SMT containing details about a signer
- **Signed Participant ID** - a singed participant ID using [EdDSA](https://en.wikipedia.org/wiki/EdDSA)
- **Audit Trail Root** - the root hash of an SMT representing all agreement participants

This information is sent to the zkSig API where it is verified and stored.

## In-Browser

```mermaid
sequenceDiagram
  actor Creator
  participant Privy
  participant SDK
  participant API

  Creator ->> Privy: Login
  Privy -->> Creator: Wallet
  Creator ->> SDK: Process signer details
  SDK ->> API: Signed Participant ID & ZKP of valid signer
  API -->> Creator: Transaction hash
```

## zkSig API

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
  API ->> Database: Store UserParticipant
  API ->> Web3Storage: Store encrypted files
  API ->> SmartContract: Signed Participant ID & ZKP of valid signer
  SmartContract ->> OnChainVerifier: Verify valid signer ZKP
  OnChainVerifier -->> SmartContract: Verification result
  SmartContract ->> Tableland: Store document ID & ZKP
  SmartContract -->> API: Transaction hash
```
