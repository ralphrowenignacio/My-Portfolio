
function openCertificate(imageSource, certificateTitle) {

    // Get the modal
    const modal = document.getElementById("certificateModal");

    // Get the large certificate image
    const modalImage = document.getElementById("modalCertificate");

    // Get the certificate title
    const modalTitle = document.getElementById("modalCertificateTitle");


    // Set the certificate image
    modalImage.src = imageSource;


    // Set the certificate title
    modalImage.alt = certificateTitle;

    modalTitle.textContent = certificateTitle;


    // Show the modal
    modal.style.display = "flex";
}

function closeCertificate() {

    const modal = document.getElementById("certificateModal");

    modal.style.display = "none";

}

window.addEventListener("click", function(event) {

    const modal = document.getElementById("certificateModal");


    if (event.target === modal) {

        closeCertificate();

    }

});


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeCertificate();

    }

});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", function () {

    hamburger.classList.toggle("active");

    navMenu.classList.toggle("active");

});


/* Close menu when a navigation link is clicked */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        hamburger.classList.remove("active");

        navMenu.classList.remove("active");

    });

});