document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed!");

  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // Defensive checks: ensure elements exist
  if (!form) {
    console.error('No form found with id="registration-form"');
    return;
  }
  if (!feedbackDiv) {
    console.error('No feedback element found with id="form-feedback"');
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userName = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    // Ensure inputs exist
    if (!userName || !email || !password) {
      console.error(
        "One or more input elements were not found (check your IDs)."
      );
      feedbackDiv &&
        (feedbackDiv.textContent = "Form markup error: check input IDs.");
      feedbackDiv && (feedbackDiv.style.color = "#dc3545");
      return;
    }

    // Trim values properly
    const userValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // Reset field styles
    userName.style.backgroundColor = "";
    email.style.backgroundColor = "";
    password.style.backgroundColor = "";

    // Validation
    let isValid = true;
    const message = [];

    if (userValue.length < 3) {
      isValid = false;
      message.push("Username must be at least 3 characters long.");
      userName.style.backgroundColor = "rgba(220,53,69,0.1)";
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i; // allow 2+ char TLD, case-insensitive
    if (!emailPattern.test(emailValue)) {
      isValid = false;
      message.push("Please enter a valid email address.");
      email.style.backgroundColor = "rgba(220,53,69,0.1)";
    }

    if (passwordValue.length < 8) {
      isValid = false;
      message.push("Password must be at least 8 characters long.");
      password.style.backgroundColor = "rgba(220,53,69,0.1)";
    }

    // Show feedback
    if (feedbackDiv) {
      if (isValid) {
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745";
        // submit only when valid
        form.submit();
      } else {
        feedbackDiv.innerHTML = message.join("<br>");
        feedbackDiv.style.color = "#dc3545";
        feedbackDiv.style.display = "block";
      }
    } else {
      // If there's no feedbackDiv, still log
      console.log("Validation result:", isValid, message);
      if (isValid) form.submit();
    }
  });
});
