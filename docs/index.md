---
sidebar_position: 1
---

# Architecture

## Modules

- **Identity** - primitives for identifying a user, signing messages, and encrypting data
- **Storage** -  primitives for saving and retrieving files from persistent storage
- **Audit Trail** - a service for creating, updating, and accessing a chronological record of agreement events
- **Event Broadcaster** - services used to broadcast messages to smart contracts and webhooks

Novel implementations of these modules can be implemented to cover new jurisdictions and unforeseen use cases.
For example, currently we use [Web3Auth](https://web3auth.io/) to handle **identity**. However, in the future we
can implement new **identity** modules like [Decentralized Identity](https://polygon.technology/polygon-id) or
[Centralized Certificate Authorities](https://en.wikipedia.org/wiki/Certificate_authority). Similarly, we can
implement new **event broadcasters** to send to agreement events to any blockchain.

## Features & Flows

The above modules are composed to create features and user flows.

### Create & Sign Agreement

```mermaid
sequenceDiagram
  actor User
  participant Authentication
  participant ZeroKnowledge
  participant EncryptedStorage
  participant PublicAuditTrail
  participant EventBroadcaster

  User ->> Authentication: User identifies themself
  Authentication -->> User: User credentials

  User ->> ZeroKnowledge: Create or sign agreement
  ZeroKnowledge -->> User: ZKP of agreement or signature validity

  User ->> EncryptedStorage: Store agreement or signature data

  User ->> PublicAuditTrail: Create or insert into public agreement audit trail
  PublicAuditTrail -->> EventBroadcaster: Broadcast agreement events
```

### Share Agreement Detail

A `User` can share details about an agreement with a `Recipient`  by creating a zero knowledge proof
in-browser.

```mermaid
sequenceDiagram
  actor User
  participant Authentication
  participant EncryptedStorage
  participant ZeroKnowledge
  actor Recipient

  User ->> Authentication: User identifies themself
  Authentication -->> User: User credentials

  User ->> EncryptedStorage: Request agreement or signature details
  EncryptedStorage -->> User: Decrypted details

  User ->> ZeroKnowledge: Create proof for agreement detail
  ZeroKnowledge -->> User: ZKP of agreement detail

  User ->> Recipient: Send ZKP of agreement detail
```

The `Recipient` can then verify the zero knowledge proof shared with them using an on-chain verifier.

```mermaid
sequenceDiagram
  actor Recipient
  participant PublicAuditTrail
  participant ZeroKnowledge

  Recipient ->> PublicAuditTrail: Check hashes stored on public audit trail
  Recipient ->> ZeroKnowledge: Call on-chain verification method with provided ZKP
  ZeroKnowledge -->> Recipient: Verification result
```

### Smart Contract Hooks

```mermaid
sequenceDiagram
  participant EventBroadcaster
  participant SmartContract
  participant PublicAuditTrail
  participant ZeroKnowledge

  EventBroadcaster ->> SmartContract: Call method on smart contract with ZKP

  SmartContract ->> PublicAuditTrail: Retrieve agreement hashes
  PublicAuditTrail -->> SmartContract: Agreement hashes

  SmartContract ->> ZeroKnowledge: Verify ZKP with agreement hashes
  ZeroKnowledge -->> SmartContract: Verification Result

  SmartContract ->> SmartContract: Run method logic
```
