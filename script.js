/* =========================================
   MAIN PORTFOLIO JAVASCRIPT
========================================= */


/* =========================================
   HAMBURGER MENU
========================================= */

const hamburger =
    document.getElementById("hamburger");

const navMenu =
    document.getElementById("navMenu");


if (hamburger && navMenu) {

    hamburger.addEventListener(
        "click",
        function () {

            hamburger.classList.toggle("active");

            navMenu.classList.toggle("active");

        }
    );


    /* CLOSE MENU WHEN LINK IS CLICKED */

    const navLinks =
        document.querySelectorAll(
            "#navMenu a"
        );


    navLinks.forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                hamburger.classList.remove(
                    "active"
                );

                navMenu.classList.remove(
                    "active"
                );

            }
        );

    });

}


/* =========================================
   CERTIFICATE MODAL
========================================= */

function openCertificate(
    imageSource,
    certificateTitle
) {

    const modal =
        document.getElementById(
            "certificateModal"
        );

    const modalImage =
        document.getElementById(
            "modalCertificate"
        );

    const modalTitle =
        document.getElementById(
            "modalCertificateTitle"
        );


    if (!modal || !modalImage) {
        return;
    }


    modalImage.src = imageSource;

    modalImage.alt =
        certificateTitle || "";


    if (modalTitle) {

        modalTitle.textContent =
            certificateTitle || "";

    }


    modal.classList.add("show");

    document.body.style.overflow =
        "hidden";

}


/* =========================================
   CLOSE CERTIFICATE
========================================= */

function closeCertificate() {

    const modal =
        document.getElementById(
            "certificateModal"
        );


    if (!modal) {
        return;
    }


    modal.classList.remove("show");

    document.body.style.overflow = "";

}


/* =========================================
   CLOSE MODAL BY CLICKING OUTSIDE
========================================= */

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "certificateModal"
            );


        if (!modal) {
            return;
        }


        if (event.target === modal) {

            closeCertificate();

        }

    }
);


/* =========================================
   CLOSE MODAL WITH ESC
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeCertificate();

        }

    }
);


/* =========================================
   SCROLL ANIMATION
========================================= */

const animatedElements =
    document.querySelectorAll(
        ".section, .skill-category, " +
        ".experience-card, .education-card, " +
        ".certificate-card, .project-card, " +
        ".color-card"
    );


if (
    "IntersectionObserver"
    in window
) {

    const animationObserver =
        new IntersectionObserver(
            function(entries) {

                entries.forEach(
                    function(entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            animationObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.10
            }
        );


    animatedElements.forEach(
        function(element) {

            element.classList.add(
                "scroll-animation"
            );

            animationObserver.observe(
                element
            );

        }
    );

} else {

    animatedElements.forEach(
        function(element) {

            element.classList.add(
                "visible"
            );

        }
    );

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            alert(
                "Thank you for your message!"
            );


            contactForm.reset();

        }
    );

}


/* =========================================
   PAGE LOAD
========================================= */

window.addEventListener(
    "load",
    function() {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
