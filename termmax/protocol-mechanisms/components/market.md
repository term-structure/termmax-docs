# 💹 Market

A Market is where users can place orders for borrowing, lending, leveraging, and providing liquidity. Each Market includes the following essential elements and parameters, configured by the TermMax administrator:

* Debt Token: The token borrowers borrow and lenders lend (e.g., USDC).
* Collateral Token: The token borrowers use as collateral (e.g., PT-sUSDe-27Dec2024).
* Maturity Date: The date by which borrowers must repay the debt (e.g., December 28, 2024).
* Liquidation LTV (LLTV): The Loan-to-Value ratio at which liquidation is triggered. Liquidation occurs if the loan's LTV meets or exceeds the LLTV threshold due to a decline in collateral value or an increase in debt token value.
* Max LTV (MLTV): A more conservative LTV threshold with a built-in buffer, used to calculate the maximum amount of tokens that can be borrowed when a market maker (as a borrower) deposits collateral. The MLTV helps prevent immediate liquidation due to sudden market price fluctuations.
* Leverage Market: This is a flag indicating whether leverage is enabled for the market. Not all markets are suitable for leverage due to high risk of liquidation and other factors.

## Interest Calculation

The interest amount ($$I$$) on TermMax will be calculated based on the matched interest rate ($$r$$) and time ratio ($$\theta$$).

$$
\begin{cases}
t_{M} := \text{maturity timestamp} \\ t_{m} := \text{matched timestamp} \\ d:= \text{days from } t_{m} \text{ to } t_{M}
\end{cases}
$$

$$
d = \lceil \frac{t_{M}-t_{m}}{86400} \rceil
$$

$$
\theta = \lfloor \frac{d}{365} \rfloor
$$

$$
I = r \theta
$$







Open Time: The time at which the market opens for market makers and curators to create and activate range orders.

