
function showgoodAlert(message, duration) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert';
    alertDiv.innerHTML = message;
    document.body.appendChild(alertDiv);
    alertDiv.style.display = 'block';
    setTimeout(function () {
        alertDiv.style.display = 'none';
    }, duration || 2000);
    return 0;
}
function showbadAlert(message, duration) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alertbad';
    alertDiv.innerHTML = message;
    document.body.appendChild(alertDiv);
    alertDiv.style.display = 'block';
    setTimeout(function () {
        alertDiv.style.display = 'none';
    }, duration || 2000);
    return 0;
}

let a = false
let x = 0
var caseForm = document.getElementById("caseForm");
// we will not use require web3 because we are not using node modules
// const {Web3} = require('web3');

const web3 = new Web3("https://sepolia-rollup.arbitrum.io/rpc"); // Replace with the URL of your Ethereum node
// const contractAddress = '0x27C717e5Ab809Ca63538bd7dA2DD5254e0ac6e84'; // Replace with the actual contract address
const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'; //this is the new contract address made on (2/12/23) at 10pm
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "officer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "approvalRemark",
				"type": "string"
			}
		],
		"name": "ComplaintApproved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "inCharge",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			}
		],
		"name": "ComplaintFiled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "officer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "rejectionRemark",
				"type": "string"
			}
		],
		"name": "ComplaintRejected",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "resolveStatement",
				"type": "string"
			}
		],
		"name": "ComplaintResolved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "hashlight",
				"type": "string"
			}
		],
		"name": "DataStored",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "officer",
				"type": "address"
			}
		],
		"name": "OfficerChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "mainEvidence",
				"type": "string"
			}
		],
		"name": "gotEvidence",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_evidence",
				"type": "string"
			}
		],
		"name": "addEvidence",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "alltheComplaints",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "inCharge",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "resolved",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "approvalRemark",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "evidence",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_approvalRemark",
				"type": "string"
			}
		],
		"name": "approveComplaint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "approved",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_evidenceHash",
				"type": "string"
			}
		],
		"name": "caseRegistration",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "changeOfficer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			}
		],
		"name": "fileComplaint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getEvidences",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "idplus",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "officer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "pending",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_reason",
				"type": "string"
			}
		],
		"name": "removeComplaint",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_resolveStatement",
				"type": "string"
			}
		],
		"name": "resolve",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]// Replace with your contract ABI // new abi at 10pm  // Replace with the actual ABI of your contract

const contract = new web3.eth.Contract(contractABI, contractAddress);


function openCaseForm() {
	if (x == 0) {

		caseForm.style.display = "block";
		x = 1;
		if (a == true)
			toggleCases()
	}
	else {
		caseForm.style.display = "none";
		x = 0;
	}
}

function toggleCases() {
	if (a == false) {
		a = true;
		document.querySelector(".viewCaseForm").style.display = "block";
	}
	else {
		document.querySelector(".viewCaseForm").style.display = "none";
		a = false;
	}
}

async function searchCase(id) {
	const web3 = new Web3("https://sepolia-rollup.arbitrum.io/rpc");
	const contract = new web3.eth.Contract(contractABI, contractAddress);
	try {
		const complaint = await contract.methods.alltheComplaints(id).call();
		return complaint;

	}
	catch (error) {
		console.error('Error fetching case data:', error);

	}
}
function closeFir() {
	document.getElementById("resultContainer").style.display = "none";
}
function displayResult(result) {
	// Access the resultContainer


	const resultContainer = document.getElementById('resultContainer');

	// Clear previous results
	resultContainer.innerHTML = '';
	const butElem = `<button class = "closeFir" onclick="closeFir();">x</button>`;
	resultContainer.innerHTML += butElem;
	resultContainer.style = "block";



	// Extract relevant information
	const id = result[0];
	const inCharge = result[1];
	const title = result[2];
	const description = result[3];
	const approved = result[4];
	const resolved = result[5];
	const exists = result[6];
	const approvalRemark = result[7];

	// Create a table to display the result
	const table = document.createElement('table');
	const approvalBtn = `<button onclick = "approveFir();" id = "approvalBtn">Approve</button>`
	// Create a row for each piece of information
	const rows = [
		['Case ID', id],
		['Made By', inCharge],
		['Name', title],
		['Description', description],
		['Exists', approved],
		['Approved', resolved],
		['Resolved', exists],
		['Approval Remark', approvalRemark]
	];
	let caseId;
	// Iterate over the rows and create table cells
	for (const [label, value] of rows) {
		const row = table.insertRow();
		const cell1 = row.insertCell(0);
		const cell2 = row.insertCell(1);
		if (label === 'Case ID')
			caseId = value;
		cell1.textContent = label;
		cell2.textContent = value;
		if (label === 'Approved' || label === 'Resolved') {
			// const cell3 = row.insertCell(2);
			const approveButton = createButton(label, caseId, value);
			cell2.appendChild(approveButton);
		}
	}

	// Append the table to the resultContainer
	resultContainer.appendChild(table);
	resultContainer.innerHTML += `
	<button id="getEvidenceButton" onclick= "viewEvidences(${id})" >View Evidences</button>
	<button id="sendEvidenceButton" onclick= "setEvidences(${id})" >Add New Evidence</button>
	`

}

function displayEvidences(evidenceArray)
{
	/*
	this portion is left to be done. (now done...)
	- soham
	*/
	const evilist = document.querySelector("#eviList");
	evilist.innerHTML = '';

    // Iterate over the evidenceArray and create list items
    evidenceArray.forEach((hash, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a style="color: white;" href="https://gateway.lighthouse.storage/ipfs/${hash}" target="_blank">Evidence ${index+1}</a>`;
        evilist.appendChild(listItem);
    });
	document.querySelector('.evidenceContainer').style.display = "block";
}

async function ApprovedFir(button) {
	const web3 = new Web3(window.ethereum);

	const contract = new web3.eth.Contract(contractABI, contractAddress);
	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
	const accNo = accounts[0];
	//have to add more features

	try {

		closeFir();

		await contract.methods.approveComplaint(button.getAttribute('data-id'), "approve message").send({
			from: accNo,
		});
		showgoodAlert("Successfully approved! ", 2000);

	}
	catch (error) {
		showbadAlert("Error approving! Try again...", 2000);
		console.error(error);
	}


}
function createButton(work, IDval, value) {
	const button = document.createElement('button');
	button.classList.add(`${work}Btn`);
	console.log(value);
	if (value == true) {
		button.classList.add(`success`);
		button.textContent = work;
		button.setAttribute('onclick', `alert("Already ${work}!")`);

	}
	else if (value == false) {
		button.textContent = work.slice(0, -1);

		button.setAttribute('data-id', IDval);
		button.setAttribute('onclick', `${work}Fir(this);`);
	}
	return button;
}


async function ResolvedFir(button) {
	const web3 = new Web3(window.ethereum);

	const contract = new web3.eth.Contract(contractABI, contractAddress);
	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
	const accNo = accounts[0];
	//have to add more features

	try {

		closeFir();

		await contract.methods.resolve(button.getAttribute('data-id'), "Resolved").send({
			from: accNo,
		});
        showgoodAlert("Successfully Resolved! ", 2000);

	}
	catch (error) {
		showbadAlert('Error Resolving. Try Again', 2000);
		console.error(error);
	}


}
async function findCase(event) {
	try {
		event.preventDefault();
		// const searchId = document.querySelector(".searchBox").value;
		// var inputElement = form.querySelector('#searchBox');
		var searchId = document.querySelector("#searchBox");
		console.log(searchId.value);


		const rendercase = searchCase(searchId.value);
		console.log(rendercase);


		const result = await searchCase(searchId.value);

		// Display the result in the resultContainer
		displayResult(result);
	}
	catch (error) {
		
		showbadAlert('Try Again', 2000);
	}
}

function addImageField() {
	var container = document.getElementById("imageFields");
	var input = document.createElement("input");
	input.type = "file";
	input.name = "imageObj";
	input.accept = "image/*";
	container.appendChild(input);
	container.appendChild(document.createElement("br"));
}
document.getElementById("registerForm").addEventListener("submit", function () {
	console.log("Form Submit");
	// Your form submission logic here
}
);
        


document.getElementById("registerForm")
        .addEventListener("submit", function(event) {
          event.preventDefault();

          fetch("/process_hash", {
            method: "POST",
            body: new FormData(this),
          })
            .then((response) => response.json())
            .then((data) => {
              // Access the hashArray directly
              const hashArray = data.hashArray;
              const name = document.getElementById("name").value;
              const description = document.getElementById("description").value;
                
              // Now you can use the hashArray in your JavaScript code
              console.log(hashArray); // to check
                let hashString = "";
              for(let i =0 ; i<hashArray.length; i++)
              {
                
                hashString+=hashArray[i];
                if(i+1 != hashArray.length)
                {
                    hashString+="-";
                    //to seperate the values;
                }
              }
              // now the best part[we send it to mumbai]
               sendCaseRegistration(name, description, hashString);
              

            })
            .catch((error) => {
              console.error("Error:", error);
            });
        });

       
        

async function sendCaseRegistration(name, description, hashString)
{
	const web3 = new Web3(window.ethereum);

	const contract = new web3.eth.Contract(contractABI, contractAddress);
	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
	const accNo = accounts[0];

try{
    
    


			contract.methods.caseRegistration(name, description, hashString)
			.send({ from: accNo })
			.on('transactionHash', function(hash) {
				console.log('Transaction Hash:', hash);
			})
			.on('confirmation', function(confirmationNumber, receipt) {
				if (confirmationNumber === 1) {
					// The transaction is confirmed, and the receipt contains the newComplaint.id
					const newComplaintId = receipt.events.DataStored.returnValues.id;
					alert(`Complaint filed at ID: ${newComplaintId}`);
					fetch("/run_js")
          .then((response) => response.text())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));

		  
				}
			});
			
}
catch(error)
{
    console.log(error);
    alert("error");
}


}


async function viewEvidences(firID)
{
// this is a function that will call the viewEvidence fuction from solidity and 
// give us the hashes seperated by a '-'
// ekhon otakei ekta array e ante hobe :)
const web3 = new Web3("https://sepolia-rollup.arbitrum.io/rpc");
	const contract = new web3.eth.Contract(contractABI, contractAddress);
	
	try{

	
	const maxID = await contract.methods.idplus().call();
	console.log("id: ", maxID);

	if(firID>=maxID || firID<=0)
	{
		return "outofbounds";
	}
	else{
		//here we go!

		const result = await contract.methods.getEvidences(firID).call();
		const evidenceArray = result.split('-');
		console.log(evidenceArray);
		displayEvidences(evidenceArray);
		// this will return the array of the hashes
		// now i have to extract this 
		//https://gateway.lighthouse.storage/ipfs/ <--- this is the endpoint
	}
}
catch(error)
{
	print("error: ", error);
	
	alert("error");
}


}

