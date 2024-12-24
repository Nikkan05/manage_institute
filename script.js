// const wrapper = document.querySelector(".wrapper");
// const loginLink = document.querySelector(".login-link");
// const registerLink = document.querySelector(".register-link");
// const btnPopup = document.querySelector(".btnLogin-popup");
// const iconClose = document.querySelector(".icon-close");


// registerLink.addEventListener("click", () => {
//   wrapper.classList.add("active");
// });

// loginLink.addEventListener("click", () => {
//   wrapper.classList.remove("active");
// });
// btnPopup.addEventListener("click", () => {
//   wrapper.classList.add("active-popup");
// });

// iconClose.addEventListener("click", () => {
//   wrapper.classList.remove("active-popup");
// });


const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
const btnLogout = document.querySelector(".btnLogout");

// Check login status on page load
if (localStorage.getItem("isLoggedIn") === "true") {
  btnPopup.style.display = "none"; // Hide button if user is already logged in
}

// Handle login form submission
const loginForm = document.querySelector(".form-box.login form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission (demo purposes)

  // Simulate login success
  localStorage.setItem("isLoggedIn", "true"); // Store login status in localStorage
  btnPopup.style.display = "none"; // Hide the Login/Register button
  wrapper.classList.remove("active-popup"); // Close the popup
  alert("Login Successful!"); // Feedback for the user
});

// Handle logout (Optional - you can add this feature if needed)
function handleLogout() {
  localStorage.removeItem("isLoggedIn"); // Clear login status from localStorage
  btnPopup.style.display = "block"; // Show the Login/Register button
}

// Toggle between Login and Register forms
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

// Show the popup on button click
btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

// Close the popup
iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});


// Show Logout button if logged in
if (localStorage.getItem("isLoggedIn") === "true") {
  btnLogout.style.display = "block"; // Show logout button
}

btnLogout.addEventListener("click", () => {
  handleLogout(); // Call logout function
  btnLogout.style.display = "none"; // Hide logout button
  alert("Logged out successfully!");
});
