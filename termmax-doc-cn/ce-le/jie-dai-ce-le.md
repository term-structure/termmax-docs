# 💲 借贷策略

TermMax提供固定的借贷利率，这与其他通常提供浮动利率的DeFi协议不同。这一差异使用户能够使用多种策略，优化投资收益并管理风险





### DeFi中浮动借贷利率的不确定性

在没有TermMax的传统DeFi平台中，借贷通常采用随市场条件波动的浮动利率。这种波动性带来了较大的不确定性，用户难以准确预测收益或损失。借款人可能面临还款成本的意外增加，而放贷人可能因利率变化而面临收益减少。这种不稳定性给双方带来财务风险，削弱投资策略和整体财务规划的可靠性。

<figure><img src="../.gitbook/assets/image (9).png" alt=""><figcaption><p>Unpredictable Margin in Floating Borrowing/Lending Rates</p></figcaption></figure>

TermMax通过提供固定的借贷利率解决了上述问题。借款人可明确还款成本，贷款人可获得稳定可预测的回报。通过固定利率，TermMax消除了利率波动带来的财务风险，为借贷活动提供了更加安全可靠的环境。



### 策略一：在TermMax以固定利率借款，并在其他平台以浮动利率放贷

运作方式：

* 借款：
  * 平台：TermMax
  * 利率类型：固定利率（低利率）
* 放贷：
  * 平台：其他DeFi协议
  * 利率类型：浮动利率（高利率）

优势：

* 借款成本固定：费用可预测。
* 潜在高收益：能从其他平台较高的浮动放贷利率中获益。

<figure><img src="../.gitbook/assets/image (6).png" alt=""><figcaption><p>Possible Margin Zone under Fixed Borrowing Rate and Floating Lending Rate</p></figcaption></figure>





### 策略二：在其他平台以浮动利率借款，并在TermMax以固定利率放贷

运作方式：

* 借款：
  * 平台：其他DeFi协议
  * 利率类型：浮动利率（低利率）
* 放贷：
  * 平台：TermMax
  * 利率类型：固定利率（高利率）

优势：

* 放贷收益固定：收入稳定且可预测。
* 初始借款成本低：如果浮动利率保持较低水平，将更有利。

<figure><img src="../.gitbook/assets/image (7).png" alt=""><figcaption><p>Possible Margin Zone under Floating Borrowing Rate and Fixed Lending Rate</p></figcaption></figure>





### 策略三：在TermMax内部以固定利率借款并放贷

运作方式：

* 借款：
  * 平台：TermMax（市场A）
  * 利率类型：固定利率（低利率）
* 放贷：
  * 平台：TermMax（市场B）
  * 利率类型：固定利率（高利率）

优势：

* 利润空间可预测：成本和收益均为固定。
* 管理简单：所有操作均在TermMax内完成。

<figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption><p>Fixed Margin under TermMax's Fixed Borrowing Rate and Fixed Lending Rate</p></figcaption></figure>





### 策略概览

<table data-header-hidden><thead><tr><th width="140"></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td><strong>策略</strong></td><td><strong>借款平台</strong></td><td><strong>Borrowing Rate Type</strong></td><td><strong>Lending Platform</strong></td><td><strong>Lending Rate Type</strong></td><td><strong>Profit Stability</strong></td></tr><tr><td><strong>1. Borrow Fixed on TermMax, Lend Floating Elsewhere</strong></td><td>TermMax</td><td>Fixed (Low Rate)</td><td>Other Protocol</td><td>Floating (High Rate)</td><td>Stable Costs, Variable Income</td></tr><tr><td><strong>2. Borrow Floating Elsewhere, Lend Fixed on TermMax</strong></td><td>Other Protocol</td><td>Floating (Low Rate)</td><td>TermMax</td><td>Fixed (High Rate)</td><td>Variable Costs, Stable Income</td></tr><tr><td><strong>3. Borrow Fixed on TermMax, Lend Fixed on TermMax</strong></td><td>TermMax (Market A)</td><td>Fixed (Low Rate)</td><td>TermMax (Market B)</td><td>Fixed (High Rate)</td><td>Stable Costs and Income</td></tr></tbody></table>



### 重要注意事项

* **风险管理**：每种策略都有自身的风险，包括利率风险、流动性风险和平台风险。用户在实施策略前应仔细评估这些风险。
* **市场研究：**&#x5BC6;切关注TermMax和其他协议的利率变化，以发现最佳投资机会。
* **尽职调查**：在涉及外部协议时，应评估这些协议的安全性和可靠性。
