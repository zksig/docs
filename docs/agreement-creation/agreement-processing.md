---
sidebar_position: 2
title: Agreement Processing
---

import pdfTree from "./img/pdf-tree.png";

# Agreement Processing

Once all information is collected for an agreement, it is processed and a document id (sparse merkle tree root hash)
is returned.

## Step 1: PDF Processing

An agreement's PDF is processed with the following goals:

- create a unique representation of the PDF without divulging the actual PDF
- have the ability to prove that a page is contained within a PDF without sharing the original PDF
- have the ability to prove that a form field is contained within a PDF without sharing the original PDF

To accomplish this two sparse merkle trees (SMTs) are created: an SMT that represents the pages of a PDF
and an SMT that represents the form fields of a PDF.

### PDF Pages SMT

An agreement's PDF is taken apart page by page and inserted into an SMT.

- Each page of the PDF is [poseidon hashed](https://www.poseidon-hash.info/), a zk-friendly hashing function.
- Each page's poseidon hash is then inserted into a sparse merkle tree (SMT)

<img src={pdfTree} width="250" style={{ margin: "auto", display: "block" }} />

### PDF Form Fields SMT
