(() => {
    document.addEventListener('DOMContentLoaded', function () {
        for (let rotate of document.querySelectorAll('.rotator')) {
            rotate.querySelector('.rotator__case.rotator__case_active').style.color = document.querySelector('.rotator').querySelector('.rotator__case.rotator__case_active').getAttribute('data-color');
        }
    })

    let timer = setTimeout(function slider() {
        let rotators = document.querySelectorAll('.rotator');
        let rotateCase;
        let color;
        let nextRotateCase;
        let speed;

        for (let rotator of rotators) {
            rotateCase = rotator.querySelector('.rotator__case.rotator__case_active');

            if (rotateCase === rotator.lastElementChild) {
                rotateCase = rotator.lastElementChild;
                nextRotateCase = rotator.firstElementChild;
            } else {
                nextRotateCase = rotateCase.nextElementSibling;
            }

            nextRotateCase.classList.add('rotator__case_active');

            color = nextRotateCase.getAttribute('data-color');
            nextRotateCase.style.color = color;

            speed = nextRotateCase.getAttribute('data-speed');

            rotateCase.classList.remove('rotator__case_active');
        }
        timer = setTimeout(slider, speed);
    }, 2000);
})();

