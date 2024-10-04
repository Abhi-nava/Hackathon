// Toggle between login and signup forms
function toggleSignup() {
    const loginForm = document.querySelector('.right > div');
    const signupForm = document.getElementById('signup-form');
    
    if (signupForm.style.display === "none") {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    } else {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    }
}

// Sign up function to save user details in localStorage
function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (email && password) {
        const user = { email, password };
        localStorage.setItem(email, JSON.stringify(user)); // Store user data
        alert("Account created successfully! You can now log in.");
        toggleSignup(); // Switch back to login form
    } else {
        alert("Please fill in all fields.");
    }
}

// Login function to authenticate user
function login() {
    const email = document.getElementById('email').value.trim(); // Trim spaces
    const password = document.getElementById('password').value.trim(); // Trim spaces

    const userData = JSON.parse(localStorage.getItem(email));

    if (userData && userData.password === password) {
        alert("Login successful!");
        // Redirect to another page or perform desired actions
        // window.location.href = "dashboard.html"; // Example redirect
        window.location.href = "home.html";
    } else {
        alert("Invalid email or password.");
    }
}
