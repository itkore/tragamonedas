import React, { useState, useEffect  } from 'react';
import { playGame, winGame  } from '../fetchers/slotmachine';

interface Props {
    wallet: string;
    onGameEnd: () => void;
}

const SlotMachine: React.FC<Props> = ({ wallet, onGameEnd }) => {
    const [numbers, setNumbers] = useState<number[]>([0, 0, 0]);
    const [message, setMessage] = useState<string>('¿Deseas participar?');
    const [remainingPlays, setRemainingPlays] = useState(5); // Contador de jugadas restantes
    const [hasWon, setHasWon] = useState(false);

    useEffect(() => {
        const initGame = async () => {
            const response = await playGame(wallet);
            if (!response) {
                alert("No tienes saldo suficiente en tu wallet para jugar.")
                onGameEnd();
            }
        };

        initGame();
    }, [wallet]);

    const generateNumber = () => Math.floor(Math.random() * 10); // Genera un número entre 0 y 9

    const play = () => {

        if (remainingPlays <= 0 && !hasWon) {
            onGameEnd();
            return;
        }

        setMessage('Girando...');
    
        let spinCount = 0;
        const newNumbers: number[] = []; // almacenaremos los nuevos números generados aquí
    
        const spin1 = setInterval(() => {
            const newFirst = generateNumber();
            newNumbers[0] = newFirst;
            setNumbers(prev => [newFirst, prev[1], prev[2]]);
            spinCount++;
            if (spinCount > 10) {
                clearInterval(spin1);
    
                spinCount = 0;
                const spin2 = setInterval(() => {
                    const newSecond = generateNumber();
                    newNumbers[1] = newSecond;
                    setNumbers(prev => [prev[0], newSecond, prev[2]]);
                    spinCount++;
                    if (spinCount > 10) {
                        clearInterval(spin2);
    
                        spinCount = 0;
                        const spin3 = setInterval(() => {
                            const newThird = generateNumber();
                            newNumbers[2] = newThird;
                            setNumbers(prev => [prev[0], prev[1], newThird]);
                            spinCount++;
                            if (spinCount > 10) {
                                clearInterval(spin3);
    
                                // Ahora evaluamos newNumbers en lugar del estado de numbers
                                if (newNumbers[0] === newNumbers[1] && newNumbers[1] === newNumbers[2]) {
                                    setHasWon(true);
                                    setMessage('¡Ganaste! Procesando tu recompensa...');
                                    winGame(wallet)
                                        .then(response => {
                                            setMessage('Continua jugando para ganar mas :) !');
                                        })
                                        .catch(error => {
                                            setMessage('Ocurrió un error al procesar tu recompensa.');
                                            console.error('Error en winGame:', error);
                                        });
                                } else {
                                    setMessage('Perdiste. Inténtalo de nuevo.');
                                }

                                setRemainingPlays(prev => prev - 1);

                                if (remainingPlays <= 1 && !hasWon) {
                                    onGameEnd(); // Si no hay más jugadas y no ha ganado, termina el juego
                                }
                            }
                        }, 100);
                    }
                }, 100);
            }
        }, 100);
    };

    // const handlePlay = async () => {
    //     const response = await playGame(wallet);
        
    //     // if (!response.message) {
    //     //     setMessage('No se puede jugar en este momento. Inténtalo de nuevo más tarde.');
    //     //     return;
    //     // }
    //     setMessage(response.message);
    //     play();
    // }

    return (
        <div className="slot-machine">
        <div className="vegas-sign">SLOT MACHINE</div>
        <div className="reels">
            <div className="number">{numbers[0]}</div>
            <div className="number">{numbers[1]}</div>
            <div className="number">{numbers[2]}</div>
        </div>
        <div className="message">{message}</div>
        <div className="remaining-plays">Oportunidades restantes: {remainingPlays}</div>
        {/* <button className="spin-btn" onClick={handlePlay}>¡Jugar!</button> */}
        <button className="spin-btn" onClick={play}>¡Jugar!</button>
    </div>
    );
};

export default SlotMachine;
