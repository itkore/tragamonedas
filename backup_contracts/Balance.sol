// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BalanceContract {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function getOwnerBalance() public view returns (uint256) {
        require(msg.sender == owner, "Solo el dueno puede consultar su saldo");
        return address(owner).balance;
    }

    // Función para recibir Ether
    receive() external payable {}
}