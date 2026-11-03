# 🌊 Curator

A **Curator** is the primary manager of a [vault](components/vault.md), where [depositors](curator.md) can place digital assets to share in profits.

* **Capital Allocation**: Creating and managing orders across different markets
* **Risk Management**: Setting appropriate parameters to protect liquidity providers
* **Strategy Implementation**: Determining the optimal deployment of capital
* **Performance Optimization**: Adjusting strategies to maximize returns for vault depositors
* ([V2](https://blog.ts.finance/termmax-v2/)) **Base Yield Selection**: Select a base yield that idle assets will earn upon the vault's creation (e.g., floating rates from AAVE, Morpho).

Curators have significant authority over vault operations but are constrained by the timelock mechanism and guardian oversight.



### Curator Permissions

Curators have the following permissions:

#### **Order Management**

The curator can:

* Create new orders with whitelisted markets
* Set maximum supply limits for orders
* Configure initial reserve amounts
* Define price curve parameters for both lending and borrowing rates (in Two-Way Range Orders)
* Update existing order parameters
* Redeem orders when necessary



#### **Parameter Management**

The curator can submit (subject to timelock for acceptance):

* Timelock period changes
* Market whitelist additions
* Performance fee rate adjustments

Additionally, the curator can:

* Set vault capacity limits (maximum TVL)
* Withdraw earned performance fees
* Update supply and withdrawal queues (as curators also have ALLOCATOR privileges)



### Curator Constraints

Curators operate under several constraints:

1. **Timelock Delays**: Most significant parameter changes require a timelock period
2. **Guardian Oversight**: The vault guardian can cancel pending parameter changes
3. **Market Whitelisting**: Curators can only create orders with pre-approved markets
4. **Capacity Limits**: The amount of assets that can be deposited is capped
