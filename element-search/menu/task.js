(() => {
    let menuLinks = document.querySelectorAll('.menu__link');

    for (let link of menuLinks) {
        link.onclick = function() {
            let subMenu = link.parentElement.querySelector('.menu.menu_sub');
            if (subMenu) {
                subMenu.classList.toggle('menu_active');
                return false;
            }   
        }  
    }
})();