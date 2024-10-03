// script.js
document
  .getElementById("payment-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    document.getElementById("popup").style.display = "flex"; // Show the popup
  });

document.getElementById("close-popup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none"; // Hide the popup
});
