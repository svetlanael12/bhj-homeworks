(() => {
    const loader = document.querySelector('.loader');
    let list = document.querySelector('#items');
    const history = [];

    let item = (code, value) => {
        list.innerHTML += `
            <div class="item">
                <div class="item__code">
                    ${code}
                </div>
                <div class="item__value">
                    ${value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>
        `;
    };

    if (JSON.parse(localStorage.getItem('history'))) {
        loader.classList.remove('loader_active');

        JSON.parse(localStorage.getItem('history')).forEach((elem) => {
            item(elem.code, elem.value);
        });
    }

    fetch('https://netology-slow-rest.herokuapp.com')
        .then(response => response.json())
        .then(response => {
            loader.classList.remove('loader_active');
            
            list.innerHTML = '';

            Object.keys(response.response.Valute).forEach((key) => {
                history.push({
                    code: response.response.Valute[key].CharCode,
                    value: response.response.Valute[key].Value
                })

                item(response.response.Valute[key].CharCode, response.response.Valute[key].Value);
            });

            localStorage.setItem('history', JSON.stringify(history));
        })
})();