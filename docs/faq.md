---
sidebar_position: 10
description: Frequently Asked Questions
---

# Frequently Asked Questions

## How do Redis data structures work in Kronotop? Are they transactional?

No. The currently supported Redis data structures (`STRING` and `HASH`) in Kronotop are **not transactional**. These operations are not backed by FoundationDB and do not participate in Kronotop’s ACID-compliant transactional layer.

Instead, they are implemented as **in-memory structures** using Java’s `ConcurrentHashMap`. Each Kronotop shard maintains its own memory-resident data store, segmented and optimized for concurrent access. This design provides low-latency performance similar to Redis, but without durability or transactional guarantees.

This Redis compatibility layer is best suited for ephemeral workloads such as caching, volatile state management, or high-throughput operations where persistence and isolation are not required. For durable and transactional data access, use Kronotop’s `bucket` abstraction and the BQL (Bucket Query Language) engine.

## Are Redis data structures persisted in Kronotop?

Yes, but with important caveats.

While Redis data structures (`STRING`, `HASH`, etc.) in Kronotop are **in-memory by default**, they are also **asynchronously persisted** to Kronotop’s in-house storage engine, called Volume. This means writes are first applied in memory (via ConcurrentHashMap), and then serialized and flushed to disk asynchronously.

The storage engine itself is designed for durability and high availability. It stores **metadata in FoundationDB** and supports **replication**, with both **hot-standby** and **standby** modes for failover and redundancy.

However, Redis operations **do not participate in FoundationDB transactions** and are not ACID-compliant. Persistence is best-effort and asynchronous by nature. This architecture favors low latency and high throughput, making it ideal for caching or transient state, but unsuitable for workloads that demand strict consistency.

## Does Kronotop support Redis Cluster?

**Partially**. Kronotop provides **partial support for the Redis Cluster protocol**. It implements enough of the cluster API and command set to ensure compatibility with most Redis clients operating in cluster mode (e.g., Jedis, lettuce, redis-py, etc.).

While Kronotop does **not fully implement the entire Redis Cluster protocol**, such as resharding commands or gossip-based node discovery, it does expose the minimal set of commands (like CLUSTER SLOTS, CLUSTER NODES) required for clients to route requests to the correct shard.

Kronotop uses a **different clustering model under the hood**, so the Redis Cluster interface is effectively a compatibility layer — not a faithful replica. This allows developers to reuse existing Redis client libraries without modification, while benefiting from Kronotop’s own architecture.

See [Clustering](/docs/category/clustering) category page to get more information how Kronotop Cluster has implemented.