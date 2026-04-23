const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === "" || passwordValue === "") {
        alert("Please fill in all fields");
        return;
    }

    if (passwordValue.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    alert("Login successful 💖");

    // ✅ CLEAR INPUTS AFTER LOGIN
    email.value = "";
    password.value = "";
});