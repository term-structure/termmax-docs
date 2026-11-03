# 交易费用说明

为了让用户更清晰了解在 Alpha Market 中交易 Long/Short 期权时所产生的费用与成本，我们将当前适用的费用规则整理如下。本说明涵盖交易手续费、期权利息成本及交易执行损耗。

### Alpha Market 期权交易费用与成本

#### 1. 期权开仓与平仓费用（即买/卖期权交易手续费）

| 交易操作               | 费用说明                  | 备注                           |
| ------------------ | --------------------- | ---------------------------- |
| Buy / Sell Options | Premium（Max Cost）的 7% | 包含 Long / Short 的开仓+平仓（未行权时） |

#### 2. 行权费用（即用户 Take Profit Fee）

当期权仓位处于盈利状态时（达到可行权区间），用户可以通过点击 “Take Profit” 平仓获得收益。

系统会根据当下的名义价值（Notional Value） 收取手续费。

* 初始费率：1.9%（在合约第 1 天）
* 随着合约接近到期，费率线性下降
* 费用 = 期权名义价值 × 当日费率
* 当日费率 = 1.9% ×（合约剩余天数 / 合约总天数）

**示例：**

假设你购入了一份为期 16 天的期权合约，你在第 10 天平仓，此时你的期权名义价值为 10,000 USDT，剩余天数为 4 天，则你需要支付的费用为：**`10,000 x 1.9% × 4/16 = 47.5 USDT`**<br>

#### 3. 期权利息成本

用户在买入期权时，需要支付基于期权名义价值的利息，计算方式为：\
\
&#x20;                   **利息 = 期权名义价值 x AMM 年化利率 x（实际持有天数 / 365）**

该利息由 Dual Investment 存款用户收取（相当于期权卖方，是为期权买方提供交易流动性的 LP）。平台可能会收取一定比例的利息抽成（目前为 10%）。

> **Note：**&#x867D;然公式中为方便理解以“天”为单位进行计算，但系统在链上是按秒(即按区块)级别进行实时计算和累积的。因此，系统会将 AMM 年化利率换算为秒级费率，并根据精准的持有秒数计算利息支出。

**示例如下：**

假设你以 100% 年化利率买入 1 个期权，该期权名义价值为 100 USDT，持有 1 天，买卖不存在交易执行损耗，则利息成本计算如下：**`100 × 100% x 1/365 ≈ 0.27 USDT`**

请注意：

* 年化利率会根据 AMM 定价动态调整
* 利息随持有时间线性增长

更多关于 Alpha Market 的详细说明可参考：\
[https://docs.ts.finance/termmax-doc-cn/xie-yi-ji-zhi/alpha-market](https://docs.ts.finance/termmax-doc-cn/xie-yi-ji-zhi/alpha-market)&#x20;

TermMax AMM 机制详情可参考：\
[https://docs.ts.finance/termmax-doc-cn/ce-le/jie-dai-ce-le](https://docs.ts.finance/termmax-doc-cn/ce-le/jie-dai-ce-le)&#x20;

### 交易执行损耗

这些损耗是客观存在的市场成本，其大小主要由市场波动性和资产流动性共同决定。

<table data-header-hidden><thead><tr><th></th><th width="412.5"></th><th></th></tr></thead><tbody><tr><td>损耗类型</td><td>描述</td><td>承担方</td></tr><tr><td>滑价（Slippage）</td><td>实际成交价格与预期价格的差异，可能正向或负向</td><td>交易者</td></tr><tr><td>买卖价差（Bid-Ask Spread）</td><td>买入价与卖出价之间的差额（在 Alpha Market 几乎不存在买卖价差，用户可忽略不计）</td><td>交易者</td></tr></tbody></table>

### 用户交易成本总览

用户在 Alpha Market 交易中可能承担以下成本：

1. 期权买卖手续费（活动期间为 0）
2. Take Profit 手续费
3. 期权利息成本
4. 交易执行损耗（滑价、价差）
