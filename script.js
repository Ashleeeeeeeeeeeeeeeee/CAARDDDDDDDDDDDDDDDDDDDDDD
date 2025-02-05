const correctPassword = "1437"; // Set your secret code
let enteredPassword = "";

function enterNumber(num) {
    if (enteredPassword.length < 6) {
        enteredPassword += num;
        document.getElementById("passwordInput").value = "*".repeat(enteredPassword.length);
    }
}

function clearPassword() {
    enteredPassword = "";
    document.getElementById("passwordInput").value = "";
    document.getElementById("message").textContent = "";
}

function submitPassword() {
    if (enteredPassword === correctPassword) {
        document.getElementById("message").textContent = "🎉 Access Granted! 💖";
        document.getElementById("message").style.color = "green";
        setTimeout(() => {
            window.location.href = "countdown/countdown.html"; // Redirect to countdown page
        }, 2000);
    } else {
        document.getElementById("message").textContent = "❌ Wrong Password!";
        document.getElementById("message").style.color = "red";
        enteredPassword = "";
        document.getElementById("passwordInput").value = "";
    }
}
