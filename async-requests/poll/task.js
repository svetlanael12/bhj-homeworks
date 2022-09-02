(() => {
    const titlePoll = document.querySelector('#poll__title');
    const answerButtons = document.querySelector('.poll__answers');
    let xhrID;

    function request(method, send) {
        xhr.open( method, 'https://netology-slow-rest.herokuapp.com/poll.php' );
        xhr.responseType = 'json';
        if (method === 'POST') {
            xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
        }
        xhr.send(send);
    }

    function readyStateChange(method) {
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === xhr.DONE) {
                if (method === 'GET') {
                    get();
                    
                } else if (method === 'POST') {
                    post();
                }
            }
        })
    }

    function get() {
        xhrID = xhr.response.id;
        titlePoll.innerText = xhr.response.data.title;
        
        xhr.response.data.answers.forEach((answer) => {
            addBtn(answer);
        }) 
    }

    function post() {
        answerButtons.innerHTML = '';

        xhr.response.stat.forEach((req) => {
            answerButtons.innerHTML += `
                <div class="poll__title">
                    ${req.answer}: <strong>${req.votes}</strong>
                </div>
            `;
        })
    }

    let xhr = new XMLHttpRequest;
    request('GET');
    readyStateChange('GET');

    function addBtn(answer) {
        answerButtons.innerHTML += `
                    <button class="poll__answer">
                        ${answer}
                    </button>
        `;

        document.querySelectorAll('.poll__answer').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');

                xhr = new XMLHttpRequest;
                request('POST', `vote=${xhrID}&answer=${index}`);
                readyStateChange('POST');
            })
        }) 
    }
})();