(() => {
    const arrayDots = document.querySelectorAll('.slider__dot');
    const images = document.querySelectorAll('.slider__item');

    const nextBtn = document.querySelector('.slider__arrow_next');
    const prevBtn = document.querySelector('.slider__arrow_prev');

    let active = 0;

    images[active].classList.add('slider__item_active');
    arrayDots[active].classList.add('slider__dot_active');

    nextBtn.onclick = function () {
        arrayDots[active].classList.remove('slider__dot_active');
        images[active].classList.remove('slider__item_active');

        active++;

        if (active > images.length - 1) {
            for (let img of images) {
                img.classList.remove('slider__item_active');
            }
            active = 0;
        }

        images[active].classList.add('slider__item_active');
        arrayDots[active].classList.add('slider__dot_active');
    }

    prevBtn.onclick = function () {
        arrayDots[active].classList.remove('slider__dot_active');
        images[active].classList.remove('slider__item_active');

        active--;

        if (active < 0) {
            for (let img of images) {
                img.classList.add('slider__item_active');
            }
            active = images.length - 1;
        }

        arrayDots[active].classList.add('slider__dot_active');
        images[active].classList.add('slider__item_active');
    }

    for (let dot of arrayDots) {
        dot.onclick = function () {
            arrayDots[active].classList.remove('slider__dot_active');
            images[active].classList.remove('slider__item_active');

            active = Array.from(arrayDots).indexOf(dot);

            images[active].classList.add('slider__item_active');
            arrayDots[active].classList.add('slider__dot_active');
        }
    }
})();