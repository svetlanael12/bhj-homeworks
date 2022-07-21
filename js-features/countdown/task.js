function countdown() {
    let timer = document.getElementById('timer');
    let count = timer.textContent;

    let counter = setInterval(() => {
        timer.textContent = count - 1;

        if (count === 1) {
           clearInterval(counter);
           alert('Вы победили в конкурсе')
        }
            
        count--; 
    }, 1000);
}

countdown();


