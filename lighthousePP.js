const lighthouse = require('@lighthouse-web3/sdk');

// Your code here
const file = process.argv[2];
// const file = "README.md"
async function uploadFile(){
const uploadResponse = await lighthouse.upload(
    file, 
    '313551a9.a08700c86a514f4185a29541f928f6e8' //my apikey
  );
console.log(uploadResponse);
}

uploadFile();
  

