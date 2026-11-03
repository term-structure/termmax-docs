# Borrowing Range Order Setter

A **borrowing range order setter** on TermMax is a user who defines the terms for borrowing debt tokens (e.g., USDC) by placing **borrowing range orders**. These range orders specify the desired borrowing rates, amounts, and collateral to be locked. The maximum borrowing amount is constrained by the specified collateral amount and the maximum Loan-to-Value (LTV) defined in the market. Borrowing order setters are matched with **lending market takers** who provide debt tokens at the specified terms. This role allows borrowing order setters to lock in predictable, fixed-rate borrowing costs while leveraging their collateral.



## **How It Works**

A borrowing range order setter follows these steps to place a borrowing range order:

1. **Choosing a Market:**\
   The borrower selects a specific fixed-rate market to operate in, which includes the following predefined parameters:
   * **Debt Token:** The asset to borrow (e.g., USDC).
   * **Collateral Token:** The asset to lock as collateral (e.g., ETH).
   * **Maturity Date:** The time by which the debt must be repaid.
   * **Maximum Loan-to-Value (MLTV):** The maximum allowable LTV ratio in the market (e.g., 80%).
   * **Liquidation Loan-to-Value (Liquidation LTV):** The LTV threshold at which the collateral will be liquidated if exceeded.
2. **Specifying Borrowing Parameters:**\
   After selecting a market, the borrower configures their borrowing range order by specifying the following details:
   * **Collateral Amount:** The amount of collateral (e.g., ETH) to lock when the range order is placed.
   * **Maximum Borrowing Amount:** The maximum amount of debt tokens they wish to borrow, constrained by the specified collateral amount and the MLTV. For example, locking 1 ETH (worth 1000 USDC) with an MLTV of 80% allows up to 800 USDC to be borrowed.
   * **Pricing Curve:** Defines the range of borrowing rates they are willing to pay. For example, they might specify an interest range of **6–8%**, with higher rates applying to the initial portion of the order and lower rates applying to subsequent portions as more of the range order is filled.
3. **Placing the Order:**\
   The borrowing range order is placed on the TermMax platform, where it remains active until fully matched or canceled. Lending market takers can fill the order, providing debt tokens at the rates specified by the pricing curve.



## **Borrowing Mechanics**

Once the borrowing range order is placed, the process proceeds as follows:

1. **Order Matching:**
   * When a lending market taker fills a portion of the borrowing range order, the following steps occur:
     1. **Minting FTs and XTs:**\
        The debt token provided by the lending market taker is used to mint an equivalent amount of **FTs** (representing the principal) and **XTs** (representing the present value of the future interest payment).
     2. **XT Exchange:**\
        The **minted XT** is sold to the borrowing range order, where it is exchanged for additional FTs. These exchanged FTs are minted from the borrowing order setter’s **Gearing Token (GT)**, increasing the debt amount recorded in the GT accordingly.
     3. **FT Allocation to the Lending Market Taker:**\
        The lending market taker receives a total amount of FTs that exceeds the amount of debt tokens they provided. This includes:
        * **Original Minted FTs:** Representing the principal (equal to the lent debt tokens).
        * **Exchanged FTs:** Representing the fixed yield earned by the lending market taker.
   * As a result, the borrowing order setter’s GT reflects both the collateral locked and the increased debt amount corresponding to the total FTs issued.
2. **Repayment Options:**\
   At or before maturity, the borrowing order setter must repay the debt recorded in their GT to unlock their collateral. This can be done in two ways:
   * **Repay with Debt Tokens Directly:** The borrower repays the exact amount of borrowed debt tokens (e.g., USDC).
   * **Repay with FTs:** The borrower buys back FTs from the market—often at a discount—and uses them to settle the debt, potentially saving on repayment costs.
3. **Liquidation Risk:**\
   If the GT’s LTV exceeds the **Liquidation LTV** due to changes in collateral or debt token prices, the collateral may be liquidated to protect lenders.



## **Example: Alice as a Borrowing Range Order Setter**

1. **Choosing a Market:**
   * **Debt Token:** USDC
   * **Collateral Token:** ETH
   * **Maturity Date:** 1 year
   * **Maximum LTV (MLTV):** 80%
   * **Liquidation LTV:** 85%
   * **ETH Price:** $1,000
2. **Specifying Borrowing Parameters:**\
   Alice decides to borrow USDC using ETH as collateral. She specifies:
   * **Collateral Amount:** 1 ETH.
   * **Maximum Borrowing Amount:** 800 USDC (calculated as 1 ETH × 80% MLTV).
   * **Pricing Curve:** 6–8% interest, with the highest rates applying to the first portion matched and progressively decreasing for subsequent matches.
3. **Order Matching Process:**
   * A lending market taker lends **500 USDC** into Alice’s range order.
   * The platform mints:
     * **500 FTs** representing the **principal**.
     * **500 XTs** representing the **interest**.
   * The minted **XTs** are exchanged within Alice’s range order for additional FTs. These **exchanged FTs** are minted from Alice’s GT and increase the **debt amount** recorded in her GT.
   * The lending market taker receives:
     * **500 Original FTs** (representing the principal).
     * **35 Exchanged FTs** (representing their fixed yield based on the specified rate 7% for example).
4. **Post-Match Status:**
   * Alice’s GT now records a total debt of **535 FTs** (500 principal + 35 exchanged FTs for the yield).
   * The lending market taker holds **535 FTs** in total, earning a fixed return on their lent debt tokens.



## **Advantages**

1. **Customizable Borrowing Terms:**\
   Borrowing order setters define their own pricing curve, collateral amount, and borrowing limits, ensuring borrowing terms align with their goals.
2. **Fixed-Rate Borrowing:**\
   Borrowers lock in predictable costs, shielding themselves from market interest rate volatility.
3. **Efficient Capital Deployment:**\
   Borrowers can immediately deploy the borrowed debt tokens into other DeFi opportunities, maximizing the utility of their collateral.
4. **Cost-Effective Repayment Options:**\
   Borrowers can strategically use FTs to repay debt at a discount, reducing their overall borrowing costs.



## **Summary**

The borrowing range order setter role is ideal for users who want control over their borrowing terms and costs. By choosing a market, specifying collateral and borrowing parameters, and placing range orders, borrowing order setters gain access to predictable fixed-rate loans, flexible repayment options, and transparent risk management. This role provides a foundation for effective liquidity management and financial optimization on TermMax.
