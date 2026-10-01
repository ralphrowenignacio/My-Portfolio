function openImage(imageSource, imageTitle) {

    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");

    if (!modal || !modalImage) {
        return;
    }

    modalImage.src = imageSource;

    modalImage.alt = imageTitle || "";

    if (modalCaption) {
        modalCaption.textContent = imageTitle || "";
    }

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


/* =========================================================
   CLOSE IMAGE MODAL
========================================================= */

function closeImage() {

    const modal = document.getElementById("imageModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("show");

    document.body.style.overflow = "";
}


/* =========================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE IMAGE
========================================================= */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("imageModal");

    if (!modal) {
        return;
    }

    if (event.target === modal) {
        closeImage();
    }

});


/* =========================================================
   CLOSE MODAL USING ESCAPE KEY
========================================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeImage();
    }

});


/* =========================================================
   SIDEBAR NAVIGATION
========================================================= */

const navigationLinks =
    document.querySelectorAll(".project-navigation a");


navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navigationLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


/* =========================================================
   HIGHLIGHT CURRENT SECTION
========================================================= */

const sections =
    document.querySelectorAll(".project-section");

const sidebarLinks =
    document.querySelectorAll(".project-navigation a");


window.addEventListener("scroll", function() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    sidebarLinks.forEach(function(link) {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (target === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


/* =========================================================
   SCROLL ANIMATION
========================================================= */

const animatedSections =
    document.querySelectorAll(
        ".project-section, .process-card, .gallery-item, .credit"
    );


const animationObserver =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    animationObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


animatedSections.forEach(function(element) {

    element.classList.add("scroll-animation");

    animationObserver.observe(element);

});


/* =========================================================
   VIDEO
========================================================= */

const projectVideos =
    document.querySelectorAll(".video-container video");


projectVideos.forEach(function(video) {

    video.addEventListener("play", function() {

        console.log("Project video started.");

    });

    video.addEventListener("ended", function() {

        console.log("Project video finished.");

    });

});


/* =========================================================
   MOBILE SIDEBAR
========================================================= */

const sidebar =
    document.querySelector(".project-sidebar");


const sidebarLinksMobile =
    document.querySelectorAll(
        ".project-navigation a"
    );


sidebarLinksMobile.forEach(function(link) {

    link.addEventListener("click", function() {

        if (window.innerWidth <= 700) {

            sidebar.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener("load", function() {

    document.body.classList.add("page-loaded");

});