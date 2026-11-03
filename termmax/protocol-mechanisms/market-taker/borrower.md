# Borrower

A **borrowing market taker** on TermMax interacts with [**lending range orders**](../range-order-setter/lending-range-order-setter.md) placed by lending market makers to borrow debt tokens (e.g., USDC). Borrowing market takers secure their loans by locking collateral in [**Gearing Tokens (GT)**](../components/token.md#gearing-token-gt) and issuing [**Fixed-Rate Tokens (FT)**](../components/token.md#fixed-rate-token-ft), which are split into principal and interest parts. The interest part of the FTs is sold to the lending range order in exchange for [**X Tokens (XT)**](../components/token.md#x-token-xt), and the exchanged XT combined with the principal part of the FT is used to redeem the debt tokens. Borrowing market takers issue FTs equal to the debt amount they are willing to pay at maturity date, allowing them to access predictable, fixed-rate borrowing terms in a decentralized and transparent environment.



## **How It Works**

A borrowing market taker follows these steps to execute a borrowing transaction:

1. **Choosing a** [**Lending Range Order**](../range-order-setter/lending-range-order-setter.md)**:**\
   Borrowing market takers identify a lending range order that matches their borrowing requirements. The lending range order specifies:
   * **Debt Token:** The token to borrow (e.g., USDC).
   * **Lending Rates (Pricing Curve):** The fixed borrowing rates at which debt tokens are available. Lower rates apply to the initial portion matched, with progressively higher rates for subsequent portions.
   * **Maturity Date:** The time by which the debt must be repaid.
   * **Collateral Requirements:** The collateral token and the maximum Loan-to-Value (MLTV) ratio.
2. **Locking Collateral:**\
   Borrowing market takers lock their collateral (e.g., ETH) into a **Gearing Token (GT)**. The amount of collateral determines the maximum amount of debt tokens they can borrow, constrained by the MLTV of the selected market.
3. **Issuing Fixed-Rate Tokens (FTs):**\
   Borrowing market takers issue FTs equal to the debt amount they are willing to repay at maturity. These FTs represent the total debt obligation, including the principal and fixed yield to be earned by the lending market maker.
4. **Splitting FTs and Exchanging XT for Debt Tokens:**\
   The issued FTs are split into two parts:
   * **Principal Part:** Represents the debt token amount to be borrowed.
   * **Interest Part:** Represents the fixed yield for the lending market maker.\
     Borrowing market takers sell the **interest part of the FTs** to the lending range order in exchange for **X Tokens (XTs)**. The **exchanged FTs** ensure that the fixed yield for the lending market maker is reflected in the system, while the XT is combined with the principal part of the FTs to redeem debt tokens.



## **Borrowing Mechanics**

The borrowing mechanism involves the following technical process:

1. **Issuing FTs and Recording Debt:**
   * When borrowing market takers lock collateral into their GT, they can issue FTs based on the maximum Loan-to-Value (MLTV) ratio of the selected market.
   * For every **1 FT issued**, an equivalent amount of **debt is added to the GT**, reflecting the borrower’s obligation.
2. **FT Splitting:**
   * Borrowing market takers split the issued FTs into two parts:
     * **Principal Part:** Represents the debt token amount to be borrowed.
     * **Interest Part:** Represents the fixed yield payable to the lending market maker.
3. **XT Exchange:**
   * Borrowing market takers sell the interest part of the FTs to the lending range order in exchange for XTs.
   * The **exchanged FTs ensure the fixed yield for the lending market maker** is accurately reflected in the system.
4. **Debt Token Redemption:**
   * The exchanged XT is combined with the principal part of the FTs to redeem debt tokens (e.g., USDC), providing the borrowing market taker with the liquidity they need.
   * The redeemed debt tokens are transferred to the borrowing market taker’s wallet for further use.
5. **Debt Recording in GT:**
   * The GT records the total debt amount, which is the full value of the issued FTs (principal + interest).
   * Borrowing market takers must monitor their GT’s Loan-to-Value (LTV) ratio to avoid liquidation risks.



## **Example: Alice as a Borrowing Market Taker**

1. **Choosing a Lending Range Order:**\
   Alice identifies a lending range order offering USDC with the following parameters:
   * **Lending Curve:** 4–6% interest, with lower rates for initial portions matched.
   * **Maturity Date:** 1 year.
   * **Collateral Requirements:** ETH as collateral, with an MLTV of 80%.
2. **Borrowing Setup:**
   * Alice locks **2 ETH** as collateral (with ETH priced at $1,000).
   * Based on the MLTV, Alice can issue up to **1,600 FTs** and increase her debt recorded in her GT by **1,600 USDC**.
3. **Issuing and Splitting FTs:**
   * Alice issues **1,600 FTs**, representing the total debt obligation she is willing to repay at maturity. These FTs are split into:
     * **Principal Part:** 1,530 FTs, representing the debt token amount.
     * **Interest Part:** 70 FTs, representing the fixed yield for the lending market maker (assuming the matched interest borrowing rate is around 4.6%).
4. **Exchanging XT and Redeeming Debt Tokens:**
   * Alice sells the **interest part of 70 FTs** to the lending range order in exchange for **1,530 XTs**.
   * Alice combines the **1,530 XTs** with the **principal part of 1,530 FTs** to redeem **1,530 USDC**.
5. **Post-Borrowing Status:**
   * Alice now has **1,530 USDC** in her wallet and **2 ETH** locked in her GT.
   * The GT records **1,600 USDC** as her debt obligation.
6. **Repayment Options:**
   * **Option 1:** Alice repays **1,600 USDC** directly to unlock her ETH collateral at maturity.
   * **Option 2:** Alice purchases **1,600 FTs** from the market at a discount (e.g., $0.95 per FT), saving $80 on repayment.



## **Advantages**

1. **Fixed-Rate Borrowing:**\
   Borrowing market takers benefit from predictable borrowing costs, shielding them from volatile market rates.
2. **Flexible Repayment Options:**\
   Borrowing market takers can repay directly with debt tokens or strategically use discounted FTs to reduce repayment costs.
3. **Efficient Liquidity Access:**\
   Borrowing market takers can leverage TermMax’s range orders to access liquidity quickly and at competitive rates.
4. **Over-Collateralization for Security:**\
   The locked collateral ensures that borrowing is secured, mitigating risks for both borrowers and lenders.



## **Summary**

Borrowing market takers play a crucial role on TermMax by interacting with lending range orders to access fixed-rate loans. Through collateralized borrowing, FT issuance, and predictable repayment options, borrowing market takers enjoy secure, efficient, and transparent borrowing experiences. This role is ideal for users seeking stable borrowing costs and capital flexibility in a decentralized environment.
