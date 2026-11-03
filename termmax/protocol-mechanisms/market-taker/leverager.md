# Leverager

A **leverage market taker** on TermMax is a **special type of borrower** who reinvests the borrowed debt tokens into purchasing the collateral asset, thereby amplifying their exposure to the collateral. Unlike traditional borrowers who use the borrowed debt tokens for external purposes, leverage market takers use TermMax’s efficient, fixed-rate mechanisms and **flash loans** to streamline the leveraging process. The borrowed debt tokens, combined with the initial contribution, are used to purchase collateral, which is locked into a [**Gearing Token (GT)**](../components/token.md#gearing-token-gt). This mechanism allows leverage market takers to achieve leveraged exposure efficiently, securely, and within a single transaction.



## **How It Works**

A leverage market taker follows these steps to execute a leveraging transaction:

1. **Providing Debt Tokens:**\
   Leverage market takers start by providing debt tokens (e.g., USDC) to the system as the initial input for creating the leveraged position.
2. **Flash Loan Borrowing:**\
   Using the provided debt tokens, leverage market takers take a **flash loan** to borrow additional debt tokens. The combined debt tokens (provided + borrowed) serve as the total input for purchasing collateral.
3. **Purchasing and Locking Collateral:**\
   The combined debt tokens are used to purchase the desired collateral asset (e.g., ETH). The purchased collateral is locked into a **Gearing Token (GT)**, which records the total collateral and debt amounts for the leveraged position.
4. **Issuing and Splitting FTs:**
   * The locked collateral in the GT is used to issue **Fixed-Rate Tokens (FTs)**.
   * The issued FTs are split into:
     * **Principal Part:** Represents the equivalent value of the debt tokens borrowed.
     * **Interest Part:** Represents the fixed yield payable to the lending market maker.
5. **Exchanging XTs and Repaying Flash Loan:**
   * The interest part of the FTs is sold to the lending range order in exchange for **X Tokens (XTs)**.
   * The exchanged XTs are combined with the principal part of the FTs to redeem debt tokens (e.g., USDC).
   * The redeemed debt tokens are used to **repay the flash loan**, completing the transaction.
6. **Final Leveraged Position:**\
   After the transaction is complete, the leverage market taker receives a **GT** that reflects the leveraged position. The GT tracks the locked collateral and the total debt obligation.



## **Leverage Mechanisms**

The leveraging process involves the following key steps:

1. **Debt Token Contribution:**\
   Leverage market takers begin by contributing an initial amount of debt tokens, which forms the foundation of the leveraged position.
2. **Flash Loan Borrowing:**
   * The flash loan mechanism enables leverage market takers to borrow additional debt tokens without needing upfront collateral for the borrowed amount.
   * The borrowed debt tokens, combined with the initial contribution, maximize the total input for purchasing collateral.
3. **Collateral Purchase and Locking:**
   * The combined debt tokens are used to purchase additional collateral assets (e.g., ETH).
   * The purchased collateral is locked into a **Gearing Token (GT)**, which tracks the total collateral and debt for the leveraged position.
4. **Issuing FTs:**
   * The locked collateral allows the issuance of Fixed-Rate Tokens (FTs).
   * For every **FT issued**, an equivalent amount of debt is recorded in the GT.
5. **FT Splitting and XT Exchange:**
   * The issued FTs are split into **principal** and **interest parts**:
     * **Principal Part:** Represents the borrowed debt token amount.
     * **Interest Part:** Represents the fixed yield payable to the lending market maker.
   * The interest part of the FTs is sold to the lending range order in exchange for XTs, ensuring the fixed yield is reflected in the system.
6. **Flash Loan Repayment:**
   * The exchanged XTs are combined with the principal part of the FTs to redeem debt tokens (e.g., USDC).
   * The redeemed debt tokens are used to repay the flash loan, completing the leveraging transaction.
7. **Final GT Position:**
   * The GT records the total leveraged debt and locked collateral, reflecting the leverage market taker’s position.
   * The leverage market taker is now fully leveraged on the collateral asset.



## **Example: Alice as a Leverage Market Taker**

1. **Providing Debt Tokens:**\
   Alice provides **1,000 USDC** as the initial input to create a leveraged position.
2. **Flash Loan Borrowing:**
   * Alice uses a flash loan to borrow an additional **2,000 USDC**, bringing the total available funds to **3,000 USDC**.
3. **Purchasing and Locking Collateral:**
   * Alice uses the **3,000 USDC** to purchase **3 ETH** (assuming ETH is priced at $1,000).
   * The purchased **3 ETH** is locked into a GT.
4. **Issuing and Splitting FTs:**
   * The locked **3 ETH** is used to issue **2,100 FTs**.
   * The FTs are split into:
     * **2,000 FTs:** Representing the debt token amount to be borrowed.
     * **100 FTs:** Representing the fixed yield for the lending market maker.
5. **Exchanging XTs and Repaying Flash Loan:**
   * Alice sells the **100 FTs (interest part)** to the lending range order in exchange for **2,000 XTs**.
   * The **2,000 XTs** are combined with the **2,000 FTs (principal part)** to redeem **2,000 USDC**.
   * The redeemed **2,000 USDC** is used to repay the flash loan.
6. **Post-Leverage Status:**
   * After the transaction, Alice’s GT reflects:
     * **3 ETH** locked as collateral.
     * **2,100 USDC** recorded as debt.
   * Alice successfully creates a leveraged position with amplified exposure to ETH.



## **Advantages**

1. **Efficient Leverage Creation:**\
   Leverage market takers benefit from TermMax’s single-transaction flash loan mechanism, allowing them to achieve leverage efficiently without requiring repetitive loops.
2. **Amplified Market Exposure:**\
   As a special type of borrower, leverage market takers reinvest the borrowed debt tokens into purchasing collateral, maximizing their exposure to the desired asset.
3. **Fixed-Rate Borrowing Stability:**\
   Fixed-rate borrowing ensures predictable costs, minimizing risks associated with fluctuating market rates.
4. **Secure Over-Collateralization:**\
   The locked collateral in the GT secures the leveraged position, mitigating risks for both the leverage market taker and the platform.



## ([V2](https://blog.ts.finance/termmax-v2/)) Smart Unwind

Smart Unwind enables Leveragers to set automated exit conditions on their GT positions, turning their leveraged debt into tradeable liquidity before maturity. This feature is not live **yet**.

### Setting Exit Conditions

When creating or managing a leveraged position, leverage market takers can specify:

* **Target APR**: The desired return rate that triggers position transfer
* **Target Price**: A specific collateral/debt price ratio for automatic exit



### Exit Triggers

Smart Unwind activates when market conditions meet the leverage market taker's exit criteria through two mechanisms:

1. **Collateral Price Appreciation**: \
   Arbitrageurs are willing to buy positions from leveragers at a fixed price that satisfies the APR and then sell the collateral on the market.
2. **Borrowing Rate Increase:** \
   New leveragers on TermMax are willing to take over existing positions with a premium over taking the lending orders on the market.



### Benefits&#x20;

* **Automated Profit-Taking**: Exit automatically when targets are reached and receive initial debt assets provided, plus target returns
* **Higher Effective APR**: Capture value from market movements on DEX and TermMax beyond base yields

\
Smart Unwind transforms leveraged positions on TermMax from static holdings into dynamic liquidity sources, enabling leverage market takers to maximize returns while improving overall protocol efficiency.<br>

## **Summary**

Leverage market takers on TermMax are a special type of borrower who reinvest the borrowed debt tokens into collateral assets to amplify their exposure. By combining their debt token input with flash loans and locking collateral into GTs, leverage market takers create efficient leveraged positions while benefiting from fixed-rate borrowing and over-collateralization. This role is ideal for users seeking increased exposure to collateral assets in a secure and decentralized manner.&#x20;
