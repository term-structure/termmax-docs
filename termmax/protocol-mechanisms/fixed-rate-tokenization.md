# 💲 Fixed Rate Tokenization

TermMax introduces a **fixed-rate tokenization mechanism** that revolutionizes how borrowing and lending operate within decentralized finance (DeFi). By leveraging a combination of specialized tokens and smart contract logic, TermMax ensures predictable, stable returns for lenders and transparent, flexible borrowing costs for borrowers. This section delves into the core components and processes that underpin TermMax’s fixed-rate tokenization, providing users with a comprehensive understanding of how the system functions.

## Core Market Definitions

Each fixed-rate borrowing and lending market on TermMax is defined by three fundamental elements:

1. **Debt Token:**\
   The asset being borrowed or lent (e.g., USDC). This token represents the principal amount involved in the loan.
2. **Collateral Token:**\
   The asset provided by the borrower as security for the loan (e.g., ETH). An over-collateralization mechanism ensures that the value of the collateral exceeds the debt, mitigating lender risk.
3. **Maturity Date:**\
   The specific time by which borrowers must repay their debts and after which lenders can claim their yields. This date marks the end of the loan term.

## Specialized Tokens

To facilitate fixed-rate trading, TermMax introduces three specialized tokens:

1. [**Fixed-Rate Token (FT)**](components/token.md#fixed-rate-token-ft)**:**
   * **Type:** Fungible Token (e.g., ERC-20)
   * **Function:** Acts as a **zero-coupon bond**, representing a commitment to repay 1 debt token (e.g., 1 USDC) at maturity.
   * **Dynamics:** FTs are sold at a discount before maturity (e.g., 20% discount), allowing lenders to earn a fixed return by redeeming them at full face value upon maturity.
2. [**X Token (XT)**](components/token.md#x-token-xt)**:**
   * **Type:** Fungible Token
   * **Function:** Complements FTs to ensure the value parity of 1 debt token.
   * **Dynamics:** At any moment, **1 FT + 1 XT = 1 debt token**. Upon reaching maturity, FTs can be redeemed for debt tokens, rendering XT worthless (value drops to zero).
3. [**Gearing Token (GT)**](components/token.md#gearing-token-gt)**:**
   * **Type:** Non-Fungible Token (ERC-721)
   * **Function:** Represents an individual loan position, tracking both the collateral locked and the debt issued.
   * **Dynamics:** Each GT records the amount of collateral and the corresponding number of FTs minted, up to the market’s maximum loan-to-value (MLTV) ratio.



## How It Works

**A. Borrowing Process**

1. **Locking Collateral and Minting GT + FT:**
   * **Borrower Action:** The borrower locks a specified amount of collateral (e.g., ETH) into a GT.
   * **Token Minting:** For each debt token worth of USDC the borrower wishes to take, TermMax mints **1 FT**. The total number of FTs minted is capped by the **Maximum Loan-to-Value (MLTV)** defined in the market (e.g., MLTV of 0.8 allows 1 ETH at $1,000 to back up to 800 USDC as debt).
2. **Selling FTs for Immediate Liquidity:**
   * **Borrower Action:** After minting, the borrower sells FTs on the open market at a discount (e.g., 20% discount, selling each FT for $0.80).
   * **Result:** Borrowers receive immediate liquidity (e.g., 800 FTs × $0.80 = $640) while committing to repay the full debt (800 USDC) at maturity.

**B. Lending Process**

1. **Purchasing FTs:**
   * **Lender Action:** Lenders buy FTs at a discounted rate (e.g., $0.80 per FT).
   * **Yield Mechanism:** At maturity, each FT can be redeemed for 1 debt token (e.g., 1 USDC), providing lenders with a fixed return (e.g., 25% gain from $0.80 to $1.00).
2. **Redemption at Maturity:**
   * **Lender Action:** Upon reaching the maturity date, lenders redeem their FTs for the full face value of debt tokens, ensuring a predictable and stable return.



## Repayment Methods

Borrowers have two options to repay their debt recorded in the GT, thereby unlocking their collateral:

1. **Repay with Debt Tokens Directly:**
   * **Action:** The borrower repays the exact amount of debt tokens owed (e.g., 800 USDC for 800 FTs).
   * **Outcome:** The GT’s debt is settled, and the collateral is automatically released back to the borrower.
2. **Repay with FTs:**
   * **Action:** The borrower purchases FTs from the open market (potentially at a discount) and repays the debt by returning these FTs to TermMax.
   * **Benefit:** This method can be more economical, as FTs are typically priced below their face value before maturity. For example, repaying 800 FTs at $0.80 each costs only $640, reducing the effective repayment amount compared to using debt tokens directly.

## Example Scenario

**Market Setup**

* **Debt Token:** USDC
* **Collateral Token:** ETH
* **Maturity Date:** 1 year from now
* **Maximum LTV (MLTV):** 0.8
* **Current Prices:** ETH = $1,000; USDC = $1

**Borrower’s Actions (Alice)**

1. **Locking Collateral and Minting GT + FT:**
   * Alice locks **1 ETH** ($1,000) as collateral in a GT.
   * Based on MLTV of 0.8, she can mint up to **800 FTs**, representing **800 USDC** debt.
2. **Selling FTs for Immediate Liquidity:**
   * Alice sells **800 FTs** at a 20% discount ($0.80 per FT), receiving **$640 USDC** immediately.
3. **Repayment Options:**
   * **Option 1:** Alice repays **800 USDC** directly at maturity to unlock her 1 ETH collateral.
   * **Option 2:** Alice buys back **800 FTs** from the market at a discounted price (e.g., $0.80 per FT), spending **$640 USDC** to settle her debt, thereby retaining more of her USDC and repaying the debt cost-effectively.

**Lender’s Actions**

1. **Purchasing FTs:**
   * The Lender deposits **640 USDC** into TermMax Market and issue **640 FT** and **640 XT**
   * The contract then swaps **640 XTs** to **160 FTs** (1 FT = 0.8 USDC)
   * The Lender get **800 FTs (640 FTs + 160 FTs)**&#x20;
2. **Redemption at Maturity:**
   * After 1 year, the lender redeems each FT for **1 USDC**, receiving a total of **$800 USDC**, netting a **25% return** on the initial investment.



## Key Advantages

* **Predictable Returns for Lenders:**\
  FTs function like zero-coupon bonds, providing fixed returns without exposure to fluctuating interest rates.
* **Flexible, Cost-Effective Repayment for Borrowers:**\
  Borrowers can choose to repay using debt tokens directly or by purchasing FTs at a discount, optimizing their repayment strategy based on market conditions.
* **Efficient Capital Deployment:**\
  By tokenizing debt and collateral, TermMax ensures transparent, on-chain tracking of loan positions, simplifying management for both borrowers and lenders.
* **Risk Mitigation through Over-Collateralization:**\
  The MLTV ensures that loans are securely backed by collateral, reducing the risk of default and protecting lenders’ investments.
* **Streamlined Token Mechanics:**\
  The relationship **`1 FT + 1 XT = 1 debt token`** ensures consistent pricing and simplifies the redemption process at maturity.

## Summary

TermMax’s fixed-rate tokenization mechanism leverages the synergy of [**Gearing Tokens (GT)**](components/token.md#gearing-token-gt), [**Fixed-Rate Tokens (FT)**](components/token.md#fixed-rate-token-ft), and [**X Tokens (XT)**](components/token.md#x-token-xt) to create a robust, transparent, and efficient borrowing and lending ecosystem. By employing a zero-coupon bond model through FTs, TermMax provides lenders with predictable, stable returns while offering borrowers flexible, cost-effective borrowing options. The smart contract-driven system ensures that all transactions are secure, automated, and aligned with the predefined terms, fostering trust and reliability within the TermMax platform.

Through this innovative tokenization approach, TermMax bridges the gap between traditional fixed-rate financing and decentralized lending, delivering a seamless experience that caters to the needs of both borrowers and lenders in the dynamic DeFi landscape.
