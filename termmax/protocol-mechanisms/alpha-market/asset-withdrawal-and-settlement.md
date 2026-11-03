# Asset Withdrawal & Settlement

## Withdrawal Before Maturity

**Why is early withdrawal restricted (or potentially unavailable) prior to the Dual Investment's maturity date?**

Dual Investment is not a flexible savings product. Deposits are used to underwrite option positions.

> _Whether assets can be withdrawn early depends on whether they have been allocated (“borrowed”) by option buyers._

* Option Buyer (Long/Short User) = Borrower
* Option Seller (Dual Investment User) = Lender (Provider of Funds & Collateral)

High APY comes from premiums paid by these option buyers.

### Vault Conditions Before Maturity

#### **1. None of the assets has been borrowed**

→ You may withdraw all your deposited assets anytime.

#### **2. All assets have been borrowed**

→ Early withdrawal is unavailable; you must wait until maturity unless more users deposit.

#### **3. Only part of the assets have been borrowed**

**Case 1 – Withdraw request > Available idle liquidity**\
\
→ You can only withdraw the available portion now; the rest requires new deposits or maturity.

> **Example:**\
> You deposited 1,000 USDT, but the Vault now only has 500 USDT idle → You can withdraw 500 USDT now. To withdraw the remaining funds, you must either wait for additional user deposits to replenish the Vault or wait until the maturity date for final settlement.&#x20;

**Case 2 – Withdraw request ≤ Available idle liquidity**\
\
→ You can withdraw your full balance.

> **Example:**\
> You deposited 300 USDT, and the Vault now has 500 USDT idle → You can withdraw all your 300 USDT immediately.

**`Important notes:`**

* **Asset Type:** When a user chooses to withdraw assets before maturity, they can only apply to withdraw the original deposited asset type (i.e., deposit USDT, withdraw USDT; deposit token, withdraw token).
* **Value Fluctuation:** When withdrawing assets early, your withdrawal amount is calculated based on the market fair value of the option contract at that time. Consequently, the total value of the final withdrawn assets may be higher or lower than your initial deposited principal.<br>

## After Maturity: Settlement & Withdrawal

At maturity, the system executes settlement, determining the Vault’s final asset composition.

### 1. Vault ends with a single asset type

| **Scenario Category**               | **Asset Deposited** | **Market Outcome / Settlement Action**                                                                                 | **Final Asset Withdrawn (Settlement Asset)** |
| ----------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| I. No Exercise (Non-Conversion)     | Token               | Original Token retained.                                                                                               | Token + Premium Income (Settled in Token)    |
| I. No Exercise (Non-Conversion)     | USDT                | Original USDT retained.                                                                                                | USDT + Premium Income (Settled in USDT)      |
| II. Full Exercise (Full Conversion) | Token               | Token is converted to USDT at the Strike Price. (Effectively, you are selling the token at the Strike Price)           | USDT + Premium Income (Settled in USDT)      |
| II. Full Exercise (Full Conversion) | USDT                | <p>USDT is converted to Tokens at the Strike Price.<br>(Effectively, you are buying the token at the Strike Price)</p> | Token + Premium Income (Settled in Token)    |



### 2. Vault ends with two asset types

When partial exercise or price-protection mechanisms are triggered, the Vault may contain mixed assets:

* Unexercised original assets
* Exercised, converted assets

At this point, the user may choose to withdraw the assets as either USDT or the token. However, it must be noted that the actual withdrawable asset type still depends on the remaining liquidity of the corresponding assets in the Vault.

**For example**, if the USDT in the Vault has been fully withdrawn early by other users, you will only be able to withdraw the remaining converted tokens, which may carry the risk of a floating loss.

Therefore, in a scenario of partial exercise, the final assets withdrawn by the user might be USDT, the token, or a hybrid form of both, depending on the Vault's real-time asset composition and liquidity status.
