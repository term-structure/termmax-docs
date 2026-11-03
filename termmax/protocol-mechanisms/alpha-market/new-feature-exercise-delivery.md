# New Feature: Exercise - Delivery

TermMax Alpha has upgraded its take profit options, giving users more flexibility and better execution.

## What's Changed

Previously, there was only one way to take profit. Now, you have two options:

1. Exercise - Net Settle (previously "Take Profit")
2. Exercise - Delivery (new feature)

<figure><img src="../../.gitbook/assets/unknown (14).png" alt=""><figcaption></figcaption></figure>

### 1. Exercise - Net Settle (Cash/Token Settlement)

* Profit is automatically calculated, and you can claim it in your preferred asset (USDT or the underlying token)
* **Partial or Full Settlement**:
  * Partial settlement: only a portion of your position is settled, remaining position stays open
  * Full settlement: entire position is settled, no remaining exposure
* Quick and easy to execute
* Most effective when on-chain liquidity is sufficient

<figure><img src="../../.gitbook/assets/unknown (15).png" alt=""><figcaption></figcaption></figure>

### 2. Exercise - Delivery (Physical Delivery)

When DEX liquidity is insufficient, using Net Settle may incur slippage or be exposed to MEV attacks, especially for large positions. Profits in such cases may be lower than Delivery. Users can choose Delivery in this scenario.



* **Long Position (Long):** Users buy the underlying asset at the strike price using USDT.
  * Users can sell the underlying asset at a better price in markets with higher liquidity (e.g., centralized exchanges)
  * Profit = Proceeds from selling the underlying asset in other markets − USDT paid at the strike price<br>
* **Short Position (Short):** Users sell the underlying asset at the strike price.
  * Users can buy the underlying asset at a better price in markets with higher liquidity (e.g., centralized exchanges)
  * Profit = Proceeds from selling the underlying asset at the strike price − Cost of buying the underlying asset in other markets<br>
* **Partial or Full Delivery**
  * Partial Delivery: Exercise and deliver only a portion of the position, keeping the remaining position open.
  * Full Delivery: Exercise and deliver the entire position, closing the position.

<figure><img src="../../.gitbook/assets/unknown (16).png" alt=""><figcaption></figcaption></figure>

### 3. Summary

When DEX liquidity is insufficient, using Net Settle may result in slippage or be exposed to MEV attacks, especially for large positions. In such cases, profits may be lower than Delivery, and you can choose Delivery instead.

When on-chain liquidity is sufficient, the outcomes of Net Settle and Delivery are usually similar. In this case, users can freely choose based on personal preference, convenience, or strategy.

**Note:**\
After execution (via Net Settle or Delivery), users will receive their realized profit upfront, along with a GT position. This position does not impact your earnings and requires no action. While it can be ignored, users may optionally manage it to capture additional yield opportunities, depending on market conditions.
