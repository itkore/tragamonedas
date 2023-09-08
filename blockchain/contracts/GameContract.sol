// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract GameContract {
    address public owner;
    IERC20 public tokenContract;
    uint256 public betAmount;

    constructor(address _tokenContract, uint256 _betAmount) {
        owner = msg.sender;
        tokenContract = IERC20(_tokenContract);
        betAmount = _betAmount;
    }

    function setBetAmount(uint256 _betAmount) external {
        require(msg.sender == owner, "Only the owner can set the bet amount");
        betAmount = _betAmount;
    }

    function setTokenContract(address _tokenContract) external {
        require(msg.sender == owner, "Only the owner can set the token contract");
        tokenContract = IERC20(_tokenContract);
    }

    function hasSufficientFunds(address player) public view returns (uint256, bool) {
        uint256 balance = tokenContract.balanceOf(player);
        return (balance, balance >= betAmount);
    }

    function playGame(address player) external returns (bool) {
        
        // Transfer tokens from player to owner
        require(tokenContract.transfer(player, betAmount), "Transfer failed");

        return true;
    }
}
