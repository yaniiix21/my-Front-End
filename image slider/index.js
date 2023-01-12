const gotoNext = document.getElementsByClassName('go-to-next');
const slider = document.getElementsByClassName('slider')
const indicator = document.getElementsByClassName('slider__indicators')
const slides = document.getElementsByClassName('slider__slide')
const wrap = document.getElementsByClassName('slider__wrap')

slider.ready(function () {
    for (var i = 1; i <= slides.length; i++) {
        indicator.append('<div class="slider__indicator" data-slide="' + i + '"></div>')
    }
    setTimeout(function () {
        wrap.addClass('slider__wrap--hacked');
    }, 1000);
})

function goToSlide(number) {
    slides.removeClass('slider__slide--active');
    $('.slider__slide[data-slide = ' + number + ']').addClass('slider__slide--active');
    // slides.[data-slide = ' + number + ']
}

function nextSlide() {
    var currentSlide = Number($('.slider__slide--active').data('slide'));
    var totalSlides = slides.length;
    currentSlide++
    if (currentSlide > totalSlides) {
        currentSlide = 1;
    }
    goToSlide(currentSlide);
};

gotoNext.addEventListener('click', nextSlide)