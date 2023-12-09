

// Import Push SDK & Ethers
import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import { ethers } from "ethers";

// Creating a random signer from a wallet, ideally this is the wallet you will connect
const privetkey = "980faad6ce73dd1be6d847fadee6a20e0c9137b237b0ccea5363f629a7a7ac74";
const signer = new ethers.Wallet(`0x${privetkey}`);

// Initialize wallet user
// 'CONSTANTS.ENV.PROD' -> mainnet apps | 'CONSTANTS.ENV.STAGING' -> testnet apps
const userAlice = await PushAPI.initialize(signer, { env: CONSTANTS.ENV.STAGING });

// This will be the wallet address of the recipient
const bobWalletAddress = "0x09baC5a40E9AB852AB9c86d32Cd79432c80d8739";

// Send a message to Bob
const aliceMessagesBob = await userAlice.chat.send(bobWalletAddress, {
  content: "ghum asche",
});

// Initialize Stream
const stream = await userAlice.initStream([CONSTANTS.STREAM.CHAT]);

// Configure stream listen events and what to do
stream.on(CONSTANTS.STREAM.CHAT, (message) => {
  console.log(message);
  
});

// Connect Stream
stream.connect();

