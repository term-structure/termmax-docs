# 🪙 Range Order / Pricing Curve

### **Definition of Range Order**

A Range Order is a series of continuous orders configured by a range order setter or curator, defining the AMM pricing curve within a Market. Borrowers, lenders, and leveragers interact with these orders.

A single Market can contain multiple Range Orders, allowing users to choose the most favorable rates under various market conditions for lending, borrowing, or leveraging.



### **Types of Range Order**

There are three types of Range Orders:

* Borrowing Range Order: Configured by a range order setter using the Market's pre-defined collateral and debt tokens. The order setter must deposit collateral before the Open Time, allowing their placed orders to be matched by lenders at a fixed rate defined by the pricing curve. Curators creating vaults cannot create Borrowing Range Orders due to technical design constraints.&#x20;
* Lending Range Order: Configured by a range order setter or curator using deposited debt tokens. These orders are expected to be matched by borrowers/leveragers at a fixed rate on the pricing curve.



Two-Way Range Order: Configured by a range order setter or curator to facilitate both borrowing and lending. These orders are expected to be matched at a fixed rate on the pricing curve by lenders or borrowers/leveragers.



### **Range Order examples**

[**Borrowing Range Order**](../range-order-setter/borrowing-range-order-setter.md)

<figure><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXd2fTgxjWmAEdiFlLwGEjyHIMHePfRcF37-c4LGaDuAI0bs7f0EgYf0Hy6T0H9GoraEO6bZtjflaTkSb7z_cV3VMj9ZwY4kit-Ugy9wBXyOQlWm13ovHaQ8BIUTicaXTI5ZmOOLdA?key=flNhDWWrRjwKBSSLwQepkWF2" alt=""><figcaption><p>Borrowing Range Order</p></figcaption></figure>



The chart depicts a borrowing range order with a segmented interest rate range. This range order facilitates lending to the order setter who created the order. The order setter intends to borrow a total of 1.87M units of the debt tokens.

The interest rate structure is as follows:

* Segment 1: The first 1.5M units will be borrowed at a rate starting at 17% APR and decreasing to 15% APR as this portion of the order is filled.
* Segment 2: The next 0.2M units (from 1.5M to 1.7M) will be borrowed at a rate starting at 15% APR and decreasing towards 10% APR as this portion is filled.
* Segment 3: The final 0.17M units (from 1.7M to 1.87M) will be borrowed at a rate starting at 10% APR and decreasing towards approximately 7.5% APR as this final portion is filled.

This is a borrowing range order (from the order setter's perspective), users act as lenders.



[**Lending Range Order**](../range-order-setter/lending-range-order-setter.md)

<figure><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXexU9rGQ_cK6G6xojlT5yJmXi1vdUcJMPbtB0vFOt02AziRJV8pKLgWu5AbxC3Rnp1WPUo_tj4D9qWhpwHCiJi1ClV7Wj6W5P3QI7HRZr9Ye5V2lxsajzxZ1gEkwv2Umh6-_gFGqw?key=flNhDWWrRjwKBSSLwQepkWF2" alt=""><figcaption><p>Lending Range Order</p></figcaption></figure>



The chart depicts a lending range order. This means the range order setter is offering to lend a total of 2M units of the debt tokens (XT Reserve). Users can borrow from this range order.

The interest rate structure is as follows:

* Segment 1: The first 2M units (from 2.2M to 0.2M) will be lent at a rate increasing from 10% APR to approximately 15% APR as this portion of the order is filled by borrowers.
* Segment 2: The remaining 0.2M units (from last 0.2M to 0M) will be lent at a rate increasing from 15% APR to approximately 40% APR as this portion is filled.

This is a lending range order (from the order setter's perspective), users act as borrowers.



[**Two-way Range Order**](../range-order-setter/two-way-range-order-setter.md)

<figure><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXe5394QVNi_I0uZz9YWG3p7QB3jcOajc1D0z30grugldn-179hL_gnxU90pKiUoTsb5zmIbfAbYu_KD8ozps1-9z8ww_WplBUbiLpL669j5ABI9EEvQjs5vdgIaswhKdJ6naubIGw?key=flNhDWWrRjwKBSSLwQepkWF2" alt=""><figcaption><p>Two-way Range Order</p></figcaption></figure>



The chart depicts a two-way range order, allowing for both borrowing and lending within a single pool. This means the range order setter is facilitating both sides of the market. The chart shows the relationship between the APR offered/charged and the XT Reserve (representing the amount of the debt tokens).

Here's a breakdown of how the two curves function:

* Lending Pricing Curve (Upper Curve): This curve represents the APR the order setter charges borrowers. As the amount lent increases (XT Reserve decreases), the APR generally increases. This is a common strategy to discourage borrowers and incentivize lenders.
* Borrowing Pricing Curve (Lower Curve): This curve represents the APR the order setter pays to lenders. As the amount borrowed increases (XT Reserve increased) , the APR generally decreases. This is also common, as attracting more borrowers and discouraging lenders.



### **Range Order Parameters**

* Open Time: The time at which the range order becomes active for users.
* Initial Lend Amount: The initial maximum amount that can be lent in a Lending Range Order. The order setter must deposit this amount before Open Time to activate the range order and the order setter can subsequently add or withdraw funds with updated Range Order parameters.
* Initial  Borrow Amount: The initial maximum amount that can be borrowed in a Borrowing Range Order. The order setter must deposit the corresponding collateral amount (based on the MLTV) to activate the range order and the order setter can subsequently add or withdraw collateral with updated Range Order parameters.
* Curve Segments: Define the shape of the pricing curve. Each segment consists of:
  * APR Upper Bound: The maximum APR for that segment.
  * XT Lower Bound: The threshold amount of XT (X Token) for that segment. Debt tokens deposited into the range order are converted to XT (see the Token section for more details). Multiple segments combine to form the complete range order or pricing curve.

