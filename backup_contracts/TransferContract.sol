// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TransferContract {
    address public owner;
    IERC20 public tokenContract;

    constructor(address _tokenContract) {
        owner = msg.sender;
        tokenContract = IERC20(_tokenContract);
    }

    function playerWins(address player) external {
        require(msg.sender == owner, "Only the owner can declare a win");

        // Transfer tokens from owner to player
        require(tokenContract.transfer(player, 25), "Transfer failed");
    }
}
