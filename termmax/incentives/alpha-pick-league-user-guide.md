---
description: >-
  All times are in UTC. “Weekly” refers to the calendar week (Monday 00:00 to
  Sunday 23:59 UTC). All event data will only be counted after the official
  start of the event.
---

# 🎯 Alpha Pick League User Guide

**Event Entry:** [Leaderboard](https://leaderboard.termmax.ts.finance/picks)&#x20;

**End Date:** The final end date will be announced separately through official channels.\
**Reward Distribution:** Daily results will be updated and rewards will be distributed within <mark style="color:$warning;">**24–48 hours**</mark> after the voting deadline. Updates may be delayed in exceptional cases.&#x20;

## Event Overview

<figure><img src="../.gitbook/assets/Alpha Pick League 玩法对比表.png" alt=""><figcaption></figcaption></figure>

## Daily Draw

### How It Works

Every day at UTC 00:00, three prediction cards will be released. Each card displays a reference price (the official closing price from the previous trading day).

Users can select one card and make a price prediction (Call / Put). Trading is not required to participate.

### Price Movement Determination

For US stock assets, the system will compare:

Official closing price of the day vs. the previous trading day’s official closing price (reference price)

<kbd><mark style="color:$warning;">**Results:**<mark style="color:$warning;"></kbd>

* <kbd>Closing price > reference price → Users who selected Call win</kbd>
* <kbd>Closing price ≤ reference price → Users who selected Put win</kbd>

Users who predict correctly will share the reward pool of the corresponding card.

If no user correctly predicts a card, that card’s reward pool will be evenly distributed among the other two cards.

Since the result is determined based on the daily closing price, users must complete their prediction before the US market opens that day. The exact deadline is displayed on the event page.

<details>

<summary><mark style="color:$warning;"><strong>Note:</strong></mark><br>During US market holidays and weekends, Crypto assets (such as BTC / ETH) will be used instead.</summary>

<mark style="color:$warning;">**For Crypto assets:**</mark>\
**The** reference price is calculated based on the average price during the 30 minutes before the card release time (UTC 00:00).\
**The** settlement price is calculated based on the average price during the 30 minutes before UTC 00:00 on the following day.

</details>

### Reward Calculation

#### 1. Base Reward Share

Base Reward Share = 200,000 AP ÷ Number of Correct Predictors

#### 2. Final Reward Calculation

At each settlement, the system will check the user’s Alpha Market trading activity during the current week:

<table data-header-hidden><thead><tr><th width="403.5"></th><th></th></tr></thead><tbody><tr><td><strong>Weekly Cumulative Notional Trading Volume</strong></td><td><strong>Reward Multiplier</strong></td></tr><tr><td>≥ $50</td><td>Base Reward Share ×2</td></tr><tr><td>&#x3C; $50</td><td>Base Reward Share ×0.5</td></tr></tbody></table>

**Additional notes:**

* No minimum single-trade amount is required. Users can trade any Alpha asset in any direction and accumulate a weekly notional trading volume of ≥ $50 through multiple trades.&#x20;
* Once the requirement is met, all future Daily Draw rewards for correct predictions settled within that week will receive the AP ×2 multiplier.
* Rewards that have already been settled before meeting the requirement will not be retroactively adjusted.

### Example

Assume a user selects TSLAon and chooses Call.

* Reference price: $380
* Daily closing price: $395.20

Since $395.20 > $380, the prediction is correct.

Assume 800 users correctly predicted the outcome.

Each user’s base reward share: <mark style="color:$warning;">`200,000 ÷ 800 = 250 AP`</mark>

Users who reach the weekly cumulative notional trading volume requirement of $50 will receive: <mark style="color:$warning;">`250 × 2 = 500 AP`</mark>

Users who do not meet the requirement will receive: <mark style="color:$warning;">`250 × 0.5 = 125 AP`</mark>

### Streak Rewards

Users can build streaks through consecutive participation:&#x20;

* Correct predictions are not required.
* Missing one day of participation will reset the streak.
* If no prediction cards are released on a given day, the streak will not be interrupted.

| **Consecutive Participation** | **Reward**                   |
| ----------------------------- | ---------------------------- |
| 7 days                        | 50,000 AP                    |
| 14 days                       | 120,000 AP                   |
| 30 days                       | 300,000 AP + Exclusive Badge |

## Weekly Challenge

### How It Works

Three prediction cards will be released every Thursday at 00:00 UTC. Users must select one card to make a price prediction and trade the corresponding asset on Alpha Market before Thursday 23:59 UTC, with a cumulative notional trading volume of ≥ $50.&#x20;

The actual trading direction does not need to match the prediction direction. Trade verification status will be updated within 24 hours.&#x20;

### Price Movement Determination

The system will compare:

Friday’s official closing price vs. Thursday’s official closing price (reference price)

<kbd><mark style="color:$warning;">**Results:**<mark style="color:$warning;"></kbd>

* <kbd>Friday’s Closing price > reference price → Users who selected Call win</kbd>
* <kbd>Friday’s Closing price ≤ reference price → Users who selected Put win</kbd>

### Reward Rules

Each card has a 1,000,000 AP reward pool. Users who **pass trade verification and correctly predict the outcome** will equally share the reward pool.

If no user correctly predicts a card, that card’s reward pool will be evenly distributed among the other two cards.

### Example

Assume a user selects NVDAon, chooses Put, and completes an Alpha trade with a notional volume of $60.

Price comparison:

* Thursday closing price (reference price): $918.40
* Friday closing price: $890.10

Since $890.10 < $918.40, the user’s prediction is correct.

If 600 users complete the trading requirement and make the correct prediction, each eligible user will receive: <mark style="color:$warning;">`1,000,000 ÷ 600 ≈ 1,667 AP`</mark>
