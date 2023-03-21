---
sidebar_position: 2
title: Agreement Processing
---

# Agreement Processing

Once all information is collected for an agreement, it is processed and a document ID (sparse merkle tree root hash)
is returned.

## Step 1: PDF Processing

An agreement's PDF is processed with the following goals:

- create a unique representation of the PDF without divulging the actual PDF
- have the ability to prove that a page is contained within a PDF without sharing the original PDF
- have the ability to prove that a form field is contained within a PDF without sharing the original PDF

To accomplish this two [sparse merkle trees](https://wiki.polygon.technology/docs/zkEVM/zkProver/sparse-merkle-tree/)
(SMTs) are created: an SMT that represents the pages of a PDF and an SMT that represents the form fields of a PDF.

### PDF Pages SMT

An agreement's PDF is taken apart page by page and inserted into an SMT.

- A new PDF is created out of each page in a PDF
- Each page PDF is [poseidon hashed](https://www.poseidon-hash.info/)
- Each page hash is then inserted into a sparse merkle tree (SMT)

```mermaid
flowchart TD
  PDF --Split Into Pages--> Page1 & Page2 & Page3 & PageN

  Page1 & Page2 & Page3 & PageN --Poseidon Hash--> SMT

  SMT -. Root Node .-> PageHash
```

### PDF Form Fields SMT

The name of every field in a PDF is [poseidon hashed](https://www.poseidon-hash.info/) and inserted
into an SMT.

```mermaid
flowchart TD
  PDF --Get PDF Form--> PDFForm

  PDFForm --> Field1 & Field2 & Field3 & FieldN

  Field1 & Field2 & Field3 & FieldN --Poseidon Hash--> SMT

  SMT -. Root Node .-> FieldHash
```

## Step 2: Encrypt Agreement PDF

An agreement's PDF is encrypted so that it can be stored publicly on IPFS. The PDF is encrypted using
[xsalsa20](https://www.xsalsa20.com/) with a randomly generated encryption key.

## Step 3: Create a document ID

A document ID is created with the following goals:

- create a unique identifier for an agreement
- have the ability to prove a detail about an agreement (e.g. its title) without divulging additional information

To accomplish this, basic details about an agreement are inserted into an SMT:

- title
- PDF IPFS CID for the agreement PDF
- IPFS CID for the agreement PDF post encryption (from step 2)
- PDF page hash (from step 1)
- PDF field hash (from step 1)
- total pages in the PDF
- encryption key (from step 2)

The root node of this SMT is used as the document ID.

```mermaid
flowchart TD
  title & PDFCID & EncryptedPDFCID & PageHash & FieldHash & PageCount & RandomEncryptionKey --> SMT
  SMT -.Root Node.-> DocumentID
```

## Step 4: Zero Knowledge Proof Generation

A zero knowledge proof is generated to prove that the hash from step 3 is a valid document ID
(it represents a valid SMT). [DocumentId Circuit](https://github.com/zksig/zk-contracts/blob/main/circuits/templates/DocumentId.circom)
