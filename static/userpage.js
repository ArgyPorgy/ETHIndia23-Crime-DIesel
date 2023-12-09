// 0x0bC497a90F7162DF42978B7c3a6014083393680E --> contract Address polygon
// 0xd9145CCE52D386f254917e481eB44e9943F39138 -> address arb

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
document.addEventListener("DOMContentLoaded", function () {
    const openFormButton = document.getElementById("openFormButton");
    const formContainer = document.getElementById("formContainer");

    let x = 0;
    openFormButton.addEventListener("click", function () {
        // Show the form container
        if (x == 0) {

            formContainer.classList.remove("hidden");
            x =1 ;
        }
else{
    formContainer.classList.add("hidden");
    x = 0;
}
    });

});



function closeFIRDetails() {
    // Hide the details container
    const detailsContainer = document.querySelector('.firWrapper');
    detailsContainer.style.display = 'none';
    
}
let showFir = false;

function displayFIRs(userFIRs) {
    const container = document.getElementById('firContainer');
    container.innerHTML = '';
    // Iterate over user's FIRs and create individual DIVs
    userFIRs.forEach((fir, index) => {
        const firDiv = document.createElement('div');
        firDiv.classList.add('firCard');

        //creating the view details menu card
        //from here
        const detailsContainer = document.getElementById('firDetailsContainer');
        const detailsDiv = document.createElement('div');
        detailsDiv.className = `firDetails${fir.id}`;
        detailsDiv.classList.add("fileDetailsGeneral");
        detailsDiv.setAttribute("style", "display: none;")
        

        detailsDiv.innerHTML = `
    
        <p>Case ID: ${fir.id}</p>
        <p>Made By: ${fir.inCharge}</p>
        <p>Title: ${fir.title}</p>
        <p>Description: ${fir.description}</p>
        <p>Approved: ${fir.approved ? 'Yes' : 'No'}</p>
        <p>Resolved: ${fir.resolved ? 'Yes' : 'No'}</p>
        <p>Approval Remark: ${fir.approvalRemark}</p>
        <!-- Add more details as needed -->

        <!-- Add a button to close the details -->
        <button id="closeDetailsFir" onclick="document.getElementById('firDetailsContainer').style.display = 'none';">Close</button>
    `; 
detailsContainer.appendChild(detailsDiv);

        //till here


        // Add FIR details to the DIV
        firDiv.innerHTML = `
            <p>FIR ID: ${fir.id}</p>
            <br>
            <p>Title: ${fir.title}</p>
            <br>

            <!-- Click event to show FIR details when clicked -->
            <button onclick="showFIRDetails(${fir.id})">View Details</button>
        `;

        container.appendChild(firDiv);

        if ((index + 1) % 4 === 0) {
            const clear = document.createElement('br');
            // Clear start a new line
            container.appendChild(clear);
        }
    });
    container.style.display = "flex";
    document.querySelector("#SeeFirButton").style.marginTop = "-50px";
    document.querySelector("#SeeFirButton").innerText= "Hide FIRs";
    showFir = true;
}


function showFIRDetails(firID) {
    // Access the FIR details container
    
    const allDetailsDiv = document.querySelectorAll(".fileDetailsGeneral");
    allDetailsDiv.forEach(function(element) {
        element.style.display = 'none';
    });
    // Clear previous FIR details
    const detailsDiv = document.querySelector(`.firDetails${firID}`);
    const detailsContainer = document.getElementById('firDetailsContainer');
    detailsDiv.style.display = "flex";
    detailsContainer.style.display = "block";

    // Append the FIR details DIV to the container
    

    // Show the details container
   
}



async function SeeAllFir() //function that will filter only the users 
{

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const accNo = accounts[0];
    // let fullString = ""
    try {
        const firCount = await contract.methods.idplus().call();

        const userFIRs = []

        for (let id = 1; id < firCount; id++) {

            const firDetails = await contract.methods.alltheComplaints(id).call();
            // fullString+= JSON.stringify(firDetails) + " " for testing of Ai chatbot(if we do)
            // Check if the FIR was made by the connected user

            if (firDetails.inCharge.toLowerCase() === accNo.toLowerCase()) {

                // Save FIR made by the user

                userFIRs.push(firDetails);

            }
        }
        // console.log(fullString); for chatBOT
        displayFIRs(userFIRs);
        showFir = true;
    }
    catch (error) {
        console.error(error);
        showbadAlert('An error occured fetching the details. Please try again later!', 2000);
    }
}



// Event listener for the button click
document.getElementById("SeeFirButton").addEventListener("click", function() {
// getUserData(); // To get user-specific data
if(showFir == false)
{

    showgoodAlert("Please wait while we fetch your details",2000);
    SeeAllFir();
    
}
else{
    closeFIRDetails();
    showFir = false;
    document.querySelector("#SeeFirButton").innerText = "Show FIR"
}
});