const gridViewButton = document.getElementById('gridView');
const sliderViewButton = document.getElementById('sliderView');
const imagesGrid = document.querySelector('.images-grid');
const slider = document.querySelector('.slider');

gridViewButton.addEventListener('click', () => {
    imagesGrid.style.display = 'grid';
    slider.style.transform = 'translateX(0)';
});

sliderViewButton.addEventListener('click', () => {
    imagesGrid.style.display = 'none';
    slider.style.transform = 'translateX(0)';
});

slider.addEventListener('transitionend', () => {
    if (slider.style.transform === 'translateX(0)') {
        slider.style.transition = 'none';
        slider.style.transform = `translateX(-${slider.clientWidth}px)`;
        void slider.offsetWidth; // Force a reflow to reset the transition
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = 'translateX(0)';
    }
});

// ... (previous JavaScript code) ...

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

prevButton.addEventListener('click', () => {
    moveSlider('prev');
});

nextButton.addEventListener('click', () => {
    moveSlider('next');
});

function moveSlider(direction) {
    const slideWidth = slider.clientWidth;
    const currentTransform = parseFloat(getComputedStyle(slider).transform.split(',')[4]);

    if (direction === 'prev') {
        slider.style.transform = `translateX(${currentTransform + slideWidth}px)`;
    } else if (direction === 'next') {
        slider.style.transform = `translateX(${currentTransform - slideWidth}px)`;
    }
}

// ... (remaining JavaScript code) ...


// ... (previous JavaScript code) ...

const downloadButtons = document.querySelectorAll('.download-button');

downloadButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        downloadImage(index);
    });
});

function downloadImage(index) {
    const images = slider.querySelectorAll('.slide img');
    const img = images[index];
    const imgSrc = img.getAttribute('src');
    const imgAlt = img.getAttribute('alt');

    const link = document.createElement('a');
    link.href = imgSrc;
    link.download = imgAlt + '.jpg';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ... (remaining JavaScript code) ...
