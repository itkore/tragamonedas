import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
//import { getMessengerContract } from './constracts/messenger.contract';
//import { getCTokenContract } from './constracts/ctoken.contract';
//import { getSlotMachineContract } from './constracts/slotmachine.contract';
import { getGameContract } from './constracts/game.contract';
import { getWinContract } from './constracts/win.contract';
import { getTokenContract } from './constracts/bigtoken.contract';
import { ethers } from 'ethers';
import bodyParser from 'body-parser';


dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.options('*', cors({origin: "*"}));


app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

/**
 * Messenger end-points.
 */

// app.get('/messenger', async (req: Request, res: Response) => {
//   const contract = getMessengerContract();
//   const response = await contract.getMessage();
//   res.json({
//     message: response
//   });
// });

// app.put('/messenger', async (req: Request, res: Response) => {
//   const message = req.query.message;
//   const contract = getMessengerContract();
//   const response = await contract.setMessage(message);
//   res.json({
//     message: response
//   });
// });

// /**
//  * CToken end-points.
//  */

// app.get('/ctoken/totalSupply', async (req: Request, res: Response) => {
//   const contract = getCTokenContract();
//   const response = await contract.totalSupply();

//   res.json({
//     totalSupply: ethers.formatEther(response) 
//   });
// });

app.post('/api/play', async (req, res) => {

  try {
    const { wallet } = req.body;
    const gameContract = getGameContract();
    
    const hasFunds = await gameContract.hasSufficientFunds(wallet);

    if (!hasFunds[1]) {
      return res.status(400).json({ message: 'Saldo insuficiente.' });
    }

    const response = await gameContract.playGame("0x78E9eB55151310a09e5831E9a13453C42203E8f1")
    console.log(response)
    res.json({ message: response });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/win', async (req, res) => {
  const { wallet } = req.body;
  const contract = getWinContract();
  const response = await contract.playerWins(wallet);
  console.log(response)
  res.json({
    message: response
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: DApp API Server is running at http://localhost:${port}`);
});