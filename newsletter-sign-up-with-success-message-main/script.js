// Get references to HTML elements
const submitBtn = document.getElementById("submitBtn");
const emailInput = document.getElementById("email");
const alertMessage = document.getElementById("alert");

// Event listener for the submit button
submitBtn.addEventListener("click", function (e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get and trim the value of the email input
    let emailValue = emailInput.value.trim();

    // Check if the email contains "@gmail.com" or "@yahoo.com"
    if (emailValue.includes("@gmail.com") || emailValue.includes("@yahoo.com")) {
        // Redirect to "succes.html" and store the email in local storage
        window.location.href = "succes.html";
        localStorage.setItem("userEmail", emailValue);
    } else {
        // If email does not meet conditions, add styling and display alert
        emailInput.classList.add("active-input");
        alertMessage.style.display = "block";
    }
}, false);

// Event listener for the email input
emailInput.addEventListener("click", function () {
    // Hide the alert message and remove styling on click
    alertMessage.style.display = "none";
    emailInput.classList.remove("active-input");
});
