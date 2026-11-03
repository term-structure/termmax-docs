---
description: >-
  This document outlines the various roles defined in the TermMax protocol,
  their responsibilities, and the specific functions each role controls.
---

# TermMax 角色

## Core Roles for Access Control

### 1. Default Admin (`DEFAULT_ADMIN_ROLE`)

Description: The highest administrative role with privileges to manage other roles and system-critical operations.Controlled Functions:

#### Gearing Token (GT)&#x20;

*   **Set Gearing Token Implementation**

    ```solidity
    // AccessManager.sol
    function setGtImplement(ITermMaxFactory factory, string memory gtImplementName, address gtImplement)
            external
            onlyRole(DEFAULT_ADMIN_ROLE)
    ```

    * Updates the Gearing Token implementation reference in the factory.

#### **Market**

*   **Create and deploy new markets**

    ```solidity
    // AccessManager.sol
    function createMarket(
            ITermMaxFactory factory,
            bytes32 gtKey,
            MarketInitialParams calldata deployParams,
            uint256 salt
        ) external onlyRole(DEFAULT_ADMIN_ROLE) returns (address market)
    ```

    * Deploys new markets

#### **Ownership**

*   **Transfer ownership of an contract**

    ```solidity
    // AccessManager.sol
    function transferOwnership(IOwnable entity, address to) external onlyRole(DEFAULT_ADMIN_ROLE)
    ```

    * Transfers ownership of ownable contracts
*   **Accept ownership of an contract**

    ```solidity
    // AccessManager.sol
    function acceptOwnership(IOwnable entity) external onlyRole(DEFAULT_ADMIN_ROLE)
    ```

    * Accepts ownership of contracts

#### **Upgradability**

*   **Upgrade contracts**

    ```solidity
    // AccessManager.sol
    function upgradeSubContract(UUPSUpgradeable proxy, address newImplementation, bytes memory data)
            external
            onlyRole(DEFAULT_ADMIN_ROLE)
    ```

    * Upgrades proxies using UUPS pattern

#### **Contract Integration**

*   **Whitelist external adapters for contract integrations**

    ```solidity
    // AccessManager.sol
    function setAdapterWhitelist(ITermMaxRouter router, address adapter, bool isWhitelist)
            external
            onlyRole(DEFAULT_ADMIN_ROLE)
    ```

    * Controls which swap adapters are allowed

#### **Oracles**

*   **Update oracle source for an asset**

    ```solidity
    // AccessManager.sol
    function submitPendingOracle(IOracle aggregator, address asset, IOracle.Oracle memory oracle)
            external
            onlyRole(DEFAULT_ADMIN_ROLE)
    ```

    * Submits new oracles
*   **Accept new submitted oracle source for an asset**

    ```solidity
    // AccessManager.sol
    function acceptPendingOracle(IOracle aggregator, address asset) external onlyRole(DEFAULT_ADMIN_ROLE)
    ```

    * Accepts pending oracles

### 2. Pauser (`PAUSER_ROLE`)

Description: Role with permissions to pause/unpause contracts as a safety measure during emergencies.Controlled Functions:

*   **Pause or Unpause a pausable contract**

    ```solidity
    // AccessManager.sol
    function setSwitch(IPausable entity, bool state) external onlyRole(PAUSER_ROLE)
    ```

    * Pauses or unpauses protocol functionalities

### 3. Configurator (`CONFIGURATOR_ROLE`)

Description: Role with permissions to configure aspects of the system such as market parameters and fee settings.Controlled Functions:

*   **Update market config including treasury address and fee configs**

    ```solidity
    // AccessManager.sol
    function updateMarketConfig(ITermMaxMarket market, MarketConfig calldata newConfig)
            external
            onlyRole(CONFIGURATOR_ROLE)
    ```

    * Updates market configuration
*   **Update Gearing Token (GT) config to set collateral capacity**

    ```solidity
    // AccessManager.sol
    function updateGtConfig(ITermMaxMarket market, bytes memory configData) external onlyRole(CONFIGURATOR_ROLE)
    ```

    * Updates Gearing Token configuration
*   **Update fee rate of an specific order**

    ```solidity
    // AccessManager.sol
    function updateOrderFeeRate(ITermMaxMarket market, ITermMaxOrder order, FeeConfig memory feeConfig)
            external
            onlyRole(CONFIGURATOR_ROLE)
    ```

    * Updates fee rates for orders

### 4. Vault Admin (`VAULT_ROLE`)

Description: Role with specific permissions to manage vaults.Controlled Functions:

*   **Submit a new guaridan to a vault for apending apprvoval**&#x20;

    ```solidity
    // AccessManager.sol
    function submitVaultGuardian(ITermMaxVault vault, address newGuardian) external onlyRole(VAULT_ROLE)
    ```
*   **Revoke the pending guradian of a vault**

    ```solidity
    // AccessManager.sol
    function revokeVaultPendingGuardian(ITermMaxVault vault) external onlyRole(VAULT_ROLE)
    ```
*   **Revoke the pending timelock settings of a vault**

    ```solidity
    // AccessManager.sol
    function revokeVaultPendingTimelock(ITermMaxVault vault) external onlyRole(VAULT_ROLE)
    ```
*   **Revoke the pending market to be whitelisted of a vault**

    ```solidity
    // AccessManager.sol
    function revokeVaultPendingMarket(ITermMaxVault vault, address market) external onlyRole(VAULT_ROLE)
    ```
*   **Set and update curator to a vault**

    ```solidity
    // AccessManager.sol
    function setCuratorForVault(ITermMaxVault vault, address newCurator) external onlyRole(VAULT_ROLE)
    ```
*   **Set and whitelist allocators of a vault**

    ```solidity
    // AccessManager.sol
    function setIsAllocatorForVault(ITermMaxVault vault, address allocator, bool isAllocator)
            external
            onlyRole(VAULT_ROLE)
    ```

## Vault-Specific Roles

### Curator

Description: Role responsible for managing vault market relationships and parameters.Controlled Functions:

*   **Create an order under the vault**

    ```solidity
    // TermMaxVault.sol
    function createOrder(ITermMaxMarket market, uint256 maxSupply, uint256 initialReserve, CurveCuts memory curveCuts)
            external
            onlyCuratorRole
            marketIsWhitelisted(address(market))
            whenNotPaused
            returns (ITermMaxOrder order)
    ```
*   **Update multiple orders including the rates and supplies**

    ```solidity
    // TermMaxVault.sol
    function updateOrders(
            ITermMaxOrder[] memory orders,
            int256[] memory changes,
            uint256[] memory maxSupplies,
            CurveCuts[] memory curveCuts
        ) external onlyCuratorRole whenNotPaused
    ```
*   **Redeem Fixed-Rate Tokens (FT) of the order after maturity**

    ```solidity
    function redeemOrder(ITermMaxOrder order) external onlyCuratorRole
    ```
*   **Withdraw the performance fee**

    ```solidity
    // TermMaxVault.sol
    function withdrawPerformanceFee(address recipient, uint256 amount)
            external
            nonReentrant
            whenNotPaused
            onlyCuratorRole
    ```
*   **Submit a new timelock to be accepted after the original timelock**

    ```solidity
    // TermMaxVault.sol
    function submitTimelock(uint256 newTimelock) external onlyCuratorRole
    ```
*   **Set and update the capacity of the vault**

    ```solidity
    // TermMaxVault.sol
    function setCapacity(uint256 newCapacity) external onlyCuratorRole
    ```
*   **Submit the new performance fee rate to be accepted after timelock**

    ```solidity
    // TermMaxVault.sol
    function submitPerformanceFeeRate(uint184 newPerformanceFeeRate) external onlyCuratorRole
    ```
*   **Submit and whitelist a new market to be accepted after timelock**

    ```solidity
    // TermMaxVault.sol
    function submitMarket(address market, bool isWhitelisted) external onlyCuratorRole
    ```
* All allocator functions (acts as a super-allocator)

### Guardian

Description: A protective role for vaults with permissions to approve or prevent sensitive operations.Controlled Functions:

*   **Revoke the new submitted timelock**

    ```solidity
    // TermMaxVault.sol
    function revokePendingTimelock() external onlyGuardianRole
    ```
*   **Revoke the new submitted guradian**

    ```solidity
    // TermMaxVault.sol
    function revokePendingGuardian() external onlyGuardianRole
    ```
*   **Revoke the new submitted market to be whitelisted**

    ```solidity
    // TermMaxVault.sol
    function revokePendingMarket(address market) external onlyGuardianRole
    ```
*   **Revoke the new submitted performance fee**

    ```solidity
    // TermMaxVault.sol
    function revokePendingPerformanceFeeRate() external onlyGuardianRole
    ```

### Allocator

Description: Role responsible for managing funds allocation within vaults.Controlled Functions:

*   **Update the order of supply queue**

    ```solidity
    // TermMaxVault.sol
    function updateSupplyQueue(uint256[] memory indexes) external onlyAllocatorRole
    ```
*   **Update the order of withdraw queue**

    ```solidity
    // TermMaxVault.sol
    function updateWithdrawQueue(uint256[] memory indexes) external onlyAllocatorRole
    ```



## Architecture

<figure><img src="../../.gitbook/assets/TermMax Workflow-Access Control.jpg" alt=""><figcaption></figcaption></figure>





