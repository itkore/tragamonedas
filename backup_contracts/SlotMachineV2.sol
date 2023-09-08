// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SlotMachineV2 {
    address public owner;
    address public tokenContract;
    address public poolWallet;
    uint256 public betAmount;
    uint256 public feePercent;
    event PlayGameResult(bool success);

    modifier onlyOwner() {
        require(msg.sender == owner, "Solo el dueno puede hacer esto");
        _;
    }

    constructor(address _tokenContract, address _poolWallet, uint256 _betAmount, uint256 _feePercent) {
        owner = msg.sender;
        tokenContract = _tokenContract;
        poolWallet = _poolWallet;
        betAmount = _betAmount;
        feePercent = _feePercent;
    }

    function setParameters(address _tokenContract, address _poolWallet, uint256 _betAmount, uint256 _feePercent) external onlyOwner {
        tokenContract = _tokenContract;
        poolWallet = _poolWallet;
        betAmount = _betAmount;
        feePercent = _feePercent;
    }

    function canPlay(address player) public view returns (bool) {
        IERC20 token = IERC20(tokenContract);
        return token.balanceOf(player) >= betAmount;
    }

    function playGame(address player) public returns (bool) {
        
        IERC20 token = IERC20(tokenContract);

        uint256 fee = (betAmount * feePercent) / 100;
        uint256 poolAmount = betAmount - fee;

        require(token.transferFrom(player, owner, fee), "La transferencia de la comision fallo");
        require(token.transferFrom(player, poolWallet, poolAmount), "La transferencia al pool fallo");

        emit PlayGameResult(true);
        return true;
    }

    function distributeWinnings(address player) external {
        IERC20 token = IERC20(tokenContract);
        uint256 poolBalance = token.balanceOf(poolWallet);
        uint256 winnerAmount = (poolBalance * 90) / 100;

        require(token.transferFrom(poolWallet, player, winnerAmount), "La transferencia de las ganancias fallo");
    }

    function getPoolBalance() public view returns (uint256) {
        IERC20 token = IERC20(tokenContract);
        return token.balanceOf(poolWallet);
    }
}
