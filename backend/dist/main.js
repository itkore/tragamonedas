"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(body_parser_1.default.json());
app.options('*', (0, cors_1.default)({ origin: "*" }));
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
app.post('/api/play', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { wallet } = req.body;
    // const contract = getSlotMachineContract();
    // const play_response = await contract.canPlay(wallet);
    // var message = ""
    // if (play_response) {
    //   const game_response = await contract.playGame(wallet);
    //   message = "Juego realizado con exito";
    // }
    // else {
    //   message = "No tiene suficiente saldo para jugar"
    // }
    res.json({
        message: wallet
    });
}));
app.post('/api/win', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { wallet } = req.body;
    // const contract = getSlotMachineContract();
    // const response = await contract.distributeWinnings(wallet);
    var message = "qwe";
    res.json({
        message: message
    });
}));
app.listen(port, () => {
    console.log(`⚡️[server]: DApp API Server is running at http://localhost:${port}`);
});
