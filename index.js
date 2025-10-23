const avatarInput = document.getElementById("FileInput");
const avatarImage = document.getElementById("avatar");
const menuButton = document.getElementById("menuBtn");
const menuBar = document.getElementById("menuB");
const lineOne = document.getElementById("line1");
const lineTwo = document.getElementById("line2");


if (avatarInput && avatarImage) {
  avatarInput.addEventListener("change", function (event) {
    if (event.target.files && event.target.files[0]) {
      const uploadedFile = event.target.files[0];

      const imageUrl = URL.createObjectURL(uploadedFile);
      avatarImage.src = imageUrl;
      console.log("Avatar updated with local URL:", imageUrl);
    }
  });
}

function animate() {
  menuButton.addEventListener("click", () => {
    menuBar.classList.toggle("active");
    // lineOne.classList.toggle("tog1");
    // lineOne.style.rotate='44deg'
    // lineTwo.classList.toggle('tog2');
    // lineTwo.style.rotate='-44deg'
  });

}

animate();

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("test-contact-success");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  document.querySelectorAll(".error").forEach((err) => (err.textContent = ""));

  const name = form.querySelector("#contact-name");
  const email = form.querySelector("#contact-email");
  const subject = form.querySelector("#contact-subject");
  const message = form.querySelector("#contact-message");

  if (!name.value.trim()) {
    valid = false;
    document.getElementById("test-contact-error-name").textContent =
      "Full name is required.";
  }

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!email.value.trim()) {
    valid = false;
    document.getElementById("test-contact-error-email").textContent =
      "Email is required.";
  } else if (!emailPattern.test(email.value.trim())) {
    valid = false;
    document.getElementById("test-contact-error-email").textContent =
      "Please enter a valid email.";
  }

  if (!subject.value.trim()) {
    valid = false;
    document.getElementById("test-contact-error-subject").textContent =
      "Subject is required.";
  }

  if (!message.value.trim()) {
    valid = false;
    document.getElementById("test-contact-error-message").textContent =
      "Message is required.";
  } else if (message.value.trim().length < 10) {
    valid = false;
    document.getElementById("test-contact-error-message").textContent =
      "Message must be at least 10 characters.";
  }

  if (valid) {
    successMessage.hidden = false;
    form.reset();
  } else {
    successMessage.hidden = true;
  }
});
