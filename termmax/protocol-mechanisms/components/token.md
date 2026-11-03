# 🪙 Token

### Fixed-rate Token (FT)&#x20;

_Token with fixed yield at maturity_



#### Purpose

The Fixed-Rate Token (FT) is an ERC-20 token designed to provide lenders with a fixed return at maturity.



#### Mechanism

Lenders purchase FT at a discounted price and redeem it for its face value at maturity, effectively earning a fixed yield. FTs can also be traded on the market.



#### Benefits&#x20;

FT offers predictable, fixed-rate returns over a defined term, providing certainty for lenders. In a declining interest rate environment, FT becomes more attractive than holding the underlying asset (e.g., USDC) directly.



#### Example&#x20;

110 FT-USDC will be redeemable for 110 USDC at maturity. A lender purchasing 110 FT-USDC for 100 USDC is effectively earning a 10% annual return ((110-100)/100) over a one-year term.<br>

This calculation assumes a one-year maturity. For maturities shorter or longer than one year, the annualized return is calculated proportionally. For example, if the maturity was 180 days (approximately half a year), the annualized return would be approximately 20%. The general formula for calculating the annualized return is:



Annualized Return = ((Maturity Price - Purchase Price) / Purchase Price) \* (365 / Maturity Days) \* 100<br>

Where:

Maturity Price: The value at which the FT token can be redeemed at maturity.

Purchase Price: The price paid to acquire the FT token.

Maturity Days: The number of days until the FT token matures.





### X Token (XT)&#x20;

_Interests to be paid_<br>

#### Purpose

The X Token (XT) is an ERC-20 token representing the interest obligation associated with an FT loan. It represents the present value of the interest to be paid by the borrower.<br>

XT also serves as an indicator of the leverage multiplier applied to the collateral. However, this is a derived property rather than its primary function.



#### Relationship to FT&#x20;

When a loan is created, it's represented by both FT and XT tokens. The combined present value of FT and XT equals the initial loan amount.



#### Formula

Initial Loan Value = Present Value (FT) + Present Value (XT)



#### Example

1000 USDC = PV(1000 FT-USDC) + PV(1000 XT-USDC) at anytime





### Gearing Token (GT)

_NFT with collateral and debt_<br>

#### Purpose&#x20;

The Gearing Token (GT) is an ERC-721 NFT that represents a leveraged borrowing position. It encapsulates the collateral and debt.<br>

GT simplifies complex looping strategies by representing the entire leveraged position in a single token. Standard looping requires multiple transactions across different protocols.<br>

#### Mechanism

1. Borrowers/Leveragers deposit collateral.
2. A GT NFT is minted, representing the loan (FT) and the collateral backing it.
3. When the loan is repaid, the GT is burned, and the collateral is returned.
4. Any changes to the collateral (adding or removing) update the GT's metadata and the associated health factor.



#### Relationship to FT

The GT represents the collateral and the obligation to repay the loan (represented by the corresponding FT tokens).



#### Representation

Collateral Value = GT Value (which represents Collateral - Value of Debt (FT)) + Value of Loan (FT)
