document.addEventListener("DOMContentLoaded", function () {
  const studentForm = document.querySelector(".Student");
  const adminForm = document.querySelector(".Admin");
  const studentLink = document.getElementById("Student");
  const adminLink = document.getElementById("Admin");

  studentLink.addEventListener("click", function (e) {
      e.preventDefault();
      studentForm.style.display = "block";
      adminForm.style.display = "none";
      studentForm.style = adminForm.style
  });

  adminLink.addEventListener("click", function (e) {
      e.preventDefault();
      adminForm.style.display = "block";
      studentForm.style.display = "none";
      adminForm.style = studentForm.style
  });
});
