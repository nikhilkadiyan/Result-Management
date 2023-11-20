document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body"),
        modeToggle = body.querySelector(".mode-toggle"),
        sidebar = body.querySelector("nav"),
        sidebarToggle = body.querySelector(".sidebar-toggle"),
        viewResultLink = document.getElementById("view-result-link"),
        profileLink = document.getElementById("profile-link"),
        contactFormLink = document.getElementById("contact-form");

    const ACTIVE_CLASS = "active";

    function toggleDarkMode() {
        body.classList.toggle("dark");
    }

    function toggleSidebar() {
        sidebar.classList.toggle("close");
    }

    function showViewResultSection() {
        viewResultLink.classList.add(ACTIVE_CLASS);
        profileLink.classList.remove(ACTIVE_CLASS);
        contactFormLink.classList.remove(ACTIVE_CLASS);

        document.getElementById("view-result-section").style.display = "block";
        document.getElementById("profile-section").style.display = "none";
        document.getElementById("contact-section").style.display = "none";
    }

    function showProfileSection() {
        profileLink.classList.add(ACTIVE_CLASS);
        viewResultLink.classList.remove(ACTIVE_CLASS);
        contactFormLink.classList.remove(ACTIVE_CLASS);

        document.getElementById("view-result-section").style.display = "none";
        document.getElementById("profile-section").style.display = "block";
        document.getElementById("contact-section").style.display = "none";
    }

    function showContactSection() {
        contactFormLink.classList.add(ACTIVE_CLASS);
        viewResultLink.classList.remove(ACTIVE_CLASS);
        profileLink.classList.remove(ACTIVE_CLASS);

        document.getElementById("view-result-section").style.display = "none";
        document.getElementById("profile-section").style.display = "none";
        document.getElementById("contact-section").style.display = "block";
    }

    modeToggle.addEventListener("click", toggleDarkMode);
    sidebarToggle.addEventListener("click", toggleSidebar);

    viewResultLink.addEventListener("click", function (e) {
        e.preventDefault();
        showViewResultSection();

    });

    profileLink.addEventListener("click", function (e) {
        e.preventDefault();
        showProfileSection();
    });

    contactFormLink.addEventListener("click", function (e) {
        e.preventDefault();
        showContactSection();
    });

    // Initial setup to display the View Result section as active
    showProfileSection();
});
