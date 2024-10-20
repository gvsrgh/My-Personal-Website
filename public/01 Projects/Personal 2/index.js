let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    slides[index].classList.add('active');
}

function autoSlide() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (currentIndex === 5 || currentIndex === 6) {
        currentIndex = Math.floor(Math.random() * 2) + 5;
        showSlide(currentIndex);
        currentIndex = 0;
    } else {
        showSlide(currentIndex);
        currentIndex = (currentIndex + 1) % totalSlides;
    }

    setTimeout(autoSlide, 1000); 
}

showSlide(currentIndex); 
setTimeout(autoSlide, 1000);
