# Fees and Costs

To provide users with a clear understanding of the fees and costs incurred when trading Long/Short Options on the Alpha Market, we have compiled the applicable rules below. This doc covers Transaction Fees, Option Financing Costs, and Trading Execution Losses.

### Option Trading Fees and Costs

1. #### Option Opening and Closing Fees (Transaction Fees)

| Trading Action     | Fee Description    | Notes                                                                     |
| ------------------ | ------------------ | ------------------------------------------------------------------------- |
| Buy / Sell Options | 7% of premium paid | Includes opening and closing Long / Short positions (when not exercised). |



2. #### Exercise Fee (Take Profit Fee)

When an option position is profitable (i.e., reaches the exercisable range), users can realize gains by clicking “Take Profit” to close the position. A fee is charged on the current Notional Value at the time of exercise.

* Initial Fee Rate: 1.9% (on Day 1 of the contract)
* The fee linearly decreases as the contract approaches maturity<br>

**Fee Calculation:**\
Fee = Option Notional Value × Daily Rate\
Daily Rate = 1.9% × (Remaining Term / Total Contract Days)

**Example:**\
Assume you purchase a 16-day option contract and close the position on Day 10. If the option's Notional Value is 10,000 USDT at that time, with 4 days remaining, the fee you pay is:  **`10,000 × 1.9% × (4/16) = 47.5 USDT`**



3. #### Option Financing Cost (Interest Cost)

When purchasing an option, the user must pay a borrowing interest based on the option's Notional Value, calculated as follows:

**Interest = Option Notional Value × AMM Rate Pricing × Holding Days / 365**

This interest is collected by the Dual Investment Depositors (LPs), who effectively act as option sellers and provide trading liquidity to the option buyer. The platform may deduct a certain percentage as a commission from this interest (currently 10%).

> **Note on Calculation Precision:** Although the formula uses the 'day' unit for conceptual clarity, the system performs calculation and accrual in real-time on-chain, measured per second (i.e. per block).Therefore, the system converts the AMM Annualized Rate into a per-second rate and calculates the interest expense based on the precise number of seconds held.

**Example:**\
Assume you purchase an option with an 100% Annualized Rate, a Notional Value of 100 USDT, and hold it for 1 day. The interest cost is calculated as: 100 × 100% × 1 / 365 ≈ 1.37 USDT

Please Note:

* The Annual Rate adjusts dynamically based on AMM pricing.
* Interest accrues linearly with the holding period.<br>

For more details on the Alpha Market, please visit\
[https://docs.ts.finance/protocol-mechanisms/alpha-market](https://docs.ts.finance/protocol-mechanisms/alpha-market)\
\
For TermMax AMM mechanism details, please refer to\
[https://docs.ts.finance/strategies/borrow-lend-strategies](https://docs.ts.finance/strategies/borrow-lend-strategies)&#x20;



### Trading Execution Losses (Execution Costs)

These are objectively existing market costs, primarily determined by market volatility and asset liquidity.

| Loss Type      | Description                                                                                                                                      | Bearer     |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| Slippage       | The difference between the expected execution price and the actual executed price (can be positive or negative).                                 | The Trader |
| Bid-Ask Spread | The difference between the highest bid and lowest ask price. (The Alpha Market has almost negligible spread, which users can largely disregard). | The Trader |



### User Trading Fees and Cost Summary

Users trading on the Alpha Market may incur the following costs:

* Option Transaction Fees (fee-free during the alpha boosting program)
* Take Profit Fee
* Option Financing Cost
* Trading Execution Losses (Slippage, Spread)
