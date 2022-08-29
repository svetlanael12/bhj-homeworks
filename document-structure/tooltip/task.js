(() => {
    let tooltipHas = document.querySelectorAll('.has-tooltip');

    tooltipHas.forEach((text) => {
        text.insertAdjacentHTML("afterend", `<div class="tooltip">${text.getAttribute('title')}</div>`);

        text.addEventListener('click', function(e) {
            e.preventDefault();
            let tooltips = document.querySelectorAll('.tooltip');

            tooltips.forEach((tooltip) => {
                if (tooltip.innerText === text.getAttribute('title')) {
                    if (tooltip.classList.contains('tooltip_active')) {
                        tooltip.classList.remove('tooltip_active');
                    } else {
                        if (document.querySelector('.tooltip_active')) {
                                document.querySelector('.tooltip_active').classList.remove('tooltip_active');  
                        }
 
                        positionTooltip();
                        tooltip.classList.add('tooltip_active');

                        document.addEventListener('scroll', function () {
                            positionTooltip();
                        })
                    }  
                } 
                
                function positionTooltip() {
                    const {top, left} = text.getBoundingClientRect();
                    tooltip.style.top = `${top + 25}px`;
                    tooltip.style.left = `${left}px`;
                }
            })
        })
    })
})();