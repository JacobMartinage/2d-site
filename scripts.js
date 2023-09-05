let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const staticEffect = document.querySelector('.static-effect');

// Initially hide the video
staticEffect.style.display = 'none';

function changeSlide(direction) {
    // Show the video before playing
    staticEffect.style.display = 'block';

    staticEffect.load();
    staticEffect.play();

    setTimeout(() => {
        slides[currentSlide].style.transform = "translateY(100%)";

        if (direction === "next") {
            currentSlide = (currentSlide + 1) % slides.length;
        } else if (direction === "prev") {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        }

        slides[currentSlide].style.transform = "translateY(0)";

        // Hide the video after transition
        staticEffect.style.display = 'none';
    }, 300); // Adjust this duration to match the video's length if needed
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        changeSlide("next");
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        changeSlide("prev");
    }
});

document.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        changeSlide("next");
    } else if (event.deltaY < 0) {
        changeSlide("prev");
    }
});
