# Dual Investment 资产赎回

## 提前赎回资产

**为什么在 Dual Investment 到期前用户可能无法提前赎回资产？**

Dual Investment 跟普通活期存款不同，它本质上是一种 _**“卖出期权、赚取权利金”**_ 的结构化产品，因此存入资产会被用来支撑期权仓位，而不是闲置在账户里。

**`核心机制：`**`资产是否可提前赎回，取决于是否已被匹配给期权买家，即资产是否被“借走”。`

期权买家（Long/Short 用户）＝ 借钱的人（Borrower)

期权卖家（Dual Investment 用户）＝ 提供资金＆担保的人(Lender)

**当你把 USDT 或 Token 存入 Dual Investment 时，你则成为期权的卖方。**&#x4F60;的高 APY 来自期权买家支付的权利金。

\
那么在到期前 Dual Investment 的 Vault 资产可能存在以下几种情况：

1. **Vault 内全部的资产尚未被期权买家“借走”**\
   \
   此时资产仍在 Vault 中，尚未被期权买家使用。你可以提前赎回全部资产，因为你还没有承担任何期权合约责任。



2. **Vault 内全部的资产都被期权买家“借走”**\
   \
   如果 Vault 内全部的资产都被期权买家利用，用户在合约到期前则无法提前赎回资产，需要等待到期日，或有更多人存入资产。



3. **Vault 内只有部分资产被期权买家“借走”，此时有两种情况，示例如下**\
   \
   **情况 1：** 用户提领金额  >  Vault 内可提取资产价值\
   → 用户只能赎回部分资产，即 Vault 内剩余可用的部分，剩下的资产提领需等到期日或等有更多用户存入资金。\
   \
   **案例：**&#x5047;设你最初存入了 1000 USDT 到某一个 Dual Investment Vault 中，在存入三天后你想提前赎回资产，但此时该 Vault 中剩余闲置资金仅为 500 USDT，你只能先提领这 500 USDT 资金，剩余资金的提领需要等更多用户存款进该 Vault，或者等到期后领回。\
   \
   **情况 2：**&#x7528;户提领金额 ≤ Vault 内可提取资产价值\
   → 用户可以全部提领存入的资金。\
   \
   **案例：**&#x5047;设你存入了 300 USDT 到某一个 Dual Investment Vault 中，在存入三天后你想提前赎回资金，此时该 Vault 中的剩余闲置资金为 500 USDT，你能提领你的全部资金。

`需注意：`

1. `资产类型： 用户在到期前选择提前赎回资产，只能申请赎回原始存入的资产类型（即存U赎U，存币赎币）`
2. `价值变化：提前赎回资产时，您的赎回金额是根据期权合约在当时的市场公允价值计算。因此，最终赎回的资产总价值可能高于或低于您的初始存入本金。`



## 到期后的资产结算与赎回（两种主要情况）

到期后，系统将自动进行行权结算，决定 Vault 资产池的最终构成。

**1. 情况一：Vault 内只有一种资产**

<table data-header-hidden><thead><tr><th></th><th width="118"></th><th></th><th></th></tr></thead><tbody><tr><td><strong>场景分类</strong></td><td><strong>存入资产</strong></td><td><strong>市场结果 / 结算动作</strong></td><td><strong>最终赎回资产</strong> </td></tr><tr><td><strong>I. 未行权</strong><br><strong>(Non-Conversion)</strong></td><td>Token</td><td>保留原始 Token。</td><td>Token + 权利金收益（以 Token 结算）</td></tr><tr><td><strong>I. 未行权</strong><br><strong>(Non-Conversion)</strong></td><td>USDT</td><td>保留原始 USDT。</td><td>USDT + 权利金收益（以 USDT 结算）</td></tr><tr><td><strong>II. 完全行权</strong><br><strong>(Full Conversion)</strong></td><td>Token</td><td>Token 按照行权价转换为USDT。（相当于您以行权价卖出了代币）</td><td>USDT + 权利金收益（以 USDT 结算）</td></tr><tr><td><strong>II. 完全行权</strong><br><strong>(Full Conversion)</strong></td><td>USDT</td><td>USDT 按照行权价转换为对应数量的 Token。（相当于您以行权价买入了代币）</td><td>Token + 权利金收益（以 Token 结算）</td></tr></tbody></table>



**2. 情况二：Vault 内有两种资产**

当触发部分行权或穿价保护时，Vault 中可能会同时存在两种资产：

* 未被行权的原始资产
* 已被行权、转换后的资产

\
此时，用户可以选择赎回资产为 USDT 或代币。**但需注意**，实际可赎回的资产类型仍取决于 Vault 中对应资产的剩余流动性——例如，如果 Vault 中的 USDT 已被其他用户提前提领完，您将只能赎回剩余的已转换代币，而这些代币可能带有浮动亏损风险。

因此，在部分行权情境下，用户最终赎回的资产可能是 USDT、代币，或两者的混合形式，取决于 Vault 的实时资产构成与流动性情况。

