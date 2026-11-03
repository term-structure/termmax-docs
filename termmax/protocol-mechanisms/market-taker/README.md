# 🐬 Market Taker

Market takers on TermMax interact with the **range orders** defined by market makers to fulfill their borrowing or lending needs. Unlike market makers who define pricing curves, market takers simply match and fill these existing orders based on their financial objectives. The three types of market takers are:

1. [**Borrowing Market Taker**](borrower.md)\
   Borrowing market takers aim to secure debt tokens (e.g., USDC) for their financial needs by filling the **lending range orders** created by lending market makers. They lock collateral in a **Gearing Token (GT)**, issue **Fixed-Rate Tokens (FTs)** to represent their debt, and exchange these FTs for debt tokens at the rates specified in the lending curve. Borrowing market takers benefit from predictable, fixed-rate borrowing costs.
2. [**Lending Market Taker**](lender.md)\
   Lending market takers provide debt tokens to earn fixed returns by filling the **borrowing range orders** created by borrowing market makers. Their lent debt tokens are used to mint **FTs** and **XTs**, and the exchanged XTs ensure their returns are reflected in the fixed-rate yield specified in the borrowing curve. Lending market takers earn predictable yields without the need to define pricing curves.
3. [**Leverager**](leverager.md)\
   Leveragers are a specialized type of borrowing market taker who use borrowed debt tokens to amplify their exposure to a particular asset. Instead of simply using borrowed funds for external purposes, they reinvest the borrowed debt tokens into the underlying collateral asset, locking the collateral in a **Gearing Token (GT)** and creating a leveraged position. This is done in a single transaction through **flash loans**, enabling them to maximize their market exposure without looping.
