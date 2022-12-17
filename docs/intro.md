---
sidebar_position: 1
---

# Introduction

ZKsig allows developers to build workflows on top of legally binding digital signatures in two ways.

1. Contract Callbacks
2. Contract Events

## Contract Callbacks

Contract callbacks allow other smart contracts hook into the ZKsig smart contract. Currently there are three hooks:

- `Agreement Created` - triggered when a new ZKsig agreement is created
- `Agreement Complete` - triggered when a ZKsig agreement is complete (all signatures have been gathered)
- `Signature Complete` - triggered when a signature is gathered

### Agreement Created

The `Agreement Created` hook is called when a new ZKsig agreement is created. The receiving smart contract
must follow the `IAgreementCallback` interface and return:

- `AgreementStatus` - the new status of the agreement
- `signatureCallback` - a smart contract address (or 0x0) that will be called on each signature

It can be registered at either the profile or agreement level.

### Agreement Complete

The `Agreement Complete` hook is called when a ZKsig agreement is completed. The receiving smart contract
must follow the `IAgreementCallback` interface and return:

- `AgreementStatus` - the new status of the agreement
- `signatureCallback` - a smart contract address (or 0x0) that will be called on each signature

It can be registered at either the profile or agreement level.

### Signature Complete

The `Signature Complete` hook is called when a new ZKsig signature is created. The receiving smart
contract must follow the `ISignatureCallback` interface.

It can be registered at either the profile or agreement level.

### Profile Level Callbacks

Profile level callbacks are set on a user profile. They are callbacks that will be invoked for all
agreements created by a user or all signatures made by a user.

### Agreement Level Callbacks

Agreement level callbacks are set on an agreement. They are callbacks that will be invoked only when
events happen on the particular agreement they are registered to.

## Contract Events

Coming Soon...
