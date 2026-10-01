/* =========================
   IMAGE MODAL
========================= */

function openImage(imageSource, imageTitle) {

    const modal = document.getElementById("imageModal");

    const modalImage = document.getElementById("modalImage");

    const modalCaption = document.getElementById("modalCaption");


    modalImage.src = imageSource;

    modalImage.alt = imageTitle;

    modalCaption.textContent = imageTitle;


    modal.classList.add("show");


    document.body.style.overflow = "hidden";
}



function closeImage() {

    const modal = document.getElementById("imageModal");


    modal.classList.remove("show");


    document.body.style.overflow = "";
}



/* Close when clicking outside the image */

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("imageModal");

    const modalImage =
        document.getElementById("modalImage");


    if (
        event.target === modal &&
        event.target !== modalImage
    ) {

        closeImage();

    }

});



/* Close using ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeImage();

    }

});