(() => {
    const images = document.querySelectorAll('.slider__item');
    const arrayDots = document.querySelectorAll('.slider__dot');

    const nextBtn = document.querySelector('.slider__arrow_next');
    const prevBtn = document.querySelector('.slider__arrow_prev');

    nextBtn.onclick = function() {
        slider(Array.from(images).findIndex((img) => img.classList.contains('slider__item_active')) + 1);
    }

    prevBtn.onclick = function() {
        slider(Array.from(images).findIndex((img) => img.classList.contains('slider__item_active')) - 1);
    }

    for (let dot of arrayDots) {
                dot.onclick = function () {
                    slider(Array.from(arrayDots).indexOf(dot))          
                }
            }

    function slider(active) {
        let newSlide = active;
        let activeSlide = Array.from(images).findIndex((img) => img.classList.contains('slider__item_active'));
        
        arrayDots[activeSlide].classList.remove('slider__dot_active');
        images[activeSlide].classList.remove('slider__item_active');

        if (newSlide < 0) {
            newSlide = images.length - 1;
        }

        if (newSlide > images.length - 1) {
            newSlide = 0;
        }

        images[newSlide].classList.add('slider__item_active');
        arrayDots[newSlide].classList.add('slider__dot_active');
    }
})();