# Oracles

RedStone Oracles

[RedStone](https://www.redstone.finance/) is a Modular Oracle that delivers frequently updated, reliable, and diverse data feeds, including yield-bearing assets like LSTs, LRTs, Bitcoin LSTs and yield-accruing stablecoins.

Termmax integrated RedStone price feeds as our primary source of data for assets, we leverage RedStone oracles for main pools including USDC, wstETH & WETH.

<br>

## Ethereum

<table><thead><tr><th width="118.01953125">Asset</th><th width="399.34765625">Oracle Address</th><th width="393.30859375">Backup Oracle Address</th><th width="130.0390625" data-type="number">Heartbeat (s)</th><th>Note</th></tr></thead><tbody><tr><td>USDC</td><td><pre class="language-solidity" data-title="Redstone USDC/USD" data-full-width="true"><code class="lang-solidity">0xeeF31c7d9F2E82e8A497b140cc60cc082Be4b94e
</code></pre></td><td><pre class="language-solidity" data-title="Chainlink USDC/USD"><code class="lang-solidity">0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6
</code></pre></td><td>86400</td><td></td></tr><tr><td>sUSDe</td><td><pre class="language-solidity" data-title="Redstone sUSDe/USD" data-full-width="false"><code class="lang-solidity">0xb99D174ED06c83588Af997c8859F93E83dD4733f
</code></pre></td><td><pre class="language-solidity" data-title="Chainlink sUSDe/USD"><code class="lang-solidity">0xFF3BC18cCBd5999CE63E788A1c250a88626aD099
</code></pre></td><td>86400</td><td></td></tr><tr><td>WETH</td><td><pre class="language-solidity" data-title="Chinalink ETH/USD"><code class="lang-solidity">0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419
</code></pre></td><td><pre class="language-solidity" data-title="Redstone ETH/USD"><code class="lang-solidity">0x67F6838e58859d612E4ddF04dA396d6DABB66Dc4
</code></pre></td><td>86400</td><td></td></tr><tr><td>pufETH</td><td><pre class="language-solidity" data-title="Chainlink pufETH/ETH + chainlink ETH/USD"><code class="lang-solidity">0xB3ae8A16CF827d193Ae51a92fd2630e6839F5761
</code></pre></td><td><pre class="language-solidity" data-title="Redstone pufETH/ETH + redstone ETH/USD"><code class="lang-solidity">0x5F08C227deAe74D8e5Ec0d743FB0744AB1B6c984
</code></pre></td><td>86400</td><td></td></tr><tr><td>wstETH</td><td><pre class="language-solidity" data-title="Redstone wstETH/USD"><code class="lang-solidity">0xe4aE88743c3834d0c492eAbC47384c84BcADC6a6
</code></pre></td><td><pre class="language-solidity" data-title=""><code class="lang-solidity">
</code></pre></td><td>86400</td><td></td></tr><tr><td>PT-sUSDE-29MAY2025</td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + chinlink sUSDe/USD"><code class="lang-solidity">0x8f29Df42c617C222Bc2B416AC8a022E85e853276
</code></pre></td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + redstone sUSDe/USD"><code class="lang-solidity">0x333651c5710Fc8C4fe65E5D15E5639348F267D7c
</code></pre></td><td>86400</td><td></td></tr><tr><td>USUALUSDC+</td><td><pre class="language-solidity" data-title="ERC4626 convertToAssets + chinlink USDC/USD"><code class="lang-solidity">0xF8f79b5b527e2cb3900956eB0D17A4D4aA6ae220
</code></pre></td><td></td><td>86400</td><td></td></tr><tr><td>MCwETH</td><td><pre class="language-solidity" data-title="ERC4626 convertToAssets + chinlink ETH/USD"><code class="lang-solidity">0xF1D1c1e387820c2eFDB9B863960FaA5d035C2006
</code></pre></td><td><pre class="language-solidity" data-title="ERC4626 convertToAssets + redstone ETH/USD"><code class="lang-solidity">0x3b82860EC8815Fc2A1dcC53580bd647b0042C93e
</code></pre></td><td>86400</td><td></td></tr><tr><td>PT-pufETH-26JUN2025</td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + chainlink pufETH/ETH + chainlink ETH/USD"><code class="lang-solidity">0x5a27314e6D35B6fFCBaE6B3eb030e7Faf7EF34F1
</code></pre></td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + redstone pufETH/ETH + redstone ETH/USD"><code class="lang-solidity">0x5D18F4cB3c95568F315cb1C1eF48261a5A4D6053
</code></pre></td><td>86400</td><td></td></tr><tr><td>eUSDe</td><td><pre class="language-solidity" data-title="ERC4626 convertToAssets + chainlink USDe/USD"><code class="lang-solidity">0xB6549635409Ae9c0eeBB71B3F904cB004F2D97D3
</code></pre></td><td><pre class="language-solidity" data-title="ERC4626 convertToAssets + redstone USDe/USD"><code class="lang-solidity">0x6B09d473dB784D840E307Cb3Da63CbA79D300CAc
</code></pre></td><td>86400</td><td></td></tr><tr><td>WBTC</td><td><pre class="language-solidity" data-title="Chainlink BTC/USD"><code class="lang-solidity">0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c
</code></pre></td><td><pre class="language-solidity" data-title="Redstone BTC/USD"><code class="lang-solidity">0xAB7f623fb2F6fea6601D4350FA0E2290663C28Fc
</code></pre></td><td>86400</td><td></td></tr><tr><td>cbBTC</td><td><pre class="language-solidity" data-title="Chainlink cbBTC/USD"><code class="lang-solidity">0x2665701293fCbEB223D11A08D826563EDcCE423A
</code></pre></td><td></td><td>86400</td><td></td></tr><tr><td>gtWETH</td><td><pre class="language-solidity" data-title="ERC4626 convertToAssets + chainlink WETH/USD"><code class="lang-solidity">0xdc0115fe09600FeDa15D317cCa3D2f21F389036d
</code></pre></td><td><pre class="language-solidity" data-title="ERC4626 convertToAssets + redstone ETH/USD"><code class="lang-solidity">0x3A44454F173b082F1dbbA9587b046Dc90B2F0AE7
</code></pre></td><td>86400</td><td></td></tr><tr><td>lvlUSD</td><td><pre class="language-solidity" data-title="Chainlink USDC/USD"><code class="lang-solidity">0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6
</code></pre></td><td></td><td>86400</td><td></td></tr><tr><td>slvlUSD</td><td><pre class="language-solidity" data-title="ERC4626 convertToAssets + chainlink USDC/USD"><code class="lang-solidity">0x3Bc7dD457901A41509fc0Bd47Dc3Da42D45Ce030
</code></pre></td><td></td><td>86400</td><td></td></tr><tr><td>PT-lvlUSD-29MAY2025</td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + chainlink USDC/USD"><code class="lang-solidity">0x57eAfDF2c9B47425042Be735ff47dea7Ef965726
</code></pre></td><td></td><td>86400</td><td></td></tr><tr><td>GTUSDCF</td><td><pre class="language-solidity" data-title="ERC4626 convertToAssets + chainlink USDC/USD"><code class="lang-solidity">0x81195F8A79f6553A4078f89eF87b21a7d3C2855A
</code></pre></td><td></td><td>86400</td><td></td></tr><tr><td>MC_USDCP</td><td><pre class="language-solidity" data-title="ERC4626 convertToAssets + chainlink USDC/USD"><code class="lang-solidity">0x4cF5F12c6c0D48F0d335DdB25e11cd526EAfD322
</code></pre></td><td></td><td>86400</td><td></td></tr><tr><td>mhyETH</td><td><pre class="language-solidity" data-title="ERC4626 convertToAssets + chainlink ETH/USD"><code class="lang-solidity">0x0221cd3fA8B1Bea16293fb0cD6B60977d531c931
</code></pre></td><td><pre class="language-solidity" data-title="ERC4626 convertToAssets + redstone ETH/USD"><code class="lang-solidity">0x00B96F0eBf39158cb4E3F801073966bD6Db7959C
</code></pre></td><td>86400</td><td></td></tr><tr><td>inwstETHs</td><td><pre class="language-solidity" data-title="RedStone wstETH/USD"><code class="lang-solidity">0xe4aE88743c3834d0c492eAbC47384c84BcADC6a6
</code></pre></td><td></td><td>86400</td><td></td></tr><tr><td>PT-sUSDe-31JUL2025</td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + chinlink sUSDe/USD"><code class="lang-solidity">0x53399c17DbB2Ba67BB3B6E5bf692251267A3F861
</code></pre></td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + redstone sUSDe/USD"><code class="lang-solidity">0x53399c17DbB2Ba67BB3B6E5bf692251267A3F861
</code></pre></td><td>86400</td><td></td></tr><tr><td>PT-lvlUSD-25SEP2025</td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + chainlink USDC/USD"><code class="lang-solidity">0x32401387EDCB60CD74E2FCae50B3C542E03B1ec5
</code></pre></td><td></td><td>86400</td><td></td></tr><tr><td>cUSDO</td><td><pre class="language-solidity" data-title="ERC4626 convertToAssets + chainlink USDC/USD"><code class="lang-solidity">0xf158000de86899b5EB5E6fA3BB78F32A072bD14b
</code></pre></td><td></td><td>86400</td><td></td></tr><tr><td>PT-cUSDO-19JUN2025</td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + cUSDO price feed"><code class="lang-solidity">0x1B4A4208d6AfD76332206F2Aefd977aeEf108575
</code></pre></td><td></td><td>86400</td><td></td></tr><tr><td>wstUSR</td><td><pre class="language-solidity" data-title="ERC4626 convertToAssets + chainlink USR/USD"><code class="lang-solidity">0xD14a49eDF484ce994C3dD61c4eF36CC33C96179A
</code></pre></td><td><pre class="language-solidity" data-title="ERC4626 convertToAssets + Redstone USR/USD"><code class="lang-solidity">0xc7c005753d649a432EbC858f82B7bDd4338Fa333
</code></pre></td><td>86400</td><td></td></tr><tr><td>PT-wstUSR-25SEP2025</td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + wstUSR Chainlink price feed"><code class="lang-solidity">0xB94D176656220Ee22CAEA8e5827BE5854cB42035
</code></pre></td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + wstUSR Redstone price feed"><code class="lang-solidity">0xBA06F387B245aE60289f16FE208867C1eE38934D
</code></pre></td><td>86400</td><td></td></tr><tr><td>PT-sUSDE-31JUL2025</td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + Chainlink sUSDe/USD"><code class="lang-solidity">0x53399c17DbB2Ba67BB3B6E5bf692251267A3F861
</code></pre></td><td></td><td>86400</td><td></td></tr><tr><td>PT-lvlUSD-25SEP2025</td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + Chainlink USDC/USD"><code class="lang-solidity">0x32401387EDCB60CD74E2FCae50B3C542E03B1ec5
</code></pre></td><td></td><td>86400</td><td></td></tr><tr><td>PT-mMEV-31JUL2025</td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + mMEV price feed"><code class="lang-solidity">0x0A48b114758a47F8df113adeab5e43b2129fa3b8
</code></pre></td><td></td><td>432000</td><td></td></tr><tr><td>mMEV</td><td><pre class="language-solidity" data-title="mMEV price feed"><code class="lang-solidity">0x5f09Aff8B9b1f488B7d1bbaD4D89648579e55d61
</code></pre></td><td></td><td>86400</td><td></td></tr><tr><td>PT-slvlUSD-25SEP2025</td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + ERC4626 convertToAssets"><code class="lang-solidity">0x5042768E83E2b5F9A7251A41C4E66855DD65fe31
</code></pre></td><td></td><td>86400</td><td></td></tr><tr><td>XAUm</td><td><pre class="language-solidity" data-title="Chainlink XAU / USD"><code class="lang-solidity">0x214eD9Da11D2fbe465a6fc601a91E62EbEc1a0D6
</code></pre></td><td></td><td>86400</td><td></td></tr><tr><td>PT-eUSDE-14AUG2025</td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + eUSDE primary price feed"><code class="lang-solidity">0x1db66D3BAc8d405643716BF6605D1a045a4AC56C
</code></pre></td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + eUSDE secondary price feed"><code class="lang-solidity">0x00d14fD4D4525bBe8D6C7d67535df0FAf348f405
</code></pre></td><td>86400</td><td></td></tr><tr><td>LBTC</td><td><pre class="language-solidity" data-title="Chainlink LBTC/BTC + BTC/USD"><code class="lang-solidity">0x68D619f8a4E21c4CC0EAb3c4572ec0c9FeD78D3C
</code></pre></td><td><pre class="language-solidity" data-title="RedStone LBTC/BTC + BTC/USD"><code class="lang-solidity">0xf338eA0349a717F665842752FabA755B741ee9CA
</code></pre></td><td>86400</td><td></td></tr><tr><td>PT-LBTC-26JUN2025</td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + LBTC primary price feed"><code class="lang-solidity">0x592a2ef26E70663359514da51F9E2DA62Cfa65e9
</code></pre></td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + LBTC secondary price feed"><code class="lang-solidity">0xEf3E4F385BeB78be528b67560e9E72f96B2Eee99
</code></pre></td><td>86400</td><td></td></tr><tr><td>ynEthx</td><td><pre class="language-solidity" data-title="ERC4626 convertToAssets + Chainlink ETH/USD"><code class="lang-solidity">0x5FDaa369D623d86191105435c7DA03F25417753a
</code></pre></td><td><pre class="language-solidity" data-title="ERC4626 convertToAssets + RedStone ETH/USD"><code class="lang-solidity">0x2D9f82CcF2068686B46218B7A5Ad47177aF2ef7a
</code></pre></td><td>86400</td><td></td></tr><tr><td>PT-USDS-14AUG2025</td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + Chainlink USDS/USD"><code class="lang-solidity">0x4599f532E03458017Fa55F7DCF7A296267637B74
</code></pre></td><td></td><td>86400</td><td></td></tr></tbody></table>



**MC\_PTs**\
Token Address: `0xd41830d88dfD08678b0B886E0122193d54b02Acc`\
Price Feed: `0xe594f0E0013d304c63012F3C14fCf523Fd98613D`\
Backup Price Feed:  None\
Heartbeat: 86400



**ETH+**\
Token Address: `0xE72B141DF173b999AE7c1aDcbF60Cc9833Ce56a8`\
Price Feed: `0x1d309F2E29b0b30dbB536a8100fCCCe3bd90F776`\
Backup Price Feed:  `0xA9A785BE67e831fF0c9e589c2798833a282374Fa`\
Heartbeat: 86400



**xUSD**\
Token Address: `0xE2Fc85BfB48C4cF147921fBE110cf92Ef9f26F94`\
Price Feed: `0x91F37A3058A7fD3f4f66ED87d715CF05bB4fbfBd`\
Heartbeat: 86400



**PT-cUSDO-20NOV2025**\
Token address: `0xb10da2f9147f9cf2b8826877cd0c95c18a0f42dc`\
Price Feed: `0x1039F090392798Be2FeA222D6468676cB2F07699`\
heartbeat: 86400



**yUSD (YieldFi yUSD)**\
Token address: `0x19Ebd191f7A24ECE672ba13A302212b5eF7F35cb`\
Price Feed: `0x2da05F177485264D432878D4A17d722bc64Db0EF`\
heartbeat: 86400



**SPK**\
Oracle Provider: Chronicle\
Token Address: `0xc20059e0317DE91738d13af027DfC4a50781b066`\
Price Feed: `0x552116E747a5b386B2E7EEd4371002359cf2A574`\
heartbeat: 43200



**rUSD**\
Token Address: `0x09D4214C03D01F49544C0448DBE3A27f768F2b34`\
Price Feed: `0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6`\
heartbeat: 86400



**srUSD**\
Token Address: `0x738d1115B90efa71AE468F1287fc864775e23a31`\
Price Feed: `0x277F78F39b9Dc73dF3723BAcD40f8658f8a1A633`\
heartbeat: 86400



**wsrUSD**\
Token Address: `0xd3fd63209fa2d55b07a0f6db36c2f43900be3094`\
Price Feed: `0x0b4Cb11faC24707F3F0F89E441A4Cdf6EF01d215`\
heartbeat: 86400



**ysUSDC**\
Token Address: `0xF7DE3c70F2db39a188A81052d2f3C8e3e217822a`\
Price Feed: `0x3E8FdD705a6FF3a53FbC81A5FAFAc80Cb274b908`\
heartbeat: 86400



**PT-pufETH-25JUN2026**\
Token Address: `0x84013D1a574515b6a05a0e2392584d445D39D1DF`\
Primary Price Feed: `0xE764558e50B7d13e9ab5Ed5D4e7e7fAbb2A8f7AB`\
Backup Feed: `0x138A15fdA9408B39AfE586EAEaD30c4f9E2E42ff`\
heartbeat: 86400



**PT-RUSD-31JUL2025**\
Token Address: `0xf736acf34ff7cd9b3565b73a1f15e652859bf322`\
Primary Price Feed: `0xF1038ce76CA2D77ffF3929B0f73Bb537d49257b4`\
Heartbeat: 86400



**USDe**\
Token Address: `0x4c9EDD5852cd905f086C759E8383e09bff1E68B3`\
Primary Price Feed: `0xa569d910839Ae8865Da8F8e70FfFb0cBA869F961`\
Primary Price Feed Provider: Chainlink\
Backup Price Feed: `0xbC5FBcf58CeAEa19D523aBc76515b9AEFb5cfd58`\
Backup Price Feed Provider: RedStone\
Heartbeat: 86400



**USDO**\
Token Address: `0x8238884Ec9668Ef77B90C6dfF4D1a9F4F4823BFe`\
Primary Price Feed: `0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6`\
Primary Price Feed Provider: ChainLink\
Heartbeat: 86400



**USDS**\
Token Address: `0xdC035D45d973E3EC169d2276DDab16f1e407384F`\
Primary Price Feed: `0xfF30586cD0F29eD462364C7e81375FC0C71219b1`\
Primary Price Feed Provider: Chainlink\
Backup Price Feed: `0x74661a9ea74fD04975c6eBc6B155Abf8f885636c`\
Backup Price Feed Provider: Chronicle Protocol\
Heartbeat: 86400



**PT-sUSDE-25SEP2025**\
Token Address: `0x9F56094C450763769BA0EA9Fe2876070c0fD5F77`\
Primary Price Feed: `0xAA7F162b56f889fE9938CEe00D68f353e1f48d8E`\
Primary Price Feed Provider: RedStone\
Backup Price Feed: `0x65A27eb176a0B6D6fc53C8Ac64C04Bf3Fe627C8C`\
Backup Price Feed Provider: Chainlink\
Heartbeat: 86400



**PT-yUSD-7AUG2025**\
Token Address: `0xD1d0fF7BB555f57A9604CE06bca704ab97A0049A`\
Primary Price Feed: `0x792D0990d3a414d32687656AFa4b8ac2C427b346`\
Primary Price Feed Provider: Chainlink, TermMax\
Heartbeat: 86400



**tETH (Treehouse)**\
Token Address: `0xD11c452fc99cF405034ee446803b6F6c1F6d5ED8`\
Primary Price Feed: `0x71DFf31Be0182174dceAbdF60BE5ccE37D897f75`\
Primary Price Feed Provider: Chainlink, TermMax\
Heartbeat: 86400



**PT-yUSD-7AUG2025**\
Token Address: `0xD1d0fF7BB555f57A9604CE06bca704ab97A0049A`\
Primary Price Feed: `0x792D0990d3a414d32687656AFa4b8ac2C427b346`\
Primary Price Feed Provider: TermMax\
Heartbeat: 86400



**tETH (Terminal)**

Token Address: `0xa1150cd4A014e06F5E0A6ec9453fE0208dA5adAb`\
Primary Price Feed: `0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419`\
Primary Price Feed Provider: Chainlink\
Backup Price Feed: `0x67F6838e58859d612E4ddF04dA396d6DABB66Dc4`\
Backup Price Feed Provider: RedStone\
Heartbeat: 86400



**tUSDe (Terminal)**\
Token Address: `0xA01227A26A7710bc75071286539E47AdB6DEa417`\
Primary Price Feed: `0xa569d910839Ae8865Da8F8e70FfFb0cBA869F961`\
Primary Price Feed Provider: Chainlink\
Backup Price Feed: `0xbC5FBcf58CeAEa19D523aBc76515b9AEFb5cfd58`\
Backup Price Feed Provider: RedStone\
Heartbeat: 86400





## Arbitrum

<table><thead><tr><th width="113.42578125">Asset</th><th width="404.10546875">Oracle Address</th><th width="404.609375">Backup Oracle Address</th><th width="83.15625" data-type="number">Heartbeat (s)</th><th>Note</th></tr></thead><tbody><tr><td>WETH</td><td><pre class="language-solidity" data-title="Chainlink ETH/USD" data-full-width="true"><code class="lang-solidity">0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612
</code></pre></td><td><pre class="language-solidity" data-title="eOracle ETH/USD"><code class="lang-solidity">0xd68AeF8Ab6D86CeC502e08Faa376297d836FdfA6
</code></pre></td><td>86400</td><td></td></tr><tr><td>USDC</td><td><pre class="language-solidity" data-title="Chainlink USDC/USD"><code class="lang-solidity">0x50834F3163758fcC1Df9973b6e91f0F0F0434aD3
</code></pre></td><td><pre class="language-solidity" data-title="eOracle USDC/USD"><code class="lang-solidity">0x399A965083E512011c82AAEB6A86036463010C95
</code></pre></td><td>86400</td><td></td></tr><tr><td>wstETH</td><td><pre class="language-solidity" data-title="Chainlink wstETH/ETH + chainlink ETH/USD"><code class="lang-solidity">0xB3ae8A16CF827d193Ae51a92fd2630e6839F5761
</code></pre></td><td></td><td>86400</td><td></td></tr><tr><td>WBTC</td><td><pre class="language-solidity" data-title="Chainlink WBTC/USD"><code class="lang-solidity">0xd0C7101eACbB49F3deCcCc166d238410D6D46d57
</code></pre></td><td><pre class="language-solidity" data-title="eOracle WBTC/USD"><code class="lang-solidity">0x31FEeac9552a6215BD23Bd8c590B34BF04d865AE
</code></pre></td><td>86400</td><td></td></tr><tr><td>weETH</td><td><pre class="language-solidity" data-title="Chainlink weETH/ETH + chainlink ETH/USD"><code class="lang-solidity">0x8f29Df42c617C222Bc2B416AC8a022E85e853276
</code></pre></td><td><pre class="language-solidity" data-title="Redstone weETH/ETH + eOracle ETH/USD"><code class="lang-solidity">0xc2052500D0Cb8E1E8838717502A6B113C64Ed258
</code></pre></td><td>86400</td><td></td></tr><tr><td>ARB</td><td><pre class="language-solidity" data-title="Chainlink ARB/USD"><code class="lang-solidity">0xb2A824043730FE05F3DA2efaFa1CBbe83fa548D6
</code></pre></td><td></td><td>86400</td><td></td></tr><tr><td>PT-weETH-26JUN2025</td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + chainlink weETH/ETH + chainlink ETH/USD"><code class="lang-solidity">0x2a2a0e32c54670045256EBcA681887E32e689E97
</code></pre></td><td><pre class="language-solidity" data-title="Pendle ptToSyRate + redstone weETH/ETH + eOracle ETH/USD"><code class="lang-solidity">0x745716b8c00CAE49c422D706f630A1084B906759
</code></pre></td><td>86400</td><td></td></tr></tbody></table>



**PT-weETH-25JUN2026**\
Token Address: `0xaB7F3837E6e721abBc826927B655180Af6A04388`\
Primary Price Feed: `0x6209F36e72846801c0580a851220f062C9472133`\
Backup Price Feed: `0xe7c5C4ebc151e4B0DeeFF841C5f7Ec68f747368F`\
Heartbeat: 86400



## BNB

**USDT**\
Token Address: `0x55d398326f99059fF775485246999027B3197955`\
Primary Price Feed: `0xB97Ad0E74fa7d920791E90258A6E2085088b4320`\
Backup Price Feed: `0xf57bA29437C130e155Ca4b65128630777638F05D`\
Heartbeat: 21600



**WBNB**\
Token Address: `0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c`\
Primary Price Feed: `0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE`\
Backup Price Feed: `0x8dd2D85C7c28F43F965AE4d9545189C7D022ED0e`\
Heartbeat: 60



**BTCB**\
Token Address: `0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c`\
Price Feed: `0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf`\
Heartbeat: 60



**USD1**\
Token Address: `0x8d0D000Ee44948FC98c9B98A4FA4921476f08B0d`\
Price Feed: `0xaD8b4e59A7f25B68945fAf0f3a3EAF027832FFB0`\
Backup Price Feed: `0x6A1c87d11dDe3D1d52c24f8EC59B91019f14170D`\
Heartbeat: 86400



**sUSDe**\
Token Address: `0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2`\
Price Feed: `0x7CD1174235476Ec8844A88de0d3E56A21E72ADa2`\
Backup Price Feed: `0x59538B3BdF046f15F7bDD231aACfA314071b1DF1`\
Heartbeat: 86400



**PT-sUSDe-26JUN2025**\
Token Address: `0xdd809435ba6c9d6903730f923038801781ca66ce`\
Price Feed: `0xe532CD9609BADBF6c02778116034a1EbD1526d3C`\
Backup Price Feed: `0x652cD426ffe87cb6f435317cC19BC81EC940Fd46`\
Heartbeat: 86400



**ynBNBx**\
Token Address: `0x32C830f5c34122C6afB8aE87ABA541B7900a2C5F`\
Price Feed: `0x5F5376913E011AeDe8d93027B335832180411322`\
Heartbeat: 3600



**ETH**\
Token Address: `0x2170Ed0880ac9A755fd29B2688956BD959F933F8`\
Price Feed: `0x9ef1B8c0E4F7dc8bF5719Ea496883DC6401d5b2e`\
Backup Price Feed: `0x9cF19D284862A66378c304ACAcB0E857EBc3F856`\
heatbeat: 21600



**USDX**\
Token Address: 0xf3527ef8dE265eAa3716FB312c12847bFBA66Cef\
Price Feed: 0x4BAD96DD1C7D541270a0C92e1D4e5f12EEEA7a57\
Heartbeat: 21600



**sUSDX**\
Token Address: `0x7788A3538C5fc7F9c7C8A74EAC4c898fC8d87d92`\
Price Feed: `0xf953652dE8af7F4D2dB325374A0ec1d12E24B3c3`\
Heartbeat: 21600



**xPufETH**\
Token Address: `0x64274835D88F5c0215da8AADd9A5f2D2A2569381`\
Price Feed: `0x05BC196a4a6Ba4eF476758133506299E17AE6753`\
Heartbeat: 21600



