---
sidebar_position: 1
---

# Architecture

## Modules

zkSig is comprised of the following modules:

- **Authentication** - user provides credentials to prove who they are
- **Encrypted Storage** - used to store encrypted files containing details about agreements and signatures
- **Public Audit Trail** - a chronological record of agreement events stored in public as hashes
- **Event Broadcaster** - listens to agreement events and broadcasts messages to smart contracts and webhooks

Because of the modular design, zkSig can scale into new jurisdictions and new use cases by implementing
different versions of the above modules. For example, currently we use [Web3Auth](https://web3auth.io/)
to handle authentication. However, in the future we can implement new authentication modules like Decentralized
Identity or Centralized Public Key.

## Features & Flows

The above modules are composed in different to create different features and user flows.

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
