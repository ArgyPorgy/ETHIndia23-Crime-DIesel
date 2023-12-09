// Import Push SDK & Ethers
import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import { ethers } from "ethers";

// server.js
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const privatekey = process.env.privetkey;

// Now you can use apiKey in your Node.js code


// Creating a random signer from a wallet, ideally this is the wallet you will connect

const signer = new ethers.Wallet(`0x${privatekey}`);


// Initialize wallet user
// 'CONSTANTS.ENV.PROD' -> mainnet apps | 'CONSTANTS.ENV.STAGING' -> testnet apps
const userAlice = await PushAPI.initialize(signer, { env: CONSTANTS.ENV.STAGING });

// This will be the wallet address of the recipient

const signerBobAddress = "0x998F8Fca5845908E83FFe299b98eC3F5c05b3093";


// Send a message to Bob
const aliceMessagesBob = await userAlice.chat.send(signerBobAddress, {
  content: "Gm gm! It's a me... Mario",
});

// Initialize Stream
const stream = await userAlice.initStream([CONSTANTS.STREAM.CHAT]);

// Configure stream listen events and what to do
stream.on(CONSTANTS.STREAM.CHAT, (message) => {
  console.log(message);
});

// Connect Stream
stream.connect();




