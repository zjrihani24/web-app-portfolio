document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var fullName = document.getElementById("fullName").value.trim();
  var email = document.getElementById("email").value.trim();
  var country = document.getElementById("country").value.trim();
  var comments = document.getElementById("comments").value.trim();

  if (fullName === "" || email === "" || country === "" || comments === "") {
    alert("Please fill in all fields before submitting.");
    return;
  }

  alert("Form submitted successfully!");
});
