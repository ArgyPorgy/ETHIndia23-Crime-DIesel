import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import { ethers } from "ethers";
// Creating a random signer from a wallet, ideally this is the wallet you will connect

async function pushCall(){
const privetkey = "c5df9f4535944d8e3df7b5801e5552a9974f60b565af17b4e9b2ace1442308ce";
const signer = new ethers.Wallet(`0x${privetkey}`);
const userAlice = await PushAPI.initialize(signer, { env: CONSTANTS.ENV.STAGING });
// Push channel address
const pushChannelAdress = "0x998F8Fca5845908E83FFe299b98eC3F5c05b3093";
// Subscribe to push channel
await userAlice.notification.subscribe(
  `eip155:11155111:${pushChannelAdress}`,
);
try
{

  var currentDate = new Date();

// Get the current time components
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

// Format the time as a string
var formattedTime = hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
// Send notification, provided userAlice has a channel
const response = await userAlice.channel.send(["*"], { 
  notification: {
    title: "New fir Case",
    body: `Submitted at: ${formattedTime}`,
  },
});

console.log("success");
}
catch{
  alert("error")
}

}

pushCall();
