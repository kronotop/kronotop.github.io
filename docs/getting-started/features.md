---
sidebar_position: 1
description: A list of basic capabilities of Kronotop
---

# Features

- **Developer-Focused Design:**  
  Built for developers who need the flexibility of a document model combined with strong transactional integrity, high
  performance, and operational simplicity.

- **ACID Transactions:**  
  Relies on **FoundationDB** as a transactional metadata and indexing store, offering ACID guarantees critical for
  consistency in cluster operations and data structures.

- **Native Document-Oriented Storage:**  
  Introduces **Bucket** — a specialized structure for storing JSON-like documents, backed by FoundationDB's
  transactional core.

- **Namespaces – Logical Isolation for ZMaps and Buckets:**  
  Namespaces enable multi-tenancy and logical separation across data structures.  
  Internally, it's a lightweight abstraction over FoundationDB’s Directory Layer.

- **RESP3 & RESP2 Wire Protocol Compatibility:**  
  Kronotop communicates over the [RESP](https://redis.io/docs/latest/develop/reference/protocol-spec/) protocol,
  ensuring seamless interoperability with the vast ecosystem of Redis clients across different programming languages.

- **Built for Horizontal Scalability:**  
  The system is natively designed for sharding and horizontal scaling, making it ideal for growing workloads without
  compromising performance or reliability.

- **Flexible Deployment Topologies:**  
  Supports both **single-master** and **multi-master** cluster configurations, enabling diverse deployment strategies to
  suit varying consistency and availability needs.

- **Partial Redis Cluster Specification Support:**  
  Implements key aspects of the Redis Cluster protocol, providing familiarity for teams migrating from Redis or building
  distributed applications.

- **ZMap – FoundationDB-Powered Ordered Key-Value Store:**  
  A high-performance, ordered key-value store built on top of FoundationDB.  
  ZMap acts as a Redis protocol proxy, bridging the RESP interface with FoundationDB’s transactional API.

- **Volume – Storage Engine with Replication:**  
  A storage engine designed to support **primary-standby replication**, allowing for durability and high availability of
  persistent components like Buckets.

- **Efficient Binary Data Handling:**  
  Uses **BSON** as the default storage format for structured documents, with optional JSON support for broader
  interoperability.

- **In-Memory and Durable Data Structures:**  
  Combines Redis-like in-memory structures (Strings, Hashes) with persistent, FoundationDB-backed storage layers like
  ZMap and Buckets.