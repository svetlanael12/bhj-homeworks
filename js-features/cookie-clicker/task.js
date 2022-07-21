function clicker() {
    let image = document.getElementById('cookie');
    let clickerCounter = document.getElementById('clicker__counter');
    let count = clickerCounter.textContent;

    let clickRate = document.getElementById('click__rate');;
    let initialClickValue = Date.now() / 1000;
    let lastClickValue;

    image.onclick = function () {
        clickerCounter.textContent = Number(count) + 1;
        count++;
        image.classList.toggle('active');

        lastClickValue = Date.now() / 1000;
        clickRate.textContent = (1 / (lastClickValue - initialClickValue)).toFixed(2);
        initialClickValue = lastClickValue;
    }
}

clicker();