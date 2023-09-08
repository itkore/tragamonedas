// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract WinContract {
    address public owner;
    IERC20 public tokenContract;
    uint256 public winAmount;

    constructor(address _tokenContract, uint256 _winAmount) {
        owner = msg.sender;
        tokenContract = IERC20(_tokenContract);
        winAmount = _winAmount;
    }

    function setWinAmount(uint256 _winAmount) external {
        require(msg.sender == owner, "Only the owner can set the bet amount");
        winAmount = _winAmount;
    }

    function setTokenContract(address _tokenContract) external {
        require(msg.sender == owner, "Only the owner can set the token contract");
        tokenContract = IERC20(_tokenContract);
    }

    function playerWins(address player) external returns (bool) {

        require(tokenContract.transfer(player, winAmount), "Transfer failed");

        return true;
    }

}
