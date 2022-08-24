(() => {
    let checkbox = document.querySelectorAll('.interest');

    checkbox.forEach((arr) => {
        arr.addEventListener('click', function(e) {
            if (arr.querySelector('.interest .interest__check').checked) {
                arr.querySelectorAll('.interests_active .interest__check').forEach((item) => {
                    item.checked = true;
                })
            } else {
                arr.querySelectorAll('.interests_active .interest__check').forEach((item) => {
                    item.checked = false;
                })
            }
        })   
    }) 
})();