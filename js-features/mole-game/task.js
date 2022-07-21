(() => {
    let deadMole = document.getElementById('dead');
    let lostMole = document.getElementById('lost');

    function game() {
        let holesArray = document.querySelectorAll('.hole');
        let counterHit = 0;
        let counterMiss = 0;
        for (let hole of holesArray) {
            hole.onclick = function () {
                if (hole.classList.contains('hole_has-mole')) {
                    counterHit += 1;
                    if (counterHit === 10) {
                        alert("Вы победили");
                        counterHit = 0;
                        counterMiss = 0;
                    }
                } else {
                    counterMiss += 1;
                    if (counterMiss === 5) {
                        alert("Вы проиграли");
                        counterHit = 0;
                        counterMiss = 0;
                    }
                }
                deadMole.textContent = counterHit;
                lostMole.textContent = counterMiss;
            }
        }
    }

    game();
})();