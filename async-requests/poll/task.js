(() => {
    const titlePoll = document.querySelector('#poll__title');
    const answerButtons = document.querySelector('.poll__answers');

    const xhr = new XMLHttpRequest;
    xhr.open( 'GET', 'https://netology-slow-rest.herokuapp.com/poll.php' );
    xhr.responseType = 'json';
    xhr.send();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            let xhrID = xhr.response.id;
            titlePoll.innerText = xhr.response.data.title;
            
            xhr.response.data.answers.forEach((answer) => {
                answerButtons.innerHTML += `
                    <button class="poll__answer">
                        ${answer}
                    </button>
                `;
            })

            document.querySelectorAll('.poll__answer').forEach((btn, ind) => {
                btn.addEventListener('click', () => {
                    alert('Спасибо, ваш голос засчитан!');
                
                    let request = new XMLHttpRequest;
                    request.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
                    request.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                    request.responseType = 'json';
                    request.send(`vote=${xhrID}&answer=${ind}`);

                    request.addEventListener('readystatechange', () => {
                        if (request.readyState === request.DONE) {
                            answerButtons.innerHTML = '';

                            request.response.stat.forEach((req, ind) => {
                                answerButtons.innerHTML += `
                                    <div class="poll__title">
                                        ${req.answer}: <strong>${req.votes}</strong>
                                    </div>
                                `;
                            })
                        }
                    })
                })
            })
        }
    })
})();