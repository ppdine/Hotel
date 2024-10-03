const form = document.getElementById("contact-form");
const successModal = document.getElementById("success-modal");
const errorModal = document.getElementById("error-modal");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  // Giữ nguyên phần validation
  // Validate first name
  const firstName = form.elements["first--name"].value.trim();
  const firstNameError = document.getElementById("first-name-error");
  if (firstName === "") {
    firstNameError.style.display = "block";
    isValid = false;
  } else {
    firstNameError.style.display = "none";
  }

  // Validate last name
  const lastName = form.elements["last--name"].value.trim();
  const lastNameError = document.getElementById("last-name-error");
  if (lastName === "") {
    lastNameError.style.display = "block";
    isValid = false;
  } else {
    lastNameError.style.display = "none";
  }

  // Validate email
  const email = form.elements["your--email"].value.trim();
  const emailError = document.getElementById("email-error");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email === "" || !emailPattern.test(email)) {
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  // Validate province
  const province = form.elements["province"].value;
  const provinceError = document.getElementById("province-error");
  if (province === "Chọn tỉnh") {
    provinceError.style.display = "block";
    isValid = false;
  } else {
    provinceError.style.display = "none";
  }

  // Validate phone number
  const phoneNumber = form.elements["phone--number"].value.trim();
  const phoneError = document.getElementById("phone-error");
  const phonePattern = /^[0-9]{10}$/; // Adjust the pattern as needed
  if (phoneNumber === "" || !phonePattern.test(phoneNumber)) {
    phoneError.style.display = "block";
    isValid = false;
  } else {
    phoneError.style.display = "none";
  }

  // Validate support message
  const support = form.elements["support"].value.trim();
  const supportError = document.getElementById("support-error");
  if (support === "") {
    supportError.style.display = "block";
    isValid = false;
  } else {
    supportError.style.display = "none";
  }
  if (isValid) {
    const serviceID = "service_230604";
    const templateID = "template_8sazrxy";
    const publicKey = "4esUeR_pVeF6vMYTb";

    const templateParams = {
      firstName: form.elements["first--name"].value.trim(),
      lastName: form.elements["last--name"].value.trim(),
      email: form.elements["your--email"].value.trim(),
      province: form.elements["province"].value,
      phoneNumber: form.elements["phone--number"].value.trim(),
      support: form.elements["support"].value.trim(),
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      function (response) {
        showModal("success-modal");
        form.reset();
      },
      function (error) {
        showModal("error-modal");
      }
    );
  }
});

function showModal(modalId) {
  document.getElementById(modalId).classList.add("show");
}

function closeModal(modalId = "success-modal") {
  document.getElementById(modalId).classList.remove("show");
}

// Đóng modal khi click bên ngoài
window.onclick = (function (event) {
  if (event.target.classList.contains("modal-overlay")) {
    closeModal(event.target.id);
  }
})(
  // Khởi tạo EmailJS
  function () {
    emailjs.init("NHIuUc5IHW_j58YBnugXR");
  }
)();
