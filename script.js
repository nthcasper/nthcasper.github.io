document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll(".nav-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // Form validation with user-friendly feedback
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
      let valid = true;

      // Reset previous error messages
      document.querySelectorAll(".error-message").forEach((el) => el.remove());

      // Name validation
      if (name.value.trim() === "") {
        displayError(name, "Please enter your name.");
        valid = false;
      }

      // Email validation
      if (!validateEmail(email.value.trim())) {
        displayError(email, "Please enter a valid email address.");
        valid = false;
      }

      // Message validation
      if (message.value.trim() === "") {
        displayError(message, "Please enter a message.");
        valid = false;
      }

      if (!valid) return;

      // Success feedback
      const successMessage = document.createElement("div");
      successMessage.className = "alert alert-success mt-3";
      successMessage.textContent =
        "Thank you for reaching out, " +
        name.value +
        "! I will get back to you soon.";
      document.getElementById("contact-form").appendChild(successMessage);

      setTimeout(() => successMessage.remove(), 5000);
      document.getElementById("contact-form").reset();
    });

  function displayError(input, message) {
    const error = document.createElement("div");
    error.className = "error-message text-danger mt-1";
    error.textContent = message;
    input.parentElement.appendChild(error);
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // ASCII Cloud Animation
  const cloudVarieties = [
    `
        .--.
     .-(    )
    ( ___).__)__)`,
    `
        .--.
     .-(    )._
    ( _).__)____)`,
    `
        .---.
     .-(     ).
    ( __) __)__)`,
    `
         .--.
     .-(     ).
    ( __)__).__)`,
  ];

  function createCloud() {
    const cloudContainer = document.querySelector(".cloud-container");
    if (!cloudContainer) {
      console.error("Cloud container not found.");
      return;
    }
    const cloud = document.createElement("div");
    cloud.classList.add("cloud");
    cloud.textContent =
      cloudVarieties[Math.floor(Math.random() * cloudVarieties.length)];
    cloud.style.top = `${Math.random() * 70 + 10}%`;
    cloud.style.left = "-10%";
    cloud.style.animationDuration = `${Math.random() * 15 + 10}s`;
    cloudContainer.appendChild(cloud);

    // Remove cloud after it exits the screen
    setTimeout(() => {
      cloud.remove();
    }, 20000);
  }

  // Generate clouds at intervals
  setInterval(createCloud, 4000);
});
