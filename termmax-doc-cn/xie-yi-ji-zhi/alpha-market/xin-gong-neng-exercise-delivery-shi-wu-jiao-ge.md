# 新功能：Exercise - Delivery 实物交割

TermMax Alpha 升级了 Take Profit 选项，为用户提供更多灵活性和更优的执行方式。

## 功能更新

此前，Take Profit 只有一种方式。现在用户有两种选择：

* Exercise - Net Settle（原“Take Profit”功能）
* Exercise - Delivery（新增功能）

<figure><img src="../../.gitbook/assets/unknown (25).png" alt=""><figcaption></figcaption></figure>

### 1. Exercise - Net Settle（现金/代币结算）

* 系统自动计算利润，用户手动执行获取，结算资产可选择 USDT 或标的代币
* 可选择部分结算或全部结算：
  * 部分结算：仅结算仓位的一部分，剩余仓位继续保留
  * 全部结算：结算全部仓位，仓位关闭
* 操作便捷，适合链上流动性充足时使用

<figure><img src="../../.gitbook/assets/unknown (26).png" alt=""><figcaption></figcaption></figure>

### 2. Exercise - Delivery（实物交割）

当 DEX 流动性不足时，使用 Net Settle 可能产生滑点或受到 MEV 攻击，尤其是大仓位时，利润可能低于 Delivery。此时，用户可以选择 Delivery。<br>

* **多头仓位（Long）：**&#x7528;户使用 USDT 以行权价买入标的资产。
  * 用户可在流动性更好的市场（如中心化交易所），以更优价格出售标的资产。
  * 收益 = 标的资产在其它市场卖出所得 − 行权价格支付的 USDT<br>
* **空头仓位（Short）：**&#x7528;户以行权价卖出标的资产。
  * 用户在流动性更好的市场（如中心化交易所），以更优价格购入标的资产。
  * 收益 = 标的资产以行权价卖出所得 − 在其他市场购入标的资产的成本<br>
* **可选择部分交割或全部交割：**
  * 部分交割：仅对仓位的一部分进行行权并交割，剩余仓位继续保留
  * 全部交割：对整个仓位进行行权并交割，仓位关闭

<figure><img src="../../.gitbook/assets/unknown (27).png" alt=""><figcaption></figcaption></figure>

### 3. 总结

当 DEX 流动性不足时，使用 Net Settle 可能产生滑点或受到 MEV 攻击，尤其是大仓位时，利润可能低于 Delivery。在这种情况下，你可以选择 Delivery。

当链上流动性充足时，Net Settle 和 Delivery 的结果通常相差不大。此时，用户可以根据个人偏好、便利性或策略自由选择。

**注：**\
无论采用 Net Settle 还是 Delivery 方式，在执行后用户都会先获得已实现的收益，同时会生成一个 GT 仓位。该仓位不会影响用户已获得的收益，也无需进行任何操作。用户可以选择忽略该仓位；在某些情况下，也可以根据市场情况选择管理该仓位，以获取额外收益机会。
