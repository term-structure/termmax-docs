# 清算与实物交割机制

在 TermMax 中，清算机制旨在通过维持贷款所需的贷款价值比（LTV），保障协议稳定性，并激励清算人积极参与，从而共同维护协议安全。TermMax 采用结构化公式计算需清算的抵押品数量，既保证清算人的合理收益，也尽量减少借款人的处罚。

## 清算触发条件

#### 触发 LLTV 门槛：

当贷款的 LTV 因抵押品价值下降或债务代币价值上升而达到或超过 LLTV（清算 LTV） 阈值时，清算将被触发。

#### 未按期还款：

若借款人未能在固定到期日前还款，该笔贷款将被标记为“可清算”，并进入一个 为期两小时 的开放清算窗口。

## 清算激励

清算人将获得借款人抵押品中按清算债务金额 5% 的奖励，以激励及时清算并增强协议稳定性。

## 借款人处罚

10% 协议处罚：借款人将就被清算的债务金额承担 10% 的处罚，其中5% 用作清算人奖励，5% 计入协议储备金。

## 清算机制

#### **部分清算：**

若贷款未偿还债务金额超过 10,000 美元，清算人每次只能清算最多 50% 的债务金额。此机制旨在减少借款人的总损失，同时降低不健康贷款的 LTV。

#### **全额清算：**

当贷款被\*\*完全清算（即债务归零）\*\*时，剩余的抵押品将自动返还给借款人。

#### **基于清算债务金额的 10% 罚金机制：**

当清算被触发时，系统将向借款人收取相当于清算债务金额 10% 的罚金，该罚金将如下分配：

• 5%：奖励清算人

• 5%：计入协议金库（用于增强协议流动性与安全性）

#### 清算抵押品的计算与分配：

TermMax 采用一套公式来确定需要清算的总抵押品数量。该公式确保抵押品优先用于支付清算奖励，剩余部分用于协议罚金，所需清算量不超过借款人当前仓位上限。该公式即：

$$
\begin{align*}
清算抵押品数量 = & \
& \min(\text{清算人清算的抵押品数量} + \text{协议清算的抵押品数量}, \
& \text{最大可清算抵押品数量})
\end{align*}
$$

其中

* $$liquidatedCollateralAmt_{liquidator}$$: 优先分配给清算人的那部分抵押品，包括被清算的债务金额和奖励。

$$
liquidatedCollateralAmt_{liquidator}= \frac{liquidatedDebtAmt \times debtTokenPrice \times (1+liquidationReward)}{collateralTokenPrice}
$$

* $$liquidatedCollateralAmt_{protocol}$$:分配给协议作为惩罚的那部分抵押品，仅在 $$liquidatedCollateralAmt_{liquidator}$$被覆盖后才会执行。

$$
liquidatedCollateralAmt_{protocol}=\frac{liquidatedDebtAmt \times debtTokenPrice \times protocolPenalty}{collateralTokenPrice}
$$

* $$maxLiquidatedCollateralAmt$$: 根据借款人整体头寸计算的最大允许抵押品数量。该系数确保在清算后，贷款的贷款价值比（LTV）始终变得更健康（更小）。

$$
maxLiquidatedCollateralAmt=\frac{totalCollateralAmt \times liquidatedDebtAmt}{totalDebtAmt}
$$

## 实物交割机制

根据上述清算机制，若某笔贷款在清算窗口结束后仍未还清或仅被部分清算，系统将自动启动实物交割流程。在该流程中，赎回池将由基础资产代币与抵押资产代币共同组成。当 FT 持有者通过赎回池赎回其 FT 时，将按照其持有的 FT 占市场未偿还总额的比例，按比例获得基础资产和抵押资产的分配。

