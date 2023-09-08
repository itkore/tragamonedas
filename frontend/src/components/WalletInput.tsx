import React, { useState } from 'react';

interface WalletInputProps {
    onWalletSubmit: (wallet: string) => void;
}

const WalletInput: React.FC<WalletInputProps> = ({ onWalletSubmit }) => {
    const [wallet, setWallet] = useState<string>('');

    const handleSubmit = () => {
        onWalletSubmit(wallet);
    };

    return (
        <div className="wallet-container">
        <h2>It's Las Vegas Baby!</h2>
        <div className="wallet-input">
            <input 
                type="text" 
                placeholder="Ingrese su Wallet" 
                value={wallet} 
                onChange={e => setWallet(e.target.value)} 
            />
            <button onClick={handleSubmit}>Jugar</button>
        </div>
    </div>
    );
}

export default WalletInput;
