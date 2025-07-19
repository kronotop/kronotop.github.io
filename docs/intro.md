---
sidebar_position: 1
slug: /
---

# Introduction

## Kronotop: Distributed. Scalable. ACID-Compliant.

Kronotop is a distributed, transactional document database designed for horizontal scalability. It provides a robust foundation for applications needing to manage large volumes of documents while ensuring strong consistency guarantees for critical metadata operations. By leveraging FoundationDB as its transactional backend for metadata and indexes, Kronotop delivers [ACID](https://apple.github.io/foundationdb/developer-guide.html#transaction-basics) integrity, offering reliability often sought in demanding environments.

Kronotop features an [MQL-like query language](https://www.mongodb.com/docs/manual/reference/operator/) and uses the [RESP3](https://redis.io/docs/latest/develop/reference/protocol-spec/) wire protocol, ensuring broad compatibility with the Redis client ecosystem. It implements core Redis in-memory data structures like Strings and Hashes, alongside its own specialized structures: ZMap (an ordered key-value store acting as a RESP proxy for FoundationDB) and Bucket (designed for storing
JSON-like documents). While document bodies are stored directly on local filesystems, Kronotop uses BSON as the default 
data format to organize and store within Buckets, with JSON also available.

*Kronotop is built for developers seeking the flexibility of a document model combined with the transactional safety and scalability powered by FoundationDB.*

