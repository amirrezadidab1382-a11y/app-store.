// const container = document.getElementById("container");
// const registerBtn = document.getElementById("register");
// const loginBtn = document.getElementById("Login")

// registerBtn.addEventListener("click", () => {
//     container.classList.add("active");
// });

// loginBtn.addEventListener("click", () => {
//     loginBtn.classList.remove("active")
// });
// const logoutButton = document.getElementById("log-out")

// logoutButton.addEventListener("click", function () {
//     localStorage.removeItem("username");
//     localStorage.removeItem("password");

//     window.location.href = "login.html"
// })



// const signupForm = document.getElementById("signupForm");
// const profile = document.getElementById("profile");

// const savedUsername = localStorage.getItem("username");
// const savedPassword = localStorage.getItem("password")


// if (savedUsername) {

//     signupForm.style.display = "none";

//     profile.style.display = "block";

//     document.getElementById("profileUsername").textContent = savedUsername;
//     document.getElementById("profilepassword").textContent = savedPassword

// } else {

//     signupForm.style.display = "block";

//     profile.style.display = "none";

// }


// signupForm.addEventListener("submit", function(event) {

//     event.preventDefault();

//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;


//     localStorage.setItem("username", username);
//     localStorage.setItem("password", password);


//     location.reload();

// });
const menuBtn = document.querySelector(".mobile-menu-button");
const navLinks = document.querySelector(".desktop-nav");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    });