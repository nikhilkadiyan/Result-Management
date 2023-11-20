document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("profileform");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevents the form from submitting by default
  
      // Function to display error messages with red color and small text size
      function displayError(field, message) {
        const errorContainer = document.querySelector(`#${field}-error`);
        errorContainer.textContent = message;
        errorContainer.style.display = "block";
        errorContainer.style.color = "red"; // Set color to red
        errorContainer.style.fontSize = "small"; // Set font size to small
      }
  
      // Function to clear error messages
      function clearErrors() {
        document.querySelectorAll(".error-message").forEach(function (element) {
          element.textContent = "";
          element.style.display = "none";
        });
      }
  
      // Validate Email
      const email = form.elements["email"].value.trim();
      if (email === "") {
        displayError("email", "Please enter your email address.");
        return;
      }
  
      // Validate Phone Number using a simple regular expression
      const phoneRegex = /^\d{11}$/; // Assuming an 11-digit phone number
      const phoneNumber = form.elements["Phone"].value.trim(); // Update field name
      if (!phoneRegex.test(phoneNumber)) {
        displayError("Phone", "Please enter a valid 11-digit phone number."); // Update field name
        return;
      }
  
  
      // Clear errors if validation passes
      clearErrors();
      alert("Form updatted successfully!");
   
  });
  });
  
// avobojaoijsjdklfklnklsladl...............................
function updateProfile() {
    const errorContainer = document.getElementById('errorContainer');
  
    if (validateForm()) {
      hideError(errorContainer);
      // Perform the update profile logic
      alert("Profile updated successfully!");
      // Add code to submit the form or update the profile here
    } else {
      showError(errorContainer, "Please fix the errors in the form.");
    }
  }
  
  function previewPhoto() {
    const photoInput = document.getElementById('photo');
    const photoPreview = document.getElementById('photoPreview');
  
    if (photoInput.files && photoInput.files[0]) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        photoPreview.style.backgroundImage = 'url("' + e.target.result + '")';
      };
  
      reader.readAsDataURL(photoInput.files[0]);
    }
  }