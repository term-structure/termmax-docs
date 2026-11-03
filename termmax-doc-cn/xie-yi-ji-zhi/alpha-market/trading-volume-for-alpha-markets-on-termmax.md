# Trading Volume for Alpha Markets on TermMax

## 计算逻辑&#x20;

在实际操作中，Trading Volume 从链上交易事件中提取，具体是 **`SwapTokenToExactToken`** 事件。具体计算公式如下：

* Trading Volume = `tradingAmts` - `actualTokenIn/Out`
* Trading Value = `Trading Volume` \* `SNAPSHOT_PRICE`（对应资产的快照价格）

## 相关术语

* tradingAmts：该笔交易涉及的资产总数量。
* actualTokenIn/Out：用户实际支付或收到的资产净额（即为交易费用或权利金）。
* Trading Volume：该笔交易中实际完成资产转换（Swap）的净额。
* SNAPSHOT\_PRICE：交易执行时，对应资产的美元市场价格。

> 对于多单 (Long)：指标的资产（如 ESPORTS）的价格。\
> 对于空单 (Short)：指 USDT 的价格。

## 示例说明

#### BUY LONG

Market: ESPORTS/USDT@14JAN2026-0.5C

Tx: [https://bscscan.com/tx/0xa9571899297e084397a8f68ddb58095bb25f3494c235a0d798125c6110926e01](https://bscscan.com/tx/0xa9571899297e084397a8f68ddb58095bb25f3494c235a0d798125c6110926e01)

Event: SwapTokenToExactToken

* caller : 0xF1b319ebbc2C234F0b2DDd862308ED4c50d22311
* recipient : 0xF1b319ebbc2C234F0b2DDd862308ED4c50d22311
* orders :0x80A884A7E002613214801698713Ea91Bfd63fFe4
* tradingAmts : 520.000000000000000000
* actualTokenIn : 23.103672587352781553

trading volume: 520.000000000000000000 - 23.103672587352781553 = 496.896327412647218447 (ESPORTS)

trading value: 496.896327412647218447 \* ESPORTS\_SNAPSHOT\_PRICE

#### CLOSE LONG POSITION

Market: ESPORTS/USDT@14JAN2026-0.5C

Tx: [https://bscscan.com/tx/0xb8c96f0cacaf8b1acb36d0fa2c8de4afa550a4c617d17d90a8883d07803d6278](https://bscscan.com/tx/0xb8c96f0cacaf8b1acb36d0fa2c8de4afa550a4c617d17d90a8883d07803d6278)

Event: SwapExactTokenToToken

* caller: 0x46358eAE5F8aB316C7a6E419cDE4d4BaE582b2eB
* recipient: 0x46358eAE5F8aB316C7a6E419cDE4d4BaE582b2eB
* orders: 0x80A884A7E002613214801698713Ea91Bfd63fFe4
* tradingAmts: 510.000000000000000000
* actualTokenOut: 19.728902493279607424

trading volume: 510.000000000000000000 - 19.728902493279607424 = 490.271097506720392576 (ESPORTS)

trading value: 490.271097506720392576 \* ESPORTS\_SNAPSHOT\_PRICE

#### BUY SHORT

Market: GAIX/USDT@14JAN2026-0.05P

Tx: [https://bscscan.com/tx/0x887e8d4603fbc411af109de6d3cc5a4607eccb598eecfc0b850a6bb453905316](https://bscscan.com/tx/0x887e8d4603fbc411af109de6d3cc5a4607eccb598eecfc0b850a6bb453905316)

Event: SwapTokenToExactToken

* caller : 0xF1b319ebbc2C234F0b2DDd862308ED4c50d22311
* recipient : 0xF1b319ebbc2C234F0b2DDd862308ED4c50d22311
* orders : 0xA7f8e641D4aF747a4Ae1a73F159365Cac5eb9D11
* tradingAmts : 200.000004000000000000
* actualTokenIn : 10.248935735810809929

trading volume: 200.000004000000000000 - 10.248935735810809929 = 189.751068264189190071 (USDT)

trading value: 189.751068264189190071 \* USDT\_SNAPSHOT\_PRICE

#### CLOSE SHOT POSITION

Market: GAIX/USDT@14JAN2026-0.05P

Tx: [https://bscscan.com/tx/0x261cab71a68cc7db3228d367c3707229d7697524418848ea4bfc0bda6d562d3f](https://bscscan.com/tx/0x261cab71a68cc7db3228d367c3707229d7697524418848ea4bfc0bda6d562d3f)

Event: SwapExactTokenToToken

* caller : 0xF1b319ebbc2C234F0b2DDd862308ED4c50d22311
* recipient : 0xF1b319ebbc2C234F0b2DDd862308ED4c50d22311
* orders : 0xA7f8e641D4aF747a4Ae1a73F159365Cac5eb9D11
* tradingAmts : 150.000003000000000000
* actualTokenOut : 6.753557347820835244

trading volume: 150.000003000000000000 - 6.753557347820835244 = 143.246445652179164756 (USDT)

trading value: 143.246445652179164756 \* USDT\_SNAPSHOT\_PRICE
