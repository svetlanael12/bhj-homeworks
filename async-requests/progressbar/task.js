(() => {
    const progress = document.getElementById('progress');
    const form = document.getElementById('form');
    let btnSubmit = document.querySelector('#send');

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        formData.append('file', form.file.files[0]);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

        xhr.upload.addEventListener('progress', function (e) {
            progress.value = e.loaded / form.file.files[0].size;
        });

        xhr.upload.onload = function() {
            form.querySelector('label').remove();
            btnSubmit.remove();
            form.innerHTML += `<div><b>Данные успешно отправлены</b></div>`;
        };
        
        xhr.send(formData);
    });
})();