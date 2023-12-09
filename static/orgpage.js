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

//Total web3.js part ->
const web3 = new Web3("https://rpc.public.zkevm-test.net"); // Replace with the URL of your Ethereum 
const contractAddress = '0x0bC497a90F7162DF42978B7c3a6014083393680E'; //this is the new contract address made on (9/12/23) at 3pm
const contractABI = [{
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
}]// Replace with your contract ABI // new abi at 10pm  // Replace with the actual ABI of your contract

