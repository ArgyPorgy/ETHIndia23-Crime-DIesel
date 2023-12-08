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

document.addEventListener("DOMContentLoaded", async function () {
    const loginButton1 = document.getElementById("loginbuttonuser");
    const loginButton2 = document.getElementById("loginbuttonorg");
    const statusElement = document.getElementById("status");

    // const [title,setTitle] = useState("");
    // const [description,setDescription] = useState("");

    

    loginButton1.addEventListener("click", async () => {
        if (typeof window.ethereum === "undefined") {
            statusElement.textContent = "Metamask not detected. Please install Metamask to use this feature.";
            return;
        }

        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const selectedAccount = accounts[0];
            sessionStorage.setItem('metamask_logged_in', 'true');
            showgoodAlert(`Logged in with address: ${selectedAccount}`)

            //lemme try something from here

            
                const response = await fetch('/notify_login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        loggedIn: true,
                        
                    }),
                });
            
                if (response.ok) {
                    alert('Server notified about login status');
                    window.location.href = 'userpage.html';
                } else {
                    alert('Failed to notify server about login status');
                }
            
            

            //to here
            

        } catch (error) {
            console.error(error);
            statusElement.textContent = "Login failed. Please try again.";
        }
    });
    
    loginButton2.addEventListener("click", async () => {
        if (typeof window.ethereum === "undefined") {
            statusElement.textContent = "Metamask not detected. Please install Metamask to use this feature.";
            return;
        }

        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const selectedAccount = accounts[0];
            sessionStorage.setItem('metamask_logged_in', 'true');
            showgoodAlert(`Logged in with address: ${selectedAccount}`)
            window.location.href = 'orgpage.html';

        } catch (error) {
            console.error(error);
            statusElement.textContent = "Login failed. Please try again.";
        }
    })   
});
