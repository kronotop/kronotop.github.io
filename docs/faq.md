---
sidebar_position: 10
description: Frequently Asked Questions
---

# Frequently Asked Questions

## How do Redis data structures work in Kronotop? Are they transactional?

No. The currently supported Redis data structures (`STRING` and `HASH`) in Kronotop are **not transactional**. These operations are not backed by FoundationDB and do not participate in Kronotop’s ACID-compliant transactional layer.

Instead, they are implemented as **in-memory structures** using Java’s `ConcurrentHashMap`. Each Kronotop shard maintains its own memory-resident data store, segmented and optimized for concurrent access. This design provides low-latency performance similar to Redis, but without durability or transactional guarantees.

This Redis compatibility layer is best suited for ephemeral workloads such as caching, volatile state management, or high-throughput operations where persistence and isolation are not required. For durable and transactional data access, use Kronotop’s `bucket` abstraction and the BQL (Bucket Query Language) engine.

