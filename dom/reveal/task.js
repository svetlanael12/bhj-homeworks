(() => {
    let reveals = document.querySelectorAll('.reveal');

    for (let reveal of reveals) {
        document.addEventListener('scroll', function () {
            if ((reveal.getBoundingClientRect().height - reveal.getBoundingClientRect().top) >= -100) {
                reveal.classList.add('reveal_active');
            }
        })
    }
})();