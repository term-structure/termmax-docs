# Ondo Tokenized Stock

For Ondo tokenized assets (e.g., AAPLon), the oracle price is derived by combining two components. The first is the underlying asset’s price — sourced from Chainlink’s Tokenized Equity Feed, which tracks the real-world stock price (e.g., AAPL). The second is the Synthetic Shares multiplier (sValue) — fetched from Ondo’s `SyntheticSharesOracle` contract on BSC and Ethereum, which reflects accumulated adjustments such as dividend reinvestments or stock splits. The final oracle price is simply the product of these two: `Oracle Price = Chainlink Underlying Price × sValue`. This ensures that the on-chain price of each Ondo token accurately reflects both the current market price of the underlying stock and any share-equivalent adjustments that have accrued over time.

**SyntheticSharesOracle**

* Ethereum: [0x9BC39DB6fbB44B91a48b8D5A6C208B82B1741bE6](https://etherscan.io/address/0x9BC39DB6fbB44B91a48b8D5A6C208B82B1741bE6#readContract)
* BNB: [0xF4Fd8a1B412633e10527454137A29Db7Aa35F15e](https://bscscan.com/address/0xF4Fd8a1B412633e10527454137A29Db7Aa35F15e)

**Chainlink Oracles**: [https://data.chain.link/feeds?categories=Equity](https://data.chain.link/feeds?categories=Equity)

