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
