# 🪜 Risks

### Leveragers (Buying GT)

* **Liquidation Risk**: As a GT holder in a leveraged position, you're exposed to the risk of liquidation. If the value of your collateral declines significantly, your position could be liquidated to cover the debt, resulting in the loss of your collateralized assets.
* **Market Volatility**: Leveraged positions amplify both gains and losses. Sudden adverse market movements can lead to substantial losses.
* **Interest Rate Risk**: While borrowing rates are fixed, if the yields on your collateral (especially those with floating rates) decrease, your overall returns may be negatively affected.
* **DEX Liquidity Risk**: The leveraging process relies on third-party decentralized exchanges (DEXs) for swapping between debt tokens and collateral tokens. Limited liquidity, technical issues, or market disruptions on these DEXs could affect the efficiency of leverage creation, liquidation processes, and redemptions. This may result in higher slippage, failed transactions, or suboptimal execution prices during critical operations.



### Lenders (Buying FT)

* **Liquidation Risk**: If the liquidation process isn't fully executed due to dramatic market price changes or other issues, the value of the liquidated assets may not fully cover the lender's principal plus interest. However, TermMax's physical delivery mechanism mitigates this risk by providing a proportional share of the collateral, thereby minimizing potential losses.
* **Interest Rate Risk**: If market interest rates rise above the fixed rate you're receiving and you decide to sell your FT tokens before the maturity date, they may become less valuable compared to new offerings with higher rates.



### Borrowers (with Collaterals)

* **Collateral Liquidation Risk**: If the value of your collateral falls below a certain threshold, it may be liquidated to repay your loan, resulting in the loss of your collateral assets.
* **Market Risk**: If the market value of your collateral decreases significantly, you might incur losses upon liquidation beyond what you anticipated.



### Depositors (Earn from Vaults)

* **Negative Returns Possibility**: There is no guarantee of positive returns – depositors may experience losses due to adverse market conditions or unsuccessful curator strategies.
* **Curator Dependency**: Performance relies entirely on the curator's expertise in managing the vault's strategy.
* **Withdrawal Risk**: Under certain market conditions, withdrawals might be queued, and you might receive less value upon withdrawal than you initially deposited due to market movements and fees.
* **Market Volatility**: High volatility can affect the performance of the vault's strategy and the total value of your deposited assets.
* **Physical Delivery Risk:** If the physical delivery mechanism is triggered after the maturity dates of those markets associated with the vault, the collateral will be delivered to the vault. If the available liquidity of the vault is not enough for depositors to withdraw, they can wait for the incoming liquidity to withdraw their assets or burn their vault share to claim the delivered collateral. This may result in receiving assets different from those initially deposited, potentially affecting value and requiring additional transactions to convert back to the desired assets.



### Curators (Managing Vaults)

* **Strategy Performance Risk**: Your strategy performance directly impacts both your reputation and earnings. Underperforming strategies may lead to depositor withdrawals, reducing assets under management and performance fees.
* **Market Timing Risk**: Incorrectly timed range order placements may result in suboptimal rates or insufficient utilization, affecting overall vault performance.
* **Reputation Risk**: Poor performance or operational mistakes can damage your reputation as a curator, making it difficult to attract depositors for future vaults.
* **Timelock Constraints**: The timelock mechanism on parameter changes may prevent quick strategy adjustments during volatile market conditions, potentially leading to missed opportunities or increased risk exposure.
* **Guardian Intervention Risk**: Proposed parameter changes can be revoked by the Guardian role during the timelock period, potentially limiting your ability to implement desired strategy changes.
* **Vault Capacity Management**: Incorrect capacity limit settings may lead to capital inefficiency (if too low) or diluted returns (if too high), affecting overall vault performance.
* **Multi-Market Coordination Risk**: Managing strategies across multiple markets increases complexity and the risk of overlooking important market-specific factors that could impact performance.
* **Fee Competition Risk**: Setting performance fees too high may discourage depositors from choosing your vault over competitors with lower fees.



### Range Order Setters (Creating Range Orders)

* **Pricing Curve Design Risk**: Poorly configured pricing curves may result in unfavorable execution rates, leading to suboptimal returns or failure to attract market takers.
* **Unutilized Capital Risk**: If range orders are not filled, capital remains idle and fails to generate returns, resulting in opportunity cost.
* **Market Mispricing Risk**: Setting incorrect rates relative to broader market conditions may lead to adverse selection, where your orders are only filled when they offer unfavorable terms.
* **Position Concentration Risk**: Large orders in specific markets may be difficult to fill completely, leading to partial utilization and reduced overall returns.
* **Collateral Value Fluctuation**: For borrowing range orders, significant collateral value decreases may trigger liquidations, resulting in potential losses beyond anticipated costs.
* **Counterparty Matching Risk**: Range orders may not find suitable market takers, especially in less liquid markets or during periods of low activity.
* **Rate Arbitrage Risk**: Sophisticated market participants may exploit inefficiencies in your pricing curves, resulting in transactions that favor the counterparty at your expense.
* **Maturity Mismatch Risk**: Setting orders with inappropriate maturities relative to your liquidity needs may create cash flow challenges if funds are locked longer than anticipated.
* **Fee Structure Impact**: Transaction and protocol fees may erode expected returns, especially for range orders with tight spreads or small transaction sizes.



### General Risks for All Users

* **Smart Contract and Technical Risks**: Bugs, coding errors, or hacks can lead to losses. Network congestion or failures might delay transactions.
* **Platform Risk**: Reliance on TermMax's infrastructure means that any platform-specific issues could affect user experience and the functioning of the system.
* **Oracle Risk**: TermMax relies on external price feeds from oracles like [Chainlink](https://chain.link/) and [RedStone](https://redstone.finance/) to determine the current prices of assets involved in loans. While these oracles are designed to be secure and reliable, they are potential points of failure. If an oracle is compromised or provides incorrect data, it could lead to inaccurate valuations of collateral and underlying assets. This might result in wrongful liquidations or under-collateralized loans.
* **Transaction Ordering Manipulation**: Users are exposed to the risk of MEV extraction, where validators or specialized entities may manipulate transaction ordering to their advantage. This can result in frontrunning, backrunning, or sandwich attacks on your transactions. While TermMax implements protective measures to minimize MEV extraction through careful design and transaction flow optimization, this risk still exists as it is inherent to public blockchain networks.
* **Price Fluctuations**: Due to the time delay between transaction submission and execution, the actual execution price may differ from the expected price. This slippage can be especially significant during periods of high market volatility or for transactions involving assets with limited liquidity.
* **AMM Curve Dynamics:** When interacting with TermMax's custom AMM, slippage may occur as your transaction moves along the pricing curve. Larger transactions typically experience higher slippage as they consume more liquidity from the range order.
* **Order Size Impact:** Substantial borrowing or lending positions may experience more significant slippage than smaller positions due to their larger impact on the available liquidity in the range order.
* #### Mitigation Strategies
  * **Consider transaction timing**: During periods of high volatility, slippage and MEV risks may be elevated.
  * **Use appropriate slippage tolerance**: Setting a reasonable slippage tolerance when interacting with range orders can help protect against unexpected price movements.
  * **Transaction size management**: Breaking larger transactions into smaller ones may reduce slippage and MEV exposure, though this should be balanced against increased gas costs.



### Conclusion

While TermMax provides innovative tools to enhance your DeFi experience, it's essential to understand the associated risks with each role. Always perform thorough research and consider your risk tolerance before participating. Diversifying your investments and staying informed about market conditions can help mitigate some of these risks.

<br>
