const stepItems = document.querySelectorAll('.step-item');
const stepItemsGrey = document.querySelectorAll('.step-item-grey');
const reviewCarousel = document.querySelector('.reviews-carousel');
const carouselNav = document.querySelector('.carousel-nav');
const carouselDots = document.querySelector('.carousel-dots');
let currentSlide = 0;
const slides = document.querySelectorAll('.review-card');
const slideWidth = slides[0].offsetWidth + 20;

// Логика для шагов с классом step-item
stepItems.forEach((item, index) => {
    const header = item.querySelector('.step-header');
    const content = item.querySelector('.step-content');
    const toggleButton = header.querySelector('.toggle-step');

    if (index === 0) {
        content.classList.remove('hidden');
        header.classList.add('active');
        toggleButton.textContent = '-';
    }

    header.addEventListener('click', () => {
        content.classList.toggle('hidden');
        header.classList.toggle('active');
        if (content.classList.contains('hidden')) {
            toggleButton.textContent = '+';
        } else {
            toggleButton.textContent = '-';
        }
    });
});

// Логика для шагов с классом step-item-grey
stepItemsGrey.forEach((item, index) => {
    const header = item.querySelector('.step-header');
    const content = item.querySelector('.step-content');
    const toggleButton = header.querySelector('.toggle-step');

    header.addEventListener('click', () => {
        content.classList.toggle('hidden');
        header.classList.toggle('active');
        if (content.classList.contains('hidden')) {
            toggleButton.textContent = '+';
        } else {
            toggleButton.textContent = '-';
        }
    });
});

// Обновление карусели
function updateCarousel() {
    reviewCarousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Обновление точек
function updateDots() {
    carouselDots.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Обработчик навигации по карусели (вперед и назад)
carouselNav.addEventListener('click', (event) => {
    if (event.target.closest('.carousel-prev')) {
        currentSlide = Math.max(0, currentSlide - 1); // Переход на предыдущий слайд
    } else if (event.target.closest('.carousel-next')) {
        currentSlide = Math.min(slides.length - 1, currentSlide + 1); // Переход на следующий слайд
    }
    updateCarousel();
    updateDots();
});

// Обработчик клика по точкам для перехода к конкретному слайду
carouselDots.addEventListener('click', (event) => {
    const dot = event.target.closest('.dot');
    if (dot) {
        const index = Array.from(carouselDots.children).indexOf(dot);
        currentSlide = index;
        updateCarousel();
        updateDots();
    }
});

// Инициализация точек
updateDots();
