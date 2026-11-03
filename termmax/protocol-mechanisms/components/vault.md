# 🎁 Vault

### Overview

In the TermMax protocol, a **Vault** is a smart contract that enables third-party fund management and profit sharing. Vaults are managed by [**Curators**](../curator.md) - specialized entities who deploy capital strategically across different markets to generate returns for liquidity providers who deposit assets into the vault.



### Vault Functionality

#### Purpose and Capabilities

A Vault in TermMax serves as a managed investment vehicle that:

* [**Deposits Capital**](../depositor.md): Aggregates funds from multiple depositors
* **Deploys Strategy**: Places range orders across different markets based on curator expertise
* **Shares Returns**: Distributes profits to liquidity providers proportionally to their contributions
* **Implements** [**ERC-4626**](https://ethereum.org/en/developers/docs/standards/tokens/erc-4626/): Follows the tokenized vault standard for interoperability

Vaults can connect to multiple markets as long as they use the same debt token, allowing for diversified strategies across different markets and risk profiles.



#### Technical Implementation

Vaults in the TermMax protocol feature:

* **ERC-4626 Compliance**: Standardized interface for deposit, withdrawal and share accounting
* **Order Management**: Capability to create and manage orders across multiple markets
* **Queuing System**: Priority-based deposit and withdrawal queues for optimal capital allocation
* **Role-Based Access**: Separate permissions for different operational aspects
* **Timelock Protection**: Enforced waiting periods for sensitive parameter changes



#### Vault Limitations

Vaults in TermMax have certain restrictions:

* Can only be associated with [Lending Range Orders](../range-order-setter/lending-range-order-setter.md) and [Two-Way Range Orders](../range-order-setter/two-way-range-order-setter.md)
* Cannot create [Borrowing Range Orders](../range-order-setter/borrowing-range-order-setter.md) (these can only be created by individual range order setters)
* In Two-Way Range Orders, curators can only lend first and then borrow by selling [FT tokens](token.md#fixed-rate-token-ft); they cannot collateralize tokens to borrow directly
* Are subject to capacity limits to prevent over-concentration of capital
* Must respect timelock periods for parameter changes



### Vault Governance Structure

#### Role Definitions

1. **Curator**: Primary manager with order creation and parameter setting authority
2. **Guardian**: Safety oversight role that can block pending changes during timelock periods
3. **Allocator**: Manages capital allocation through queue prioritization



#### Access Control Structure

The access control for vault-specific roles follows these principles:

* The vault owner always has access to all roles
* The Curator also has Allocator privileges
* Multiple addresses can be assigned as Allocators
* Each role has specific permissions that cannot be accessed by other roles
* Role verification occurs before any restricted function execution



### Timelock Protection Mechanism

Many operations initiated by the Curator undergo a timelock period before they can be applied. The timelock system follows a three-step process:

1. **Submit** - A change is proposed (typically by the Curator)
2. **Wait** - The change enters a timelock period (default: 1 day)
3. **Accept** - After timelock expiration, the change can be accepted

During the timelock period, the Guardian role has the ability to review and potentially revoke the pending change.



#### Asymmetric Timelock Design

TermMax employs an innovative asymmetric timelock design, where:

1. **Risk-Reducing Changes** - Applied immediately without timelock:
   * Increasing timelock duration
   * Decreasing performance fee rate
   * Removing market whitelisting
2. **Risk-Increasing Changes** - Require full timelock period:
   * Decreasing timelock duration
   * Increasing performance fee rate
   * Adding market whitelist
   * Changing guardian



This allows for quick response to reduce risk while maintaining careful review for changes that increase risk.



### Vault Operational Flow

#### Vault Creation

1. The vault is deployed with initial parameters (asset token, name, timelock duration)
2. A curator is assigned to manage the vault
3. A guardian is assigned to provide security oversight



#### [Depositing to a Vault](../depositor.md)

1. Liquidity providers deposit the vault's asset token (e.g., USDC)
2. They receive vault shares (ERC-4626 tokens) representing their proportional ownership
3. The curator deploys the capital through range orders based on their strategy



#### Creating Orders

1. The curator identifies a favorable market opportunity
2. They create a [range order](../range-order-setter/) with specific pricing curve parameters
3. The order is funded from the vault's capital
4. As the order is filled, the vault earns fees and spread



#### Withdrawing from a Vault

1. Liquidity providers redeem their vault shares
2. The vault processes withdrawals based on the withdrawal queue priority
3. The curator may need to adjust orders or redeem positions to fulfill large withdrawals
4. Liquidity providers receive their principal plus any earned profits



#### Performance Fee Distribution

1. The curator earns performance fees based on profits generated
2. Performance fees are calculated as a percentage of returns (set by the curator with timelock protection)
3. The curator can withdraw earned performance fees via a designated function



### Key Vault Parameters

#### Vault Configuration

* **Asset Token**: The ERC-20 token that liquidity providers deposit (e.g., USDC)
* **Capacity**: Maximum total value locked (TVL) in the vault
* **Performance Fee Rate**: Percentage of profits allocated to the curator
* **Timelock Duration**: Waiting period for sensitive parameter changes (1-30 days)



#### Order Configuration

When curators create orders, they specify:

* **Market**: The whitelisted market to interact with
* **Maximum Supply**: Total order size limit
* **Initial Reserve**: Initial amount allocated to the order
* **Curve Cuts**: Pricing curve configuration determining rates offered
* **Order Type**: Lending or Two-Way order



### Best Practices for Curators

#### Risk Management

* Maintain diversification across multiple markets to reduce concentration risk
* Set conservative LTV ratios when creating orders
* Monitor market conditions regularly to adjust strategies
* Maintain sufficient reserves for withdrawal requests



#### Parameter Setting

* Set realistic performance fee rates (typically 10-20%)
* Implement appropriate timelock durations based on strategy volatility
* Gradually adjust parameters to avoid market disruption
* Consider liquidity provider interests when configuring orders



#### Market Selection

* Thoroughly evaluate market risk before whitelisting
* Consider correlation between markets in the portfolio
* Monitor market activity after whitelisting
* Revoke whitelist if risks emerge



#### Operational Excellence

* Maintain clear communication with liquidity providers
* Document strategy changes and performance
* Regularly review order performance and adjust as needed
* Plan for contingencies in case of market disruption



### Two-Way Range Order Borrowing Limitation

In [Two-Way Range Orders](../range-order-setter/two-way-range-order-setter.md) created by vault curators, the borrowing mechanism has a specific restriction:

1. **Initial Lending Only**: The vault must first act as a lender by providing debt tokens to the market.
2. **Borrowing Through FT Sales**: The vault can only borrow by selling FT tokens it has acquired through its lending activities.
3. **No Direct Collateralization**: Unlike individual range order setters, vaults cannot directly collateralize tokens to borrow. This restriction exists because the vault itself holds user deposits, making direct collateralization complex from a risk management perspective.



This design choice ensures that vault borrowing is always backed by lending activities first, providing an added layer of security for vault depositors and maintaining a clear capital flow within the vault ecosystem.



### Summary

Vaults and Curators form the backbone of third-party fund management in the TermMax protocol. Curators leverage their expertise to manage capital efficiently across markets, while the carefully designed governance structure ensures security through timelock protection and role separation. The ERC-4626 standard provides liquidity providers with a familiar and interoperable way to participate in TermMax strategies, while earning returns proportional to their investment.

The system balances curator flexibility with appropriate constraints to protect liquidity providers, creating a sustainable ecosystem for managed fixed-rate lending and borrowing positions.<br>
