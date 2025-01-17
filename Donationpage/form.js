document
  .getElementById("donation-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous errors
    clearErrors();

    // Get form values
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const donationAmount = document
      .getElementById("donation-amount")
      .value.trim();

    let valid = true;

    // Validate first name
    if (firstName === "") {
      showError("first-name-error", "First Name is required.");
      valid = false;
    }

    // Validate last name
    if (lastName === "") {
      showError("last-name-error", "Last Name is required.");
      valid = false;
    }

    // Validate email
    if (email === "") {
      showError("email-error", "Email is required.");
      valid = false;
    } else if (!isValidEmail(email)) {
      showError("email-error", "Invalid Email.");
      valid = false;
    }

    // Validate donation amount
    if (donationAmount === "") {
      showError("donation-amount-error", "Donation Amount is required.");
      valid = false;
    } else if (isNaN(donationAmount) || donationAmount <= 0) {
      showError("donation-amount-error", "Invalid Donation Amount.");
      valid = false;
    }

    if (valid) {
      // Submit the form if all fields are valid
      document.getElementById("donation-form").submit();
    }
  });

function showError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

function clearErrors() {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach(function (element) {
    element.textContent = "";
  });
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

window.aichatbotApiKey = "dfa2910e-2ef2-42a2-b2ef-5dbec8fd78dd";
window.aichatbotProviderId = "f9e9c5e4-6d1a-4b8c-8d3f-3f9e9c5e46d1";
(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://script.chatlab.com/aichatbot.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "dfa2910e-2ef2-42a2-b2ef-5dbec8fd78dd");
