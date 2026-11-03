# Liquidation & Physical Delivery

Liquidation in TermMax is designed to ensure protocol stability by maintaining the required Loan-To-Value (LTV) of loans while rewarding liquidators who help secure the protocol. TermMax uses a structured formula to calculate the amount of collateral to be liquidated, ensuring fair incentives for liquidators while minimizing borrower penalties.



## Liquidation Triggers

#### **LLTV Breach:**&#x20;

Liquidation is triggered if the loan’s LTV meets or exceeds the LLTV threshold due to a decline in collateral value or a rise in debt token value.

#### Missed Maturity Repayment:

If a borrower fails to repay the loan by the fixed maturity date, the loan is flagged for liquidation and becomes open for liquidation for a two-hour window.&#x20;



## Liquidator Incentives

Liquidators receive a portion of the liquidated debt value (5%) from the borrower’s collateral as a reward, incentivizing prompt liquidation and supporting protocol stability.



## Borrower Penalties

10% Protocol Penalty: A 10% penalty based on the liquidated debt value is applied, with 5% allocated to liquidators and 5% to the protocol reserve.



## Liquidation Mechanism

#### **Partial Liquidations:**&#x20;

If the loan’s outstanding debt exceeds $10,000 USD, liquidators can only liquidate up to 50% of the total debt value. This rule minimizes penalties and reduces losses for the borrower while decreasing the LTV of unhealthy loans.

#### **Full Liquidations:**

If a loan is fully liquidated, (meaning the debt amount is reduced to zero) any remaining collateral will  automatically be transferred back to the borrower.

#### **10% Penalty on Liquidated Debt Value:**&#x20;

When liquidation is triggered, an additional 10% penalty that is calculated based on the liquidated debt value will be charged to the borrower’s total collateral. This penalty is divided as follows:

* 5% for Liquidation Rewards: Half of the penalty is allocated to liquidators as a reward.
* 5% for Protocol Penalty: The other half is directed to the protocol’s reserve vault to support protocol liquidity and security.

#### **Liquidated Collateral Calculation and Distribution:**&#x20;

To determine the total collateral to be liquidated, TermMax applies a formula. This formula ensures that the liquidated collateral amount first covers the reward to liquidators, with any remaining amount applied to the protocol penalty, while capping liquidation to the borrower’s position. The formula is as follows:

$$
\begin{align*}
liquidatedCollateralAmt= & \\
& min(liquidatedCollateralAmt_{liquidator}+liquidatedCollateralAmt_{protocol}, \\
& maxLiquidatedCollateralAmount)
\end{align*}
$$

where

* $$liquidatedCollateralAmt_{liquidator}$$: The portion of collateral allocated first to liquidators with liquidated debt amount and reward

$$
liquidatedCollateralAmt_{liquidator}= \frac{liquidatedDebtAmt \times debtTokenPrice \times (1+liquidationReward)}{collateralTokenPrice}
$$

* $$liquidatedCollateralAmt_{protocol}$$: The portion of collateral allocated to the protocol as a penalty, which is fulfilled only after $$liquidatedCollateralAmt_{liquidator}$$ is covered

$$
liquidatedCollateralAmt_{protocol}=\frac{liquidatedDebtAmt \times debtTokenPrice \times protocolPenalty}{collateralTokenPrice}
$$

* $$maxLiquidatedCollateralAmt$$: The maximum allowable collateral amount based on the borrower’s overall position. This factor ensures that the LTV of a loan will always become healthier (smaller) after the liquidation.

$$
maxLiquidatedCollateralAmt=\frac{totalCollateralAmt \times liquidatedDebtAmt}{totalDebtAmt}
$$



## Physical Delivery

In accordance with the above liquidation mechanism, if any loans remain unpaid or only partially liquidated after the liquidation window, the physical delivery process will automatically commence. In this process, the redemption pool will consist of both underlying tokens and collateral tokens. When FT holders redeem their FT through the pool, they will receive a proportional distribution of underlying and collateral tokens based on their FT shares relative to the total outstanding FT in the market.

