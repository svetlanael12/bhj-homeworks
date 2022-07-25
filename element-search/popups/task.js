(() => {
    let modalMain = document.getElementById('modal_main');
    let closeBtn = document.querySelectorAll('.modal__close');
    let showSuccess = document.querySelector('.show-success');

    modalMain.classList.add('modal_active');

    for (let btn of closeBtn) {
        btn.onclick = function() {
            document.querySelector('#modal_success').classList.remove('modal_active');
        }
    } 

    showSuccess.onclick = function() {
        modalMain.classList.remove('modal_active');
        document.querySelector('#modal_success').classList.add('modal_active');  
    }
})();
