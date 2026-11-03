# ⏳ Timelock Protection

TermMax implements a sophisticated timelock protection system for sensitive operations. This mechanism ensures that critical parameter changes undergo a waiting period before being implemented, allowing for review and potential revocation of harmful changes.



### Vault Timelock Mechanism

The TermMax vault contract implements a comprehensive timelock protection system for sensitive operations. This mechanism ensures that critical parameter changes undergo a mandatory waiting period before implementation, allowing for thorough review and potential revocation of harmful changes.

The timelock system follows a three-step process:

1. **Submit** - A change is proposed (typically by the CURATOR)
2. **Wait** - The change enters a timelock period (default: 1 day)
3. **Accept** - After timelock expiration, the change can be accepted

During the timelock period, the GUARDIAN role has the ability to review and potentially revoke the pending change.



#### **Role-Based Access**

* **CURATOR**: Submits parameter changes (e.g., performance fee rate)
* **GUARDIAN**: Reviews and can revoke pending changes during the timelock period
* **Vault Owner**: Has oversight capabilities for the timelock system



#### **Timelock Duration Bounds**

Vault timelock duration is configurable within safety limits:

* Minimum: 1 day (86,400 seconds)
* Maximum: 30 days (2,592,000 seconds)



### Oracle Timelock Mechanism

The Oracle system includes a specialized timelock mechanism to protect against malicious or erroneous price feed updates. Given that oracles provide critical price data for collateral valuation and liquidation decisions, changes to oracle sources are protected by a mandatory waiting period.



#### Oracle Timelock Security Features

* **DEFAULT ADMIN ROLE Restriction**: Only accounts with the DEFAULT ADMIN ROLE can submit or accept oracle changes
* **Asset-Specific Updates**: Timelock is applied independently for each asset's oracle, allowing for targeted updates
* **Validation Period**: Proposed oracle changes must pass through the full timelock period before acceptance
* **Multiple Oracle Support**: The system maintains backup oracle mechanisms, allowing immediate failover if a primary oracle fails



#### **Importance for Risk Management**

The oracle timelock is particularly critical because:

1. Price manipulation is a common attack vector in DeFi protocols
2. False oracle data could trigger incorrect liquidations or allow unhealthy borrowing
3. Oracle failures during market volatility can amplify systemic risks



By enforcing a timelock on oracle updates, TermMax provides:

* Time for community oversight of oracle changes
* Protection against flash attacks targeting oracle infrastructure
* Enhanced stability during market turbulence

This multi-layered approach to securing both vault operations and oracle updates creates a robust protection system that guards against both malicious actions and operator errors, enhancing overall protocol security.

