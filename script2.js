// JavaScript code for image enlargement
const imagesToEnlarge = document.querySelectorAll('.enlarge');
const enlargedImageContainer = document.querySelector('.enlarged-image-container');
const enlargedImage = document.querySelector('.enlarged-image');

imagesToEnlarge.forEach(image => {
    image.addEventListener('click', () => {
        enlargedImage.src = image.src;
        enlargedImageContainer.style.display = 'flex';
    });
});

function closeEnlargedImage() {
    enlargedImageContainer.style.display = 'none';
}
