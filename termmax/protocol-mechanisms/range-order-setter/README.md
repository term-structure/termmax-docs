# 🐳 Range Order Setter

On TermMax, range order setters define their strategies by placing **range orders** with pricing curves tailored to their intentions and the current market status. These pricing setters leverage the platform's fixed-rate tokenization mechanism to optimize their financial goals. The three types of range order are:

1. [**Borrowing Range Order**](borrowing-range-order-setter.md)\
   Borrowers aim to secure debt tokens (e.g., USDC) at fixed rates by placing range orders with a **borrowing curve**. Their pricing curve typically specifies **higher borrowing rates for the initial portion matched** and **lower rates for subsequent portions** as more of the order is filled. This allows them to manage their borrowing costs effectively while maintaining flexibility for market fluctuations.
2. [**Lending Range Order**](lending-range-order-setter.md)\
   Lenders aim to earn fixed yields on their debt tokens by placing range orders with a **lending curve**. They define **lower lending rates for the initial portion matched** and **higher rates for subsequent portions**, ensuring competitive returns as the order fills. This strategy enables lenders to maximize profits while efficiently deploying their capital.
3.  [**Two-Way Range Order**](two-way-range-order-setter.md)\
    Two-way range order setters combine the strategies of borrowers and lenders by placing a **single range order** with two pricing curves:

    * A **borrowing curve** with **lower rates**, minimizing borrowing costs when borrowing market takers fill the order.
    * A **lending curve** with **higher rates**, maximizing yields when lending market takers fill the order.

    By earning the spread between borrowing and lending rates, two-way range order setters dynamically adjust their roles based on market activity, optimizing both capital deployment and risk management.
