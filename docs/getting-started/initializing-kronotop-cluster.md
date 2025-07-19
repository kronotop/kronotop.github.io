---
sidebar_position: 1
description: Learn how to initialize a Kronotop cluster in 2 mins
---

# Initializing a Kronotop Cluster

## Redis compability

Kronotop supports both [RESP2 and RESP3 wire protocols](https://redis.io/docs/latest/develop/reference/protocol-spec/), allowing you to use any Redis client to access the cluster and query transactional data structures like Bucket and ZMap.

This document assumes that you have already installed `redis-cli` and Docker on your system.

## Installing Kronotop via Docker

It's easy to try Kronotop with Docker Compose:

```bash
curl -o kronotop-demo.yaml https://raw.githubusercontent.com/kronotop/kronotop/refs/heads/main/docker/kronotop-demo.yaml
```

Then, you can run the following command to create a single-member Kronotop cluster for demonstration purposes:

```bash
docker compose -f kronotop-demo.yaml up 
```

If everything goes okay, you should be able to connect to the primary node via `redis-cli`:

```
redis-cli -p 3320 -c
127.0.0.1:3320> PING
PONG
```

A cluster member serves from two ports:

* *5484* for the client communication,
* *3320* for the internal traffic and administrative commands.

## Setting up the cluster metadata

Before using Kronotop in your project, you first need to initialize the cluster. `KR.ADMIN INITIALIZE-CLUSTER` command
creates the cluster's layout on the FoundationDB and initializes the cluster:

```
127.0.0.1:3320> KR.ADMIN INITIALIZE-CLUSTER
OK
```

Then, we must set the shard's primary ownership and make the shards operable. Currently, we only have a running Kronotop
instance in the cluster. It's good enough for demonstration purposes. We can assign all shards to this member.

First, we should run `KR.ADMIN DESCRIBE-MEMBER` command to learn id of the current member:

```
127.0.0.1:3320> KR.ADMIN DESCRIBE-MEMBER
1# member_id => a0dc14d811a285834c187ddc20549de7c1c1a381
2# status => RUNNING
3# process_id => AAAOz0CfYCoAAAAA
4# external_host => 127.0.0.1
5# external_port => (integer) 5484
6# internal_host => 127.0.0.1
7# internal_port => (integer) 3320
8# latest_heartbeat => (integer) 8227
```

We need `member_id` from this response. The following command sets the primary owner of all Redis shards;

```
127.0.0.1:3320> KR.ADMIN ROUTE SET PRIMARY REDIS * a0dc14d811a285834c187ddc20549de7c1c1a381
OK
```

Now we are ready to make our all Redis shards writable:

```
127.0.0.1:3320> KR.ADMIN SET-SHARD-STATUS REDIS * READWRITE
OK
```

If everything is okay, we can start using the newly formed Kronotop cluster:

## First try

```
redis-cli -p 5484 -c
127.0.0.1:5484> SET mykey "Hello"
OK
127.0.0.1:5484> GET mykey
"Hello"
```

All in-memory data will be persisted and replicated by the storage engine. See [Storage Engine](docs/volume/volume.md) section
for the details.