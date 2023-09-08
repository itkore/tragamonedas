//import { useEffect, useState } from 'react';
import React, { useState } from 'react';
import './App.css';
//import { ChangeMessengerMessage } from './components/ChangeMessengerMessage';
//import { getMessengerMessage } from './fetchers/messenger';
import SlotMachine from './components/SlotMachine';
import WalletInput from './components/WalletInput';

const App: React.FC = () => {
  // const [message, setMessage] = useState();

  // const getApiData = async () => {
  //   const response = await getMessengerMessage();
  //   setMessage(response.message);
  // };

  // useEffect(() => {
  //   getApiData();
  // }, []);

  const [wallet, setWallet] = useState<string | null>(null);

  const handleWalletSubmit = (submittedWallet: string) => {
      setWallet(submittedWallet);
  };

  const handleEndGame = () => {
      setWallet(null);
  };

  return (
    // <div>
    //   <h1>Ingrese su wallet y precione enviar para jugar</h1>
    //   <h1>{message}</h1>

    //   {message && <ChangeMessengerMessage currentMessage={message} />}
    // </div>
    <div className="app-container">
            {wallet ? (
                <div>
                    <SlotMachine wallet={wallet} onGameEnd={handleEndGame}/>
                    <button className="end-game-btn" onClick={handleEndGame}>Finalizar Juego</button>
                </div>
            ) : (
                <WalletInput onWalletSubmit={handleWalletSubmit} />
            )}
        </div>

  );
}

export default App;
