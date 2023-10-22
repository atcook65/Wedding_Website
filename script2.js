// This is where you could add specific interactive or dynamic behaviors.
// The Lightbox library will handle most of the image modal work, though.
// Existing functions remain unchanged
function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// New: Close the modal if someone clicks outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
