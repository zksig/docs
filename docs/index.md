---
sidebar_position: 1
---

# Architecture

## Modules

- **Identity** - primitives for identifying a user, signing messages, and encrypting data
- **Zero Knowledge** - primitives for proof generation and verification
- **Storage** - primitives for saving and retrieving files from persistent storage
- **Audit Trail** - a service for creating, updating, and accessing a chronological record of agreement events
- **Event Broadcaster** - services used to broadcast messages to smart contracts and webhooks

Novel implementations of these modules can be implemented to cover new jurisdictions and unforeseen use cases.
For example, currently we use [Privy](https://privy.io/) to handle **identity**. However, in the future we
can implement new **identity** modules like [Decentralized Identity](https://polygon.technology/polygon-id) or
[Centralized Certificate Authorities](https://en.wikipedia.org/wiki/Certificate_authority). Similarly, we can
implement new **event broadcasters** to send to agreement events to any blockchain.

## Features & Flows

The above modules are composed to create features and user flows.

### Create & Sign Agreement

```mermaid
sequenceDiagram
  actor User
  participant Identity
  participant ZeroKnowledge
  participant Storage
  participant AuditTrail
  participant EventBroadcaster

  User ->> Identity: User identifies themself
  Identity -->> User: User credentials

  User ->> ZeroKnowledge: Create or sign agreement
  ZeroKnowledge -->> User: ZKP of agreement or signature validity

  User ->> Storage: Store agreement or signature data

  User ->> AuditTrail: Create or insert into public agreement audit trail
  AuditTrail -->> EventBroadcaster: Broadcast agreement events
```

### Share Agreement Detail

A `User` can share details about an agreement with a `Recipient` by creating a zero knowledge proof
in-browser.

```mermaid
sequenceDiagram
  actor User
  participant Identity
  participant Storage
  participant ZeroKnowledge
  actor Recipient

  User ->> Identity: User identifies themself
  Identity -->> User: User credentials

  User ->> Storage: Request agreement or signature details
  Storage -->> User: Decrypted details

  User ->> ZeroKnowledge: Create proof for agreement detail
  ZeroKnowledge -->> User: ZKP of agreement detail

  User ->> Recipient: Send ZKP of agreement detail
```

The `Recipient` can then verify the zero knowledge proof shared with them using an on-chain verifier.

```mermaid
sequenceDiagram
  actor Recipient
  participant AuditTrail
  participant ZeroKnowledge

  Recipient ->> AuditTrail: Check hashes stored on public audit trail
  Recipient ->> ZeroKnowledge: Call on-chain verification method with provided ZKP
  ZeroKnowledge -->> Recipient: Verification result
```

### Smart Contract Hooks

```mermaid
sequenceDiagram
  participant EventBroadcaster
  participant SmartContract
  participant AuditTrail
  participant ZeroKnowledge

  EventBroadcaster ->> SmartContract: Call method on smart contract with ZKP

  SmartContract ->> AuditTrail: Retrieve agreement hashes
  AuditTrail -->> SmartContract: Agreement hashes

  SmartContract ->> ZeroKnowledge: Verify ZKP with agreement hashes
  ZeroKnowledge -->> SmartContract: Verification Result

  SmartContract ->> SmartContract: Run method logic
```
