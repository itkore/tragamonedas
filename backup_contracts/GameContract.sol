// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract GameContract {
    address public owner;
    IERC20 public tokenContract;
    uint256 public betAmount;

    event GamePlayed(address indexed player, bool success);
    event GameWon(address indexed player);

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

    function hasSufficientFunds(address player) public view returns (bool) {
        return tokenContract.balanceOf(player) >= betAmount;
    }

    function playGame(address player) external returns (bool) {
        require(msg.sender == owner, "Only the owner can trigger the game");
        
        if (!hasSufficientFunds(player)) {
            emit GamePlayed(player, false);
            return false;
        }

        // Transfer tokens from player to owner
        require(tokenContract.transferFrom(player, owner, betAmount), "Transfer failed");

        emit GamePlayed(player, true);
        return true;
    }

    function playerWins(address player) external {
        require(msg.sender == owner, "Only the owner can declare a win");

        // Transfer tokens from owner to player
        require(tokenContract.transfer(player, 25), "Transfer failed");

        emit GameWon(player);
    }
}
