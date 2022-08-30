(() => {
    let checkbox = document.querySelectorAll('input');

    checkbox.forEach((arr) => {
        arr.addEventListener('click', function() {
            if (arr.closest('.interests_active') === null) {
                let parent = arr.closest('.interest').querySelector('.interests_active');
                if (arr.checked) {
                    parent.querySelectorAll('.interest__check').forEach((elem) => {
                        elem.checked = true;
                    })
                } else {
                    parent.querySelectorAll('.interest__check').forEach((elem) => {
                        elem.checked = false;
                    })
                }
            } else {
                let array = Array.from(arr.closest('.interests_active').querySelectorAll('.interest__check'));

                if (array.every((elem) => elem.checked)) {
                    arr.closest('.interests_active').closest('.interest').querySelector('input').checked = true;
                } else {
                    arr.closest('.interests_active').closest('.interest').querySelector('input').checked = false;
                }
            }
        })   
    }) 
})();