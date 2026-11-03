# 💵 Transaction Fees

### Lending Transaction Fee

**Formula:**&#x20;

Lending transaction fee rate = APR × Lending Fee Rate × (days to maturity/365)&#x20;

Lending transaction fee = lending transaction fee rate × lend amount

Currently, the Lending Fee Rate is 2%. This rate is determined by the TermMax protocol.<br>

{% hint style="info" %}
**Example:** If the lending rate (APR) is 10% and the lend amount is 1,000 USDC with 365 days to maturity:

* Lending Fee Rate = 10% × 2% × (365/365) = 0.2%
* Fee = 0.2% × 1000 = 2 in unit of FT
{% endhint %}



### Borrowing Transaction Fee

**Formula:**&#x20;

Borrowing transaction fee rate = \[GT Minting Reference Rate × GT Minting Fee Rate + matched borrow rate × Borrowing Fee Rate] × (days to maturity/365)&#x20;

Borrowing transaction fee = borrowing transaction fee rate × borrowed amount

Currently:

1. The Borrowing Fee Rate is 3%&#x20;
2. GT Minting Reference Rates:
   1. Stablecoins: 6% (Subject to prevailing market conditions from time to time)
   2. Non-Stablecoins: 3%
3. GT Minting Fee Rate: 10%



{% hint style="info" %}
**Example:** If the matched borrow rate is 5% and the borrowed asset is 1,000 USDC with 90 days to maturity:

* Borrowing transaction fee rate = \[6% × 10% + 5% × 3%] × (90/365) = 0.75% x 90 / 365 = 0.18493%
* Borrowing transaction fee = 0.18493% × 1,000 = 1.8493 in unit of FT
{% endhint %}



### Leverage Transaction Fee

**Formula:** The leverage transaction fee rate is identical to the borrowing transaction fee rate.&#x20;

Total borrowing amount = input amount × (leverage multiplier - 1)&#x20;

Leverage transaction fee = total borrowing amount × borrowing transaction fee rate



{% hint style="info" %}
**Example:** With a borrowing transaction fee rate of 0.1923%, an input amount of 1,000 USDC, and a leverage multiplier of 4.8:

* Leverage transaction fee = 1,000 × (4.8 - 1) × 0.1923% = 7.3074 in unit of FT
{% endhint %}
