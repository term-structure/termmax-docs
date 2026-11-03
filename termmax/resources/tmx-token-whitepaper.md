---
description: Version 1.0 | March 2026
---

# TMX Token Whitepaper

### Disclaimer

This whitepaper is for informational purposes only and does not constitute financial, legal, or investment advice. The information contained herein may be subject to change without prior notice. Term Structure Labs and its affiliated entities make no representations or warranties regarding the accuracy or completeness of this document. Prospective participants should conduct their own due diligence and consult with professional advisors before making any decisions.<br>

### 1. Executive Summary

TMX is the utility and governance token for TermMax, a decentralized fixed-rate borrowing and lending protocol that delivers predictable interest rates in DeFi through innovative tokenization and automated market maker (AMM) technology.

**Key Highlights:**

* **Total Supply:** 1,000,000,000 TMX (fixed, no inflation)
* **Token Standard:** ERC20 (OFT on multiple blockchains)
* **TGE Date:** To Be Announced
* **Initial Circulation:** \~20% at TGE

**Core Function:** Protocol governance, staking rewards, and ecosystem incentives

### 2. Introduction to TermMax

#### 2.1 The Problem

DeFi markets operate predominantly on variable interest rates, creating uncertainty for both borrowers and lenders. Traditional institutions and professional traders require rate predictability to:

* Plan capital deployment strategies
* Hedge interest rate exposure
* Optimize leverage costs and returns
* Manage cash flow with certainty

#### 2.2 The Solution

* TermMax provides decentralized fixed-rate and fixed-term borrowing and lending infrastructure through a three-token system and a custom AMM:
* **FT (Fixed-rate Token)** — A zero-coupon bond style token representing the right to redeem the face value of a debt position at maturity. Lenders buy FT at a discount and redeem at par, locking in a fixed yield from the moment they enter.
* **XT (Yield Token)** — The complementary component to FT, where 1 FT + 1 XT = 1 debt token. Borrowers receive XT when they take out a loan and can sell it immediately to obtain liquidity, fixing their borrowing cost at entry. XT also functions as an options-premium-like token representing the options instrument in TermMax Alpha markets.
* **GT (Gearing Token)** — An NFT that encapsulates a leveraged position, recording its associated collateral and debt information on-chain. Rather than manually looping collateral and borrowing multiple times, users can mint a GT in a single transaction to achieve target leverage with significantly lower gas costs.

**Curators & Capital Efficiency**

TermMax markets are managed by professional curators — specialized liquidity managers who set pricing curves, manage risk parameters, and optimize capital deployment. The current curators include Keyrock, Hardcoded Lab, Edge Capital, AlphaPing, and Origami Crypto.

Two mechanisms ensure curator capital works at maximum efficiency:

* **Atomic Orders:** Before funds are borrowed, virtual liquidity can be spread across multiple orders simultaneously, ensuring capital is always positioned where it's most needed without fragmentation.
* **Idle Fund Deployment:** Unborrowed capital is automatically deployed to floating-rate protocols (Aave, Morpho, Venus) to earn yield while waiting — eliminating idle capital with zero return in the system.

The protocol's custom Range Order AMM enables efficient price discovery for fixed-rate markets, with curators setting target APR ranges rather than price ranges, and the system self-balancing through market forces.

### 3. Tokenomics

#### 3.1 Token Overview

<table data-header-hidden><thead><tr><th width="151.5"></th><th></th></tr></thead><tbody><tr><td><strong>Parameter</strong></td><td><strong>Details</strong></td></tr><tr><td><strong>Token Name</strong></td><td>TermMax</td></tr><tr><td><strong>Ticker</strong></td><td>TMX</td></tr><tr><td><strong>Type</strong></td><td>Utility and Governance Token</td></tr><tr><td><strong>Primary Blockchain</strong></td><td>Ethereum</td></tr><tr><td><strong>Bridge Mechanism</strong></td><td>LayerZero OFT (Omnichain Fungible Token) — native cross-chain bridging via LayerZero protocol. Currently deployed on Ethereum (primary) and BNB Chain, with additional EVM chains supported.</td></tr><tr><td><strong>Token Address</strong></td><td><p><a href="https://etherscan.io/address/0x3c2f61f2e27c865981d2e7aaf6b2cdf823030039">https://etherscan.io/address/0x3c2f61f2e27c865981d2e7aaf6b2cdf823030039</a></p><p><a href="https://bscscan.com/address/0x3c2F61f2E27C865981D2e7aAf6b2CDf823030039">https://bscscan.com/address/0x3c2F61f2E27C865981D2e7aAf6b2CDf823030039</a> </p></td></tr><tr><td><strong>Standard</strong></td><td>ERC20 </td></tr><tr><td><strong>Total Supply</strong></td><td>1,000,000,000 (fixed cap)</td></tr><tr><td><strong>Initial Circulation</strong></td><td>200,000,000 (20%)</td></tr><tr><td><strong>TGE</strong></td><td>To be announced</td></tr></tbody></table>

#### 3.2 Token Allocation

<table data-header-hidden><thead><tr><th width="127"></th><th width="117.5"></th><th width="119.5"></th><th width="99"></th><th width="90"></th><th></th></tr></thead><tbody><tr><td><strong>Category</strong></td><td><strong>Allocation</strong></td><td><strong>Percentage</strong></td><td><strong>Cliff</strong></td><td><strong>Vesting</strong></td><td><strong>Release Frequency</strong></td></tr><tr><td>Community</td><td>150M</td><td>15%</td><td>-</td><td>-</td><td>-</td></tr><tr><td>Ecosystem </td><td>290M</td><td>29%</td><td>1 month</td><td>48 months</td><td>1 month</td></tr><tr><td>Liquidity Provision</td><td>50M</td><td>5%</td><td>-</td><td>-</td><td>-</td></tr><tr><td>Foundation</td><td>50M</td><td>5%</td><td>3 months</td><td>12 months </td><td>1 month</td></tr><tr><td>Advisors</td><td>30M</td><td>3.0%</td><td>12 months</td><td>30 months</td><td>1 month</td></tr><tr><td>Team</td><td>150M</td><td>15.0%</td><td>12 months</td><td>30 months</td><td>1 month</td></tr><tr><td>Investors</td><td>280M</td><td>28.0%</td><td>12 months</td><td>24 months</td><td>1 month</td></tr><tr><td>Total</td><td>1B</td><td>100%</td><td><br></td><td><br></td><td><br></td></tr></tbody></table>

_\* team + advisors for 12-month linear vesting thereafter_

<figure><img src="../.gitbook/assets/unknown (26).png" alt=""><figcaption></figcaption></figure>

#### 3.3 TMX Utility

TMX holders can participate in governance and guide the product features and parameters of the protocol.

TMX holders can also provide liquidity to a DEX pool like PancakeSwap or stake their $TMX tokens to receive sTMX (protocol FT tokens in TMX), which enables the holders to receive the following benefits:

* Staking rewards, including TMX emissions which may be sourced from Community allocation (in Tokenomics) and/or a portion of tokens from TermMax Treasury's funds
* Enhanced governance rights to adjust protocol parameters, including market risk parameters, and curator whitelisting

Treasury’s funds may be generated from:

* Trading fees on TermMax FT/XT product tokens across all markets
* Protocol fees collected on borrowing activity
* Liquidation fees
* Other sources

This mechanism aligns the interests of long-term holders with protocol sustainability and growth.

### 4. Risk Factors

#### 4.1 Technical Risks

**Smart Contract Risk:** Despite comprehensive audits by leading firms, ongoing security competitions, 24/7 monitoring, and bug bounty programs, smart contract vulnerabilities may exist. Users should be aware of the smart contract risk when taking the risk for holding $TMX.

**Oracle Dependency:** While TermMax employs dual oracle systems, oracle failures could impact pricing accuracy and liquidations.

**Blockchain Congestion:** Network congestion may delay transactions and increase gas fees during peak periods, affecting user experience.

#### 4.2 Market Risks

**Token Price Volatility:** TMX price is subject to significant fluctuations based on market conditions, speculation activities, trading volume, and broader cryptocurrency market dynamics.

**Liquidity Risk:** Token liquidity may vary across exchanges and prevailing market conditions may potentially affect the ability to buy or sell at desired prices.

**Regulatory Uncertainty:** Changes in cryptocurrency regulations across jurisdictions may impact token trading, utility, or project operations.

**Competition:** Emerging fixed-rate protocols and established DeFi platforms may impact market share and adoption.

#### 4.3 Operational Risks

**TVL Dependency:** Protocol sustainability and token value depend on maintaining and growing Total Value Locked.

**Exchange Listing:** Failure to secure or maintain exchange listings may limit token accessibility and liquidity.

**Adoption Risk:** Protocol success depends on achieving sufficient user adoption and institutional integration.

### 5. Legal & Regulatory Compliance

#### 5.1 Legal and Regulatory Statement

**Security Classification:** Based on comprehensive legal analysis, the TMX token does not qualify as a security under applicable jurisdictions including the United States (federal and state), United Kingdom, European Union, or Singapore. Legal opinions supporting this classification are available upon request.

**Geographic Restrictions:** Token distribution may be restricted in certain jurisdictions based on local regulatory requirements. Prospective token holders should consult local legal counsel.

#### 5.2 Compliance Commitment

TermMax is committed to operating within applicable legal frameworks and will adapt to evolving regulatory requirements to ensure long-term sustainability.

### 6. Roadmap

#### 6.1 Milestones (Completed)

* Leverage and Alpha Markets launched across multiple EVM chains
* Deployed on Ethereum, BNB Chain, Arbitrum, Base, Berachain, X Layer, B2 Network
* 837,000+ registered wallets and 170,000+ daily active users (peak)
* $64M+ TVL achieved
* 20+ institutional partnerships established
* Security audits completed: [https://github.com/term-structure/audits/blob/main/TermMax/TermMax-ABDK-audit-report-TMX-v-1-0.pdf](https://github.com/term-structure/audits/blob/main/TermMax/TermMax-ABDK-audit-report-TMX-v-1-0.pdf)&#x20;

#### 6.2 Q2 2026

* TermMax V2 feature rollout
* Options and derivatives expansion
* Strategy Product Vaults launch
* Money market protocols integration

#### 6.3 TGE & Q3 2026

* TMX Token Generation Event
* CEX listings and liquidity provision
* Airdrop distribution to early supporters
* Staking pool launch
* Institution partnership for structured product solutions

#### 6.4 Q4 2026–Q1 2027

* RWA chains and products integration
* Interest rate swap features
* Advanced curator tools and market maker features

#### 6.5 Long-Term Vision

TermMax aims to become the dominant fixed-rate infrastructure layer for DeFi, enabling:

* Institutional-grade rate certainty at scale
* Seamless integration with major DeFi protocols
* Comprehensive yield optimization ecosystems
* Regulated entity partnerships and traditional finance bridges

### 7. Conclusion

TMX represents the economic foundation of TermMax's mission to bring fixed-rate certainty to decentralized finance. Through a carefully designed staking system, TMX aligns the interests of users, liquidity providers, developers, and long-term holders with protocol growth and sustainability.

With a fixed supply of 1 billion tokens, controlled distribution over 48 months, and reward distribution through staking mechanism, TMX creates sustainable value-creation mechanisms tied to real-world protocol usage and adoption.

As DeFi matures and institutional participation grows, the demand for predictable, fixed-rate infrastructure will accelerate. TermMax is positioned to capture this opportunity, with TMX serving as the ecosystem's governance and utility token.

### Document Information

**Prepared by:** Term Structure Labs Limited\
**Issuing Entity:** Gradient Global Limited (BVI)\
**Version: 1.0**\
**Publication Date:** March 2026

**Contact Information:**

* Website: [https://ts.finance](https://ts.finance)&#x20;
* Documentation: [https://docs.ts.finance](https://docs.ts.finance)&#x20;

**Official Channels:**

* Twitter/X: [https://x.com/TermMaxFi](https://x.com/TermMaxFi)&#x20;
* Discord: [https://discord.ts.finance](https://discord.ts.finance)&#x20;
* Telegram: [https://t.me/TermMaxFi](https://t.me/TermMaxFi)&#x20;

### Important Notice

This whitepaper does not constitute an offer or solicitation to sell shares or securities. TMX tokens are not intended to constitute securities in any jurisdiction. This whitepaper is not a prospectus or offering document and is not an offer to sell or a solicitation of an offer to buy any securities, investment products, regulated products, or financial instruments.

Prospective participants should carefully consider the risks outlined in this document and conduct their own independent analysis before participating in the TermMax ecosystem. Past performance is not indicative of future results.



[Circulating Supply API](https://api-v2.termmax.ts.finance/system/tmx-token/circulating-supply).



© 2026 Term Structure Labs Limited. All rights reserved.
