# Lender

A **lending market taker** on TermMax interacts with [**borrowing range orders**](../range-order-setter/borrowing-range-order-setter.md) placed by borrowing market makers to lend debt tokens (e.g., USDC). Lending market takers provide debt tokens to earn fixed returns by filling the borrowing curve of a range order. Their lent debt tokens are used to mint [**Fixed-Rate Tokens (FT)**](../components/token.md#fixed-rate-token-ft) and [**X Tokens (XT)**](../components/token.md#x-token-xt). Lending market takers sell the minted XTs to the borrowing range order and receive **additional FTs** as interest, representing their fixed yield. This allows them to securely and predictably earn returns in a decentralized environment.



## **How It Works**

A lending market taker follows these steps to execute a lending transaction:

1. **Choosing a Borrowing Range Order:**\
   Lending market takers identify a borrowing range order that matches their lending requirements. The borrowing range order specifies:
   * **Debt Token:** The token to lend (e.g., USDC).
   * **Borrowing Rates (Pricing Curve):** The fixed lending rates available. Higher rates apply to the initial portion matched, with progressively lower rates for subsequent portions.
   * **Maturity Date:** The time at which the loan matures and the lender can redeem their returns.
2. **Providing Debt Tokens:**\
   Lending market takers provide their debt tokens (e.g., USDC) to the borrowing range order by filling portions of the borrowing curve. The amount lent depends on the **borrowing demand within the range order** and the **specific portion of the curve being matched**.
3. **Minting and Selling XTs for Additional FTs:**
   * The debt tokens provided by lending market takers are used to mint **FTs** and **XTs**.
   * Lending market takers sell the minted XTs back to the borrowing range order in exchange for **additional FTs**, which represent the fixed yield earned on their lent amount.
4. **Holding FTs for Fixed Returns:**\
   Lending market takers hold the FTs (both principal and interest parts) until maturity, when they can redeem them for their fixed returns.



## **Lending Mechanics**

The lending process involves the following key steps:

1. **Matching and Lending:**
   * Lending market takers fill portions of the borrowing curve in the range order. For example, if the borrowing curve offers rates ranging from **6–4%**, the first portion might be lent at 6%, and subsequent portions at progressively lower rates.
   * The amount lent depends on the borrowing demand at specific points along the curve and the availability of funds to meet that demand.
2. **FT and XT Dynamics:**
   * Debt tokens provided by lending market takers are used to mint **FTs** and **XTs**.
   * Lending market takers sell the minted **XTs** to the borrowing range order in exchange for **additional FTs**, which represent their fixed yield.
3. **Fixed Returns:**
   * At maturity, the lending market taker redeems the FTs (both principal and interest parts) for debt tokens, earning the fixed returns specified in the borrowing curve.



## **Example: Bob as a Lending Market Taker**

1. **Choosing a Borrowing Range Order:**\
   Bob identifies a borrowing range order with the following parameters:
   * **Borrowing Curve:** 6–4% interest, with higher rates for initial portions matched.
   * **Maturity Date:** 1 year.
2. **Lending Setup:**
   * Bob provides **1,000 USDC** to the borrowing range order.
   * This amount is matched at a rate of **5%**, based on the current position in the borrowing curve.
3. **Minting and Selling XTs for Additional FTs:**
   * Bob’s **1,000 USDC** is used to mint **1,000 FTs** (principal) and **1,000 XTs**.
   * Bob sells the **1,000 XTs** to the borrowing range order in exchange for **50 FTs** (interest), reflecting the fixed yield of 5%.
4. **Post-Lending Status:**
   * Bob now holds **1,050 FTs** in his wallet:
     * **1,000 FTs** represent the principal.
     * **50 FTs** represent the fixed interest.
5. **At Maturity:**
   * Bob redeems the **1,050 FTs** for **1,050 USDC**, earning both his principal and fixed return.



## **Advantages**

1. **Predictable Fixed Returns:**\
   Lending market takers earn predictable, fixed returns by lending their debt tokens at transparent rates defined in the borrowing curve.
2. **Low-Risk Lending:**\
   Lending is secured by the over-collateralization of borrowing market makers, minimizing risk for lenders.
3. **Passive Income Opportunity:**\
   Lending market takers can provide liquidity and earn passive income without needing to actively define pricing curves or manage range orders.
4. **Efficient Capital Deployment:**\
   Lending market takers can lend their debt tokens securely and efficiently, knowing they will earn a fixed yield at maturity.



## **Summary**

Lending market takers play a crucial role on TermMax by providing debt tokens to fill borrowing range orders and earn fixed returns. By minting XTs, selling them to the range order, and receiving FTs as both principal and interest, lending market takers enjoy predictable, secure, and efficient lending experiences. This role is ideal for users seeking stable, passive income opportunities in a decentralized environment.
