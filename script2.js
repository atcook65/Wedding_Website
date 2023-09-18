// JavaScript code for image enlargement
const imagesToEnlarge = document.querySelectorAll('.enlarge');

imagesToEnlarge.forEach(image => {
    image.addEventListener('click', () => {
        image.classList.toggle('enlarged');
    });
});
