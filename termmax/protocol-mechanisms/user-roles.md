# 🌟 User Roles

TermMax supports a diverse range of user roles, enabling participants to customize their strategies in the borrowing and lending markets. These roles are defined by two key aspects: whether a user is a **market maker** or a **market taker**, and whether they act as a **borrower** or a **lender**. This framework gives rise to four general roles:

1. [**Borrowing Range Order Setter**](range-order-setter/borrowing-range-order-setter.md) – Defines their borrowing terms by placing range orders for debt tokens, matched by lending market takers.
2. [**Lending Range Order Setter**](range-order-setter/lending-range-order-setter.md) – Defines their lending terms by placing range orders for debt tokens, matched by borrowing market takers.
3. [**Two-Way Range Order Setter**](range-order-setter/two-way-range-order-setter.md) – Places a single range order with two pricing curves (one for borrowing and one for lending), enabling simultaneous participation on both sides of the market.
4. [**Borrowing Market Taker**](market-taker/borrower.md) – Fills lending range orders by locking collateral in a GT, issuing FTs, and selling them for debt tokens.
5. [**Lending Market Taker**](market-taker/lender.md) – Fills borrowing range orders by lending debt tokens directly to borrowing market makers.
6. [**Leverager**](market-taker/leverager.md) – A specialized borrowing market taker who uses debt tokens to create a leveraged collateral position in a single atomic transaction, maximizing exposure without looping.
7. [**Curator**](curator.md) - Manages a vault by strategically placing atomic orders (in [V2](https://blog.ts.finance/termmax-v2/)), lending or two-way range orders across multiple markets, handling deposited assets from liquidity providers and distributing profits proportionally to vault shareholders. Curators determine optimal capital allocation, configure pricing curves, and monitor performance while earning profits through performance fees. They operate within protocol-defined constraints and timelock protections.
8. [**Depositor**](depositor.md) – Provides capital to vaults managed by expert Curators to earn passive yields without actively managing positions. Depositors receive vault shares representing their proportional ownership and entitled returns, with the flexibility to withdraw funds at any time. They benefit from Curators' market expertise while accepting the associated performance and market risks.



Through these seven roles, TermMax empowers users to adopt flexible and innovative approaches to borrowing and lending, offering both fixed-rate predictability and advanced capital optimization strategies.
