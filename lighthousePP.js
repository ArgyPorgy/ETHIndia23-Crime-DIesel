const lighthouse = require('@lighthouse-web3/sdk');

// Your code here
const file = process.argv[2];
async function uploadFile(){
const uploadResponse = await lighthouse.upload(
    file, 
    '418fbc33.a80cbd535b324af3b22a42f6a5506495' //my apikey
  );
console.log(uploadResponse);
}

uploadFile();
  

