// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Tragamonedas {
    address public owner; // Dirección del dueño del juego
    address public pool; // Dirección del pool

    ERC20 public token; // Contrato del token ERC20

    uint256 public bet; // Tarifa por juego
    uint256 public poolBalance; // Balance del pool

    uint256[] public carretes; // Representa los números en los carretes

    constructor(address _tokenAddress, address _poolAddress, uint256 _bet) {
        owner = msg.sender;
        pool = _poolAddress;
        token = ERC20(_tokenAddress);
        bet = _bet;
    }

    function play(address player) public {
        require(token.balanceOf(player) >= bet, "No tienes suficientes tokens");
        require(token.transferFrom(player, address(this), bet), "La transferencia de tokens fallo");

        // Genera números aleatorios para los carretes y muestra el juego interactivo
        for (uint256 i = 0; i < 3; i++) {
            carretes[i] = generateRandomNumber(); // Utiliza la función de números aleatorios
            emit CarreteGirado(carretes[i]);
        }

        // Verifica si el jugador ha ganado
        bool hasWon = checkWinningCombination();

        if (hasWon) {
            // El jugador gana el balance del pool
            uint256 winnings = poolBalance;
            poolBalance = 0; // Vacía el pool
            require(token.transfer(msg.sender, winnings), "La transferencia de ganancias fallo.");
        }

        // Cobra la comisión del dueño
        uint256 fee = (bet * 10) / 100; // Por ejemplo, el 10% va al dueño
        require(token.transfer(owner, fee), "La transferencia de comision fallo.");
    }

    function checkWinningCombination() internal view returns (bool) {
        // Lógica para verificar si el jugador ha ganado
        // Por ejemplo, si los tres carretes tienen el mismo número, el jugador gana

        if (carretes[0] == carretes[1] && carretes[1] == carretes[2]) {
            return true;
        }

        return false;
    }

    // Genera un número pseudoaleatorio entre 0 y 9
    function generateRandomNumber() internal view returns (uint256) {
        uint256 randomNumber = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender)));
        return randomNumber % 10; // Retorna un valor entre 0 y 9
    }

    event CarreteGirado(uint256 valorCarrete);
}