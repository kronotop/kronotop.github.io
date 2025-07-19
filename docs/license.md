---
sidebar_position: 9
description: The reasons behind license choices
---

# License

## Apache License 2.0

Kronotop is mostly licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0), which is a permissive and OSI-approved open source license.

However, one of Kronotop’s core components — the **Bucket** package — is licensed under the [Business Source License 1.1](kronotop/src/main/java/com/kronotop/bucket/LICENSE.txt).
This license allows full access to the source code and free usage for development and testing. After a **five-year change date**, 
the Bucket module will automatically be re-licensed under Apache 2.0.

## Why BSL?

We love open source, and we want Kronotop to be widely used and improved by the community. But we also want to ensure 
that **cloud providers and hosting platforms can't repackage Kronotop as a managed database service without contributing back**.

To protect the long-term sustainability of the project, the Bucket package includes a restriction: **It cannot be used to offer a 
Database-as-a-Service (DBaaS) or similar hosted product** without a separate commercial agreement.

This restriction only applies to **offering Kronotop itself as a database service to third parties**.  
You are free to use Kronotop (including the Bucket module) in your own apps, internal systems, and commercial products.

For more details, see our [additional use grant](kronotop/src/main/java/com/kronotop/bucket/LICENSE.txt) or contact us at
*burak-dot-sezer-at-kronotop-dot-com* if you have questions or commercial use cases in mind.