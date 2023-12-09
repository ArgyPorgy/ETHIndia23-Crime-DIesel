

// Import Push SDK & Ethers
import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import { ethers } from "ethers";

// Creating a random signer from a wallet, ideally this is the wallet you will connect
const privetkey = "980faad6ce73dd1be6d847fadee6a20e0c9137b237b0ccea5363f629a7a7ac74";
const signer = new ethers.Wallet(`0x${privetkey}`);

//org
const signerBobAddress = "964836a879a9301e17fc9f7514df85e4d408e1bf978cc56d4093f40bb958a3c9";
const signerBob = new ethers.Wallet(`0x${signerBobAddress}`);


// Send a message to Bob
const aliceMessagesBob = await signerAlice.chat.send(bobWalletAddress, {
  content: "I need help !! ",
});

// Initialize Stream
const stream = await userAlice.initStream([CONSTANTS.STREAM.CHAT]);

// Configure stream listen events and what to do
stream.on(CONSTANTS.STREAM.CHAT, (message) => {
  console.log(message);
  
});

// Connect Stream
stream.connect();

