# Lending Range Order Setter

A **lending Range Order Setter** on TermMax is a user who defines the terms for lending debt tokens (e.g., USDC) by placing **lending range orders**. These range orders specify the desired lending rates, amounts, and maturity. Lending order setters are matched with **borrowing market takers** who borrow debt tokens at the specified terms. This role allows lenders to earn fixed returns on their capital with predictable yields, while securing their risk through collateralized loans.



## **How It Works**

A lending range order setter follows these steps to place a lending range order:

1. **Choosing a Market:**\
   The lending order setter selects a specific fixed-rate market to operate in, which includes the following predefined parameters:
   * **Debt Token:** The asset to lend (e.g., USDC).
   * **Collateral Token:** The asset that borrowers will lock as collateral (e.g., ETH).
   * **Maturity Date:** The time when the loan matures and lenders can redeem their yields.
   * **Maximum Loan-to-Value (MLTV):** The maximum LTV ratio at which the lending order setter is willing to lend. This ensures that the collateral value exceeds the debt value, reducing liquidation risk.
   * **Liquidation Loan-to-Value (LLTV):** The LTV threshold at which the collateral will be liquidated to protect the lender if the borrower’s debt becomes under-collateralized.
2. **Specifying Lending Parameters:**\
   After selecting a market, the lender configures their lending range order by specifying the following details:
   * **Total Lending Amount:** The total amount of debt tokens (e.g., USDC) they are willing to lend.
   * **Pricing Curve:** Defines the range of lending rates they are willing to offer. Lower rates apply to the initial portion of the order, and higher rates apply as more of the order is filled. For example, the first portion might lend at 4%, and subsequent portions might gradually increase up to 6%.
3. **Placing the Order:**\
   The lending range order is placed on the TermMax platform, where it remains active until it is fully matched or the maturity date is reached. Borrowing market takers can fill the order, borrowing debt tokens at the rates specified by the pricing curve.



## **Lending Mechanics**

Once the lending range order is placed, the process proceeds as follows:

1. **Order Initialization:**
   * When the lending range order is placed, the system mints **principal FTs** (equal to the total debt tokens lent) and corresponding **XTs** and allocates them to the range order. These FTs represent the **principal** that will eventually be redeemed by the lending order setter at maturity.
2. **Order Matching:**
   * When a borrowing market taker fills a portion of the lending range order, the following steps occur:
     1. **Borrowing and Collateral Lock:**\
        The borrowing market taker locks collateral in a **Gearing Token (GT)** and issues **Fixed-Rate Tokens (FTs)** with debt increased accordingly.
     2. **Splitting Issued FTs:**\
        The issued FTs are split into two parts:
        * **Principal Part of FTs:** Represents the borrowed debt token amount (e.g., 5,000 USDC).
        * **Interest Part of FTs:** Represents the fixed interest portion to be earned by the lending range order setter.
     3. **Interest Part FT Exchange:**\
        The borrowing market taker sells the **interest part of the FTs** to the lending range order in exchange for **X Tokens (XTs)**.
     4. **XT and FT Redemption:**\
        The borrowing market taker combines the exchanged XTs with the **principal part of the FTs** to **redeem debt tokens** (e.g., USDC). These redeemed debt tokens are then available for the borrowing market taker to use for further investment or liquidity needs.
     5. **FT Delivery to Lending Range Order Setter:**
        * The lending range order setter only receives the **interest part of the FTs** exchanged during the order matching process.
        * The **principal part of the FTs** for the lender was minted when the lending range order was placed and remains unchanged.
   * As a result, the lending order setter holds:
     * **Principal FTs (Minted Initially):** Representing the debt token amount lent.
     * **Interest FTs (Exchanged):** Representing the fixed yield earned from lending.
3. **Yield and Redemption at Maturity:**
   * The FTs issued to the lending order setter (both principal and interest parts) can be held to maturity, at which point they can be redeemed **1:1** for debt tokens (e.g., 1 FT = 1 USDC).
   * Alternatively, the lending order setter can sell FTs on the open market before maturity to realize their returns earlier.



## **Example: Bob as a Lending Range Order Setter**

1. **Choosing a Market:**
   * **Debt Token:** USDC
   * **Collateral Token:** ETH
   * **Maturity Date:** 1 year
   * **Maximum LTV (MLTV):** 80%
   * **Liquidation LTV:** 85%
2. **Specifying Lending Parameters:**\
   Bob decides to lend USDC in a TermMax market. He specifies:
   * **Total Lending Amount:** 10,000 USDC.
   * **Pricing Curve:** 4–6% interest, with lower rates applying to the initial portion of the order (e.g., 4%) and progressively increasing to higher rates for subsequent portions (e.g., 6%).
3. **Order Matching Process:**
   * A borrowing market taker borrows **5,250 USDC** from Bob’s range order:
     * The borrowing market taker locks collateral in a GT and issues **5,000 FTs** to represent the principal.
     * The issued FTs are split into two parts:
       * **Principal Part:** 5,000 FTs representing the debt.
       * **Interest Part:** 250 FTs representing the fixed yield (assume the matched interest rate is 5% for example).
     * The borrowing market taker sells the **interest part of 250 FTs** to Bob’s range order for **XTs**.
     * The borrowing market taker combines the exchanged XTs with the **principal part of 5,000 FTs** to **redeem 5,000 USDC**, which they can use for further investment.
   * Bob receives:
     * **Principal FTs (Minted Initially):** 10,000 FTs allocated to the range order when it was placed.
     * **Interest FTs (Exchanged):** 250 FTs representing the fixed yield.
4. **Post-Match Status:**
   * Bob now holds **10,250 FTs** in total.
   * At maturity, Bob can redeem these FTs for **10,250 USDC**, earning a fixed return on the debt tokens he lent.



## **Advantages**

1. **Predictable Yields:**\
   Lending range order setters define their pricing curve, ensuring they earn fixed, predictable returns on their lent debt tokens.
2. **Secured Lending Risk:**\
   Lending order setters manage their risk by selecting acceptable maximum and liquidation LTV ratios, ensuring loans are over-collateralized and protected from market volatility.
3. **Liquidity Flexibility:**\
   Lenders can hold FTs to maturity for guaranteed returns or sell them on the open market before maturity to realize their returns earlier.
4. **Efficient Capital Deployment:**\
   Lending order setters earn competitive fixed yields without exposure to floating-rate volatility, ensuring efficient use of their capital.



## **Summary**

The lending range order setter role is ideal for users who want to deploy capital in a predictable, fixed-rate lending environment. By choosing a market, specifying lending parameters, and placing range orders, lending order setters can define their desired rates and amounts while earning fixed returns with transparent risk management. This role offers a straightforward yet effective way to grow capital on TermMax.
