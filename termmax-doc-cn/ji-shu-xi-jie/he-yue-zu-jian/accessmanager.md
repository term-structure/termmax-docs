# AccessManager

**AccessManager** 合约负责管理 TermMax 协议中各个部分的角色与权限设置。该合约基于 OpenZeppelin 的 `AccessControlUpgradeable` 和 `UUPSUpgradeable` 模块构建，具备基于角色的访问控制以及智能合约可升级性功能。

## 角色与职责

## 1. **DEFAULT\_ADMIN\_ROLE**

持有 `DEFAULT_ADMIN_ROLE` 的账户拥有最高级别的控制权限，可以执行以下操作：:

1.  **设置 Gearing Token 的实现合约**

    ```solidity
    function setGtImplement(ITermMaxFactory factory, string memory gtImplementName, address gtImplement)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    ```

    * 在工厂合约中更新 Gearing Token 的实现合约引用。
2.  **创建市场**

    ```solidity
    function createMarket(ITermMaxFactory factory, bytes32 gtKey, MarketInitialParams calldata deployParams, uint256 salt)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    ```

    * 部署一个新的 TermMax 市场合约。
3.  **创建市场并加入白名单**

    ```solidity
    function createMarketAndWhitelist(
        ITermMaxRouter router,
        ITermMaxFactory factory,
        bytes32 gtKey,
        MarketInitialParams calldata deployParams,
        uint256 salt
    ) 
        external 
        onlyRole(DEFAULT_ADMIN_ROLE) 
    ```

    * 部署一个新市场并自动将其加入路由器的白名单中。
4.  **转移所有权**

    ```solidity
    function transferOwnership(IOwnable entity, address to)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    ```

    * 将 `IOwnable` 合约的所有权转移至另一个地址。
5.  **接受所有权**

    ```solidity
    function acceptOwnership(IOwnable entity)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    ```

    * 将 `IOwnable` 合约的所有权转移至另一个地址。
6.  **升级子合约（UUPS 升级机制）：**

    ```solidity
    function upgradeSubContract(UUPSUpgradeable proxy, address newImplementation, bytes memory data)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    ```

    * 升级一个基于 UUPS 的代理合约至新的实现合约，并可选调用新合约中的函数。
7.  **设置市场白名单**

    ```solidity
    function setMarketWhitelist(ITermMaxRouter router, address market, bool isWhitelist)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    ```

    * 向路由器添加或移除某个市场的白名单资格。
8.  **设置适配器白名单**

    ```solidity
    function setAdapterWhitelist(ITermMaxRouter router, address adapter, bool isWhitelist)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    ```

    * 管理路由器中适配器的白名单状态。
9.  **设置预言机**

    ```solidity
    function setOracle(IOracle aggregator, address asset, IOracle.Oracle memory oracle)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    ```

    * 将某一资产与特定的预言机数据源进行关联。
10. **移除预言机**

    ```solidity
    function removeOracle(IOracle aggregator, address asset)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    ```

    * 移除某一资产已存在的预言机映射。

> **备注**：DEFAULT\_ADMIN\_ROLE 同时也是其他角色的管理员角色，具备授予或撤销以下角色的权限：`DEFAULT_ADMIN_ROLE， PAUSER_ROLE， VAULT_ROLE`

***

## 2. **CONFIGURATOR\_ROLE**

The `CONFIGURATOR_ROLE` is responsible for adjusting protocol parameters:

1.  **Update Market Config**

    ```solidity
    function updateMarketConfig(ITermMaxMarket market, MarketConfig calldata newConfig)
        external
        onlyRole(CONFIGURATOR_ROLE)
    ```

    * Adjusts key market parameters such as collateral factors, interest rates, etc.
2.  **Update Gearing Token Config**

    ```solidity
    function updateGtConfig(ITermMaxMarket market, bytes memory configData)
        external
        onlyRole(CONFIGURATOR_ROLE)
    ```

    * Modifies configuration data specific to Gearing Tokens in a particular market.
3.  **Set Order Fee Rate**

    ```solidity
    function setOrderFeeRate(ITermMaxOrder order, FeeConfig memory feeConfig)
        external
        onlyRole(CONFIGURATOR_ROLE)
    ```

    * Adjusts fee parameters for specific orders or order types.

***

## 3. **PAUSER\_ROLE**

The `PAUSER_ROLE` allows pausing and unpausing of contracts that implement the `IPausable` interface:

1.  **Set Switch (Pause / Unpause)**

    ```solidity
    function setSwitch(IPausable entity, bool state)
        external
        onlyRole(PAUSER_ROLE)
    ```

    * If `state == true`, calls `unpause()` on the target; otherwise, calls `pause()`.

Pausing functionality is crucial in DeFi for handling emergencies or severe market disruptions.

***

## 4. **VAULT\_ROLE**

The `VAULT_ROLE` handles vault-specific administrative functions via the `ITermMaxVault` interface:

1.  **Submit Vault Guardian**

    ```solidity
    function submitVaultGuardian(ITermMaxVault vault, address newGuardian)
        external
        onlyRole(VAULT_ROLE)
    ```

    * Proposes a new guardian for the vault.
2.  **Revoke Vault Pending Guardian**

    ```solidity
    function revokeVaultPendingGuardian(ITermMaxVault vault)
        external
        onlyRole(VAULT_ROLE)
    ```

    * Cancels any pending guardian assignments.
3.  **Revoke Vault Pending Timelock**

    ```solidity
    function revokeVaultPendingTimelock(ITermMaxVault vault)
        external
        onlyRole(VAULT_ROLE)
    ```

    * Cancels any pending timelock changes in the vault.
4.  **Revoke Vault Pending Market**

    ```solidity
    function revokeVaultPendingMarket(ITermMaxVault vault, address market)
        external
        onlyRole(VAULT_ROLE)
    ```

    * Prevents a newly proposed market from being finalized for use within the vault.
5.  **Set Curator for Vault**

    ```solidity
    function setCuratorForVault(ITermMaxVault vault, address newCurator)
        external
        onlyRole(VAULT_ROLE)
    ```

    * Assigns or updates the vault’s curator (user/contract with certain oversight powers).
6.  **Set Allocator for Vault**

    ```solidity
    function setIsAllocatorForVault(ITermMaxVault vault, address allocator, bool isAllocator)
        external
        onlyRole(VAULT_ROLE)
    ```

    * Grants or revokes allocation rights within the vault.

***

## Summary

Each **TermMax** role comes with specific privileges essential for the secure and efficient functioning of the protocol:

* `DEFAULT_ADMIN_ROLE` → Master permissions: market creation, proxy upgrades, whitelisting, and system-wide ownership.
* `CONFIGURATOR_ROLE` → Parameter tuning: market and order configurations, Gearing Token updates.
* `PAUSER_ROLE` → Emergency on/off switch for paused contracts.
* `VAULT_ROLE` → Specialized vault governance: guardian, curator, timelocks, and market management within the vault.

By segregating capabilities in this manner, the protocol upholds the principle of least privilege and fosters a more secure, decentralized environment.
