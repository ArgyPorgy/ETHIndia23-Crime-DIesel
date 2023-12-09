import { CONSTANTS, PushAPI } from '@pushprotocol/restapi';
import { ethers } from 'ethers';

// Creating a random signer from a wallet, ideally this is the wallet you will connect
//user
const privetkey = "980faad6ce73dd1be6d847fadee6a20e0c9137b237b0ccea5363f629a7a7ac74";
const signerAlice = new ethers.Wallet(`0x${privetkey}`);

//org
const signerBobAddress = "964836a879a9301e17fc9f7514df85e4d408e1bf978cc56d4093f40bb958a3c9";
const signerBob = new ethers.Wallet(`0x${signerBobAddress}`);


// Send a message to Bob
const aliceMessagesBob = await signerAlice.chat.send(bobWalletAddress, {
  content: "I need help !! ",
});

// Initialize Stream
const stream = await signerAlice.initStream([CONSTANTS.STREAM.CHAT]);

// Configure stream listen events and what to do
stream.on(CONSTANTS.STREAM.CHAT, (message) => {
  console.log(message);
});

// Connect Stream
stream.connect();

// // Initialize wallet user, pass 'prod' instead of 'staging' for mainnet apps
// const userAlice = await PushAPI.initialize(signerAlice, { env: CONSTANTS.ENV.PROD });
// const userBob = await PushAPI.initialize(signerBob, { env: CONSTANTS.ENV.PROD });

// // Initialize stream but don't connect yet
// // Checkout all chat stream listen options - https://push.org/docs/chat/build/stream-chats/
// const streamAlice = await userAlice.initStream(
//   [
//     CONSTANTS.STREAM.CHAT,
//     CONSTANTS.STREAM.CHAT_OPS,
//     CONSTANTS.STREAM.CONNECT
//   ]
// );


// const streamBob = await userBob.initStream(
//   [
//     CONSTANTS.STREAM.CHAT,
//     CONSTANTS.STREAM.CHAT_OPS,
//     CONSTANTS.STREAM.CONNECT
//   ]
// );

// let aliceConnected = false;
// let bobConnected = false;

// // IMPORTANT: Setup stream events before stream.connect()
// // Connect stream - Alice
// streamAlice.on(CONSTANTS.STREAM.CONNECT, () => {
//   aliceConnected = true;
//   console.log('Alice Stream Connected');

//   // Call sendMessage which checks if both Alice and Bob are connected
//   // amd sends a message from Alice to Bob
//   sendMessage();
// });

// // Connect stream - Bob
// streamBob.on(CONSTANTS.STREAM.CONNECT, () => {
//   bobConnected = true;
//   console.log('Bob Stream Connected');

//   // Call sendMessage which checks if both Alice and Bob are connected
//   // amd sends a message from Alice to Bob
//   sendMessage();
// });

// const sendMessage = async () => {
//   if (aliceConnected && bobConnected) {
//     // Send a message to Bob after socket connection so that messages as an example
//     console.log('Sending message from Alice to Bob as we know Alice and Bob stream are both connected and can respond');
//     console.log('Wait few moments to get messages streaming in');
//     await userAlice.chat.send(signerBob.address, {
//       content: "Gm gm! It's a me... Alice!",
//     });
//   }
// };

// // Listen for chat messages - Alice
// streamAlice.on(CONSTANTS.STREAM.CHAT, (chat) => {
//   if (chat.origin === 'other') { // means chat that is coming is sent by other (not self as stream emits both your and other's messages)
//     console.log('Alice received chat message', chat);
//   }
// });

// // Listen for chat messages - Bob
// streamBob.on(CONSTANTS.STREAM.CHAT, async (chat) => {
//   if (chat.origin === 'other') { // means chat that is coming is sent by other (not self as stream emits both your and other's messages)
//     console.log('Bob received chat message', chat);
  
//     // Since Bob and Alice are not connected, approve Alice's request
//     await userBob.chat.accept(chat.from);
//     console.log('Bob approved Alice, only required once per chat', chat);

//     // send response to Alice
//     await userBob.chat.send(chat.from, {
//       content: "Nice to meet you Alice! This is Bob!",
//     });

//     // disconnect the streams
//     await streamAlice.disconnect();
//     await streamBob.disconnect();
//   }
// });

// // Listen for chat ops - Alice
// streamAlice.on(CONSTANTS.STREAM.CHAT_OPS, (chatops) => {
//   console.log('Alice received chat ops', chatops);
// });

// // Listen for chat ops - Bob
// streamBob.on(CONSTANTS.STREAM.CHAT_OPS, (chatops) => {
//   console.log('Bob received chat ops', chatops);
// });

// // Listen for disconnect - Alice
// streamAlice.on(CONSTANTS.STREAM.DISCONNECT, () => {
//   console.log('Alice disconnected');
// });

// // Listen for disconnect - Bob
// streamBob.on(CONSTANTS.STREAM.DISCONNECT, () => {
//   console.log('Bob disconnected');
// });

// // Events and methods for socket connection are set, now connect stream
// await streamAlice.connect();
// await streamBob.connect();*/