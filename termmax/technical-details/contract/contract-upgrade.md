# Contract Upgrade

## Overview

TermMax employs a strategic mixed approach to contract upgradeability, balancing flexibility with security. Only critical infrastructure components are upgradeable, while core protocol logic remains immutable to ensure user trust and system stability.

## Upgradable Contracts

TermMax implements the Universal Upgradeable Proxy Standard (UUPS) pattern for the following contracts:

1\. AccessManager Contract

* Purpose: Controls the permission system for the entire protocol
* Upgrade Authority: DEFAULT\_ADMIN\_ROLE
* Critical Functions: Role management, permission controls, system-wide access control

2\. TermMaxRouter Contract

* Purpose: Handles routing logic between protocol components
* Upgrade Authority: DEFAULT\_ADMIN\_ROLE
* Critical Functions: User interaction routing, protocol integration management



## Upgrade Process

1. Multisig Preparation
   1. Technical team prepares upgrade transaction data
   2. Admin multisig wallet initiates upgrade proposal
   3. Upgrade parameters and new implementation address verified
2. Signature Collection
   1. Threshold Required: 4 out of 6 signatures
   2. Security Features:
      1. Gnosis Safe multisig wallet implementation
      2. Hypernative Guardian service provides additional transaction security
3. Post-Upgrade Verification
   1. Check the upgraded contract status on Etherscan and/or other networks' explorers&#x20;
   2. Confirm all state correctly preserved during upgrade
   3. Validate new functionality works as expected
   4. Ensure permissions and access controls maintained
      * Check external integrations remain functional
      * Monitor for any issues post-upgrade
   5. All upgrades monitored by Immunefi bug bounty hunters

