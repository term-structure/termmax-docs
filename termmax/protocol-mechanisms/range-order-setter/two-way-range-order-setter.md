# Two-Way Range Order Setter

A **two-way range order setter** on TermMax is a user who places a **single range order** with two pricing curves: one for **borrowing rates** and the other for **lending rates**. This allows the two-way order setter to act as both a borrower and a lender simultaneously within the same market. By setting a **lower rate on the borrowing curve** and a **higher rate on the lending curve**, the two-way order setter earns the spread when borrowing market takers and lending market takers fill the order.



## **How It Works**

A two-way range order setter follows these steps to place the range order:

1. **Choosing a Market:**\
   The two-way range order setter selects a specific fixed-rate market, which includes the following predefined parameters:
   * **Debt Token:** The asset to borrow or lend (e.g., USDC).
   * **Collateral Token:** The asset to lock as collateral for borrowing (e.g., ETH).
   * **Maturity Date:** The time when loans mature, borrowers must repay, and lenders can redeem their yields.
   * **Maximum Loan-to-Value (MLTV):** The maximum LTV ratio for borrowing, ensuring loans are over-collateralized.
   * **Liquidation Loan-to-Value (Liquidation LTV):** The LTV threshold at which collateral will be liquidated to protect lenders.
2.  **Specifying Two Pricing Curves:**\
    The two-way order setter configures two separate pricing curves for their range order:

    * **Borrowing Curve:** Specifies the rates the two-way order setter is willing to pay to borrow debt tokens, with **lower rates to minimize borrowing costs**. For example, 3–5%, with higher rates applying to the initial portion matched and lower rates applying to subsequent portions.
    * **Lending Curve:** Specifies the rates the two-way order setter is willing to offer to lend debt tokens, with **higher rates to maximize returns**. For example, 6–8%, with lower rates applying to the initial portion matched and higher rates applying to subsequent portions.

    By maintaining a spread between the borrowing and lending curves, the two-way order setter ensures a profit margin when both curves are taken by market takers.
3. **Placing the Order:**\
   The two-way range order is placed on the TermMax platform, where it remains active until fully matched or the maturity date is reached. Borrowing market takers fill the **lending curve**, and lending market takers fill the **borrowing curve**. The two-way order setter adjusts dynamically between borrowing and lending based on market activity.



## **Two-Way Mechanics**

Once the two-way range order is placed, the process proceeds as follows:

1. **Order Matching for Borrowing (Borrowing Curve):**
   * When a lending market taker fills the borrowing curve, the two-way range order setter becomes a borrower. The process proceeds as follows:
     1. **Minting FT and XT:**\
        The debt token provided by the lending market taker is used to mint an equivalent amount of **FTs** (representing the debt) and **XTs**.
     2. **XT Exchange:**\
        The **XT** is sold to the two-way range order for exchanging **additional FTs**.
     3. **FT Reserve Check:**
        * If the two-way range order has sufficient **FT reserves**, the exchanged FT is transferred from the range order.
        * If the **FT reserve is insufficient**, the additional FTs are minted from the two-way order setter’s **Gearing Token (GT)**. This increases the **debt recorded in the GT**, reflecting the additional borrowing by the two-way order setter.
   * The two-way order setter can use the borrowed debt tokens for further investment, trading, or other purposes.
2. **Order Matching for Lending (Lending Curve):**
   * When a borrowing order setter fills the lending curve, the two-way order setter becomes a lender. The process mirrors the lending mechanics:
     1. Borrowing market takers lock collateral in their GT and issue FTs to represent the debt.
     2. The **interest part of FTs** is sold to the two-way range order in exchange for XTs.
     3. The two-way order setter receives:
        * **Interest FTs** representing the fixed yield.
        * **Principal FTs**, which were minted into the lending curve when the two-way range order was placed, representing the loan principal.
3. **Dynamic Role Adjustment:**
   * The two-way order setter’s role adjusts dynamically based on which curve is matched:
     * If the borrowing curve is filled, the two-way order setter becomes a borrower and accumulates debt in their GT.
     * If the lending curve is filled, the two-way order setter becomes a lender and accumulates FTs for yield.
4. **At Maturity:**
   * **As a Borrower:** The two-way order setter must repay the debt recorded in their GT by either repaying debt tokens directly or purchasing FTs from the market and returning them.
   * **As a Lender:** The two-way order setter redeems their accumulated FTs for debt tokens at maturity.



## **Example: Alice as a Two-Way Order Setter**

1. **Choosing a Market:**
   * **Debt Token:** USDC
   * **Collateral Token:** ETH
   * **Maturity Date:** 1 year
   * **Maximum LTV (MLTV):** 80%
   * **Liquidation LTV:** 85%
2. **Specifying Two Pricing Curves:**\
   Alice places a two-way range order with the following parameters:
   * **Borrowing Curve:** 3–5%, with **higher rates (5%) for the initial portion matched** and **lower rates (3%) for subsequent portions**.
   * **Lending Curve:** 6–8%, with **lower rates (6%) for the initial portion matched** and **higher rates (8%) for subsequent portions**.
3. **Order Matching:**
   * **Borrowing:**
     * A lending market taker lends **1,000 USDC** to Alice’s borrowing curve.
     * **Minting FT and XT:** 1,000 USDC mints **1,000 FTs** and **1,000 XTs**.
     * **XT Exchange:** The 1,000 XTs are sold to Alice’s borrowing curve for additional FTs.
     * **FT Reserve Check:** If the FT reserve in Alice’s range order is insufficient, additional FTs are minted from Alice’s GT, increasing her debt recorded in the GT.
     * **Result:** Alice borrows 1,000 USDC and increases her GT debt accordingly.
   * **Lending:**
     * A borrowing market taker fills Alice’s lending curve and issues FTs.
     * Alice receives the **interest FTs** exchanged during the match and holds the **principal FTs** minted when the range order was placed.
4. **At Maturity:**
   * Alice repays the debt recorded in her GT by either returning FTs or paying 1,000 USDC directly.
   * Alice redeems the FTs accumulated through lending (which may include the earning of spread between borrowing and lending rates).



## **Advantages**

1. **Dynamic Role Flexibility:**\
   Two-way order setters can seamlessly adjust between borrowing and lending, optimizing their capital usage based on market demand.
2. **Earn the Spread:**\
   By setting a **lower borrowing rate** and a **higher lending rate**, two-way range orders earn the spread between the two, creating a predictable profit margin.
3. **Capital Efficiency:**\
   A single range order allows two-way order setters to leverage both borrowing and lending opportunities without maintaining separate orders.
4. **Risk Management:**\
   Over-collateralization and LTV constraints protect two-way order setters from excessive risk on the borrowing side, while secured loans ensure returns on the lending side.



## **Summary**

The two-way range order setter role is ideal for users seeking a dynamic, capital-efficient strategy that combines borrowing and lending in a single position. By placing a two-way range order with separate borrowing and lending curves, two-way order setters can optimize yields, control borrowing costs, and respond to market conditions without needing to manage multiple positions. This flexibility makes two-way range order a powerful tool for advanced users on TermMax.
