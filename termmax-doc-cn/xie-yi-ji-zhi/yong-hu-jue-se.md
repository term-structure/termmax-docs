# 🌟 用户角色

TermMax支持多种用户角色，使参与者能够根据自身需求定制在借贷市场中的策略。这些用户角色由两个关键维度定义：一是用户是否为**挂单方**或**吃单方**，二是用户作为**借方**或**贷方**参与市场。据此框架，共形成四种基础角色：

1. [**借款范围订单设定方**](https://app.gitbook.com/o/ISZNDORWOmik8eC2rxbB/s/hitOWhqdJgMD7O6CmpJu/~/changes/10/xie-yi-ji-zhi/fan-wei-ding-dan-she-ding-fang/jie-kuan-fan-wei-ding-dan-she-ding-fang)**：**&#x901A;过设置债务代币的范围订单定义其借款条件，由贷款吃单方匹配成交。
2. [**贷款范围订单设定方**](https://app.gitbook.com/o/ISZNDORWOmik8eC2rxbB/s/hitOWhqdJgMD7O6CmpJu/~/changes/10/xie-yi-ji-zhi/fan-wei-ding-dan-she-ding-fang/dai-kuan-fan-wei-ding-dan-she-ding-fang)**：**&#x901A;过设置债务代币的范围订单定义其贷款条件，由借款吃单方匹配成交。
3. [**双向范围订单设定方**](https://app.gitbook.com/o/ISZNDORWOmik8eC2rxbB/s/hitOWhqdJgMD7O6CmpJu/~/changes/10/xie-yi-ji-zhi/fan-wei-ding-dan-she-ding-fang/shuang-xiang-fan-wei-ding-dan-she-ding-fang)**：**&#x4EC5;需设定单一的区间订单，同时提供两个定价曲线（分别用于借入和贷出），使用户能同时参与市场的借贷两侧。
4. [**借款范围订单吃单方**](https://app.gitbook.com/o/ISZNDORWOmik8eC2rxbB/s/hitOWhqdJgMD7O6CmpJu/~/changes/10/xie-yi-ji-zhi/fan-wei-ding-dan-she-ding-fang/jie-kuan-fan-wei-ding-dan-she-ding-fang)**：**&#x901A;过锁定抵押资产至GT，发行FT，并出售FT换取债务代币，从而填充贷款方的范围订单。
5. [**贷款范围订单吃单方**](https://app.gitbook.com/o/ISZNDORWOmik8eC2rxbB/s/hitOWhqdJgMD7O6CmpJu/~/changes/10/xie-yi-ji-zhi/shi-chang-chi-dan-fang/fang-dai-fang)**：**&#x901A;过直接提供债务代币给借款做市商，从而填充借款方的区间订单。
6. [**杠杆交易者**](https://app.gitbook.com/o/ISZNDORWOmik8eC2rxbB/s/hitOWhqdJgMD7O6CmpJu/~/changes/10/xie-yi-ji-zhi/shi-chang-chi-dan-fang/gang-gan-jiao-yi-zhe)**：**&#x7279;殊类型的借款吃单方，通过单一原子交易使用债务代币创建杠杆化的抵押头寸，无需反复借贷循环，即可最大化资产敞口。
7. [**策展人**](https://app.gitbook.com/o/ISZNDORWOmik8eC2rxbB/s/hitOWhqdJgMD7O6CmpJu/~/changes/10/xie-yi-ji-zhi/ce-zhan-ren)**：**&#x7B56;展人通过在多个市场中战略性地设置借贷和双向区间订单来管理金库，负责处理来自流动性提供者的存入资产，并按比例将利润分配给金库份额持有者。策展人负责确定最优的资本配置方案、配置定价曲线并持续监控金库表现，同时通过业绩费用获得收益。他们的操作需遵循协议设定的规则与时间锁保护机制。
8. [**存款人**](https://app.gitbook.com/o/ISZNDORWOmik8eC2rxbB/s/hitOWhqdJgMD7O6CmpJu/~/changes/10/xie-yi-ji-zhi/cun-kuan-ren)**：**&#x5B58;款人向由专业策展人管理的金库提供资金，以获取无需主动管理仓位的被动收益。存款人会获得代表其按比例所有权和应得收益的金库份额，并可随时灵活提取资金。他们可受益于策展人的市场专业能力，同时也需承担相应的策略表现与市场风险。

通过上述八种用户角色，TermMax赋能用户以更加灵活和创新的方式参与借贷市场，同时实现固定利率的可预测性以及高效的资本优化策略。
