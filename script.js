document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed!");

  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // retrieve input elements
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    const messages = [];

    if (username.length < 3) {
      messages.push("username must be at least 3 characters long.");
      isValid = false;
    }

    if (email.includes("@") === false || email.includes(".") === false) {
      isValid = false;
      messages.push("please enter a valid email address.");
    }

    if (password.length < 8) {
      isValid = false;
      messages.push("password must be at least 8 characters long.");
    }

    // display feedback logic
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
      form.submit();
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
