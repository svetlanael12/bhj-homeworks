(() => {
    let book = document.querySelector('.book');
    let buttonsFontSize = document.querySelectorAll('.font-size');
    let buttonsColorText = document.querySelectorAll('.book__control_color .color');
    let buttonsColorBackground = document.querySelectorAll('.book__control_background .color');

    for (let btnFontSize of buttonsFontSize) {
        btnFontSize.addEventListener('click', function (e) {
            e.preventDefault();
            let fontSize;

            fontSize = document.querySelector('.font-size_active').getAttribute('data-size');
            book.classList.remove(`book_fs-${fontSize}`);

            document.querySelector('.font-size_active').classList.remove('font-size_active');
            btnFontSize.classList.add('font-size_active');

            if (btnFontSize.hasAttribute('data-size')) {
                fontSize = btnFontSize.getAttribute('data-size');
                book.classList.add(`book_fs-${fontSize}`);
            } else {
                book.classList.remove('book_fs-big', 'book_fs-small');
            }
        })
    }

    for (let btnColorText of buttonsColorText) {
        btnColorText.addEventListener('click', function (e) {
            e.preventDefault();
            let textColor = document.querySelector('.book__control_color .color_active').getAttribute('data-text-color');
            book.classList.remove(`book_color-${textColor}`);

            document.querySelector('.book__control_color .color_active').classList.remove('color_active');
            btnColorText.classList.add('color_active');

            textColor = btnColorText.getAttribute('data-text-color');
            book.classList.add(`book_color-${textColor}`);
        })
    }

    for (let btnColorBackground of buttonsColorBackground) {
        btnColorBackground.addEventListener('click', function (e) {
            e.preventDefault();
            let bgColor = document.querySelector('.book__control_background .color_active').getAttribute('data-bg-color');
            book.classList.remove(`book_bg-${bgColor}`);

            document.querySelector('.book__control_background .color_active').classList.remove('color_active');
            btnColorBackground.classList.add('color_active');

            bgColor = btnColorBackground.getAttribute('data-bg-color');
            book.classList.add(`book_bg-${bgColor}`);
        })
    }
})();