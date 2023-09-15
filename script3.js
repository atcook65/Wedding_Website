function expandImage(src) {
    const expandedImage = document.querySelector('.expanded-image');
    expandedImage.src = src;
    const expandedImageContainer = document.querySelector('.expanded-image-container');
    expandedImageContainer.style.display = 'flex';
}

function closeExpandedImage() {
    const expandedImageContainer = document.querySelector('.expanded-image-container');
    expandedImageContainer.style.display = 'none';
}
