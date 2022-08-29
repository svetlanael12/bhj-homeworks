(() => {
    let products = document.querySelectorAll('.product');
    let basket = document.querySelector('.cart');

    const productsBasket = [];

    document.addEventListener('DOMContentLoaded', function() {
        let local = JSON.parse(localStorage.getItem('basket'));

        if (JSON.parse(localStorage.getItem('basket')).length > 0) {
            local.forEach((item) => {
                productsBasket.push(item);
                document.querySelector('.cart__products').innerHTML += `
                    <div class="cart__product" data-id=${item.id}>
                            <img class="cart__product-image" src=${item.src}>
                            <div class="cart__product-count">${item.count}</div>
                            <div class="cart__product-delete">x</div>
                         </div>`;
            })   
        } else {
            document.querySelector('.cart').style.display = 'none';
        }
    })

    products.forEach((product) => {
        let plus = product.querySelector('.product__quantity-control_inc');
        let minus = product.querySelector('.product__quantity-control_dec');
        let btnAddBasket = product.querySelector('.product__add');

        let count = product.querySelector('.product__quantity-value').innerText;

        plus.addEventListener('click', function () {
            count++;
            product.querySelector('.product__quantity-value').innerText = count;
        })

        minus.addEventListener('click', function () {
            count--;
            product.querySelector('.product__quantity-value').innerText = count;

            if (count <= 0) {
                count = 1;
                product.querySelector('.product__quantity-value').innerText = count;
            }
        })

        btnAddBasket.addEventListener('click', function () {
            let id = product.getAttribute('data-id');
            let src = product.querySelector('.product__image').getAttribute('src');

            addBasket(id, count, src);
            localStorage.setItem('basket', JSON.stringify(productsBasket));
        })

        const addBasket = (id, value, src) => {
            if (productsBasket.some((card) => card.id === id)) {
                document.querySelectorAll('.cart__product').forEach((card) => {
                    if (card.getAttribute('data-id') === id) {
                        let value = Number(card.querySelector('.cart__product-count').innerText);

                        value += Number(count)

                        card.querySelector('.cart__product-count').innerText = value;

                        productsBasket.forEach((elem) => {
                            if (elem.id === id) {
                                elem.count = value;
                            }
                        })
                    }
                })
            } else {
                productsBasket.push({
                    id: id,
                    count: value,
                    src: src,
                });

                document.querySelector('.cart__products').innerHTML += `
                    <div class="cart__product" data-id=${id}>
                            <img class="cart__product-image" src=${src}>
                            <div class="cart__product-count">${value}</div>
                            <div class="cart__product-delete">x</div>
                         </div>`;
            }

            if (productsBasket.length > 0) {
                document.querySelector('.cart').style.display = 'block';
            } else if (productsBasket.length === 0) {
                document.querySelector('.cart').style.display = 'none';
            }
        }
    })

    basket.addEventListener('click', removeProductBasket = (e) => {
        document.querySelectorAll('.cart__product').forEach((card) => {
            if (e.target === card.querySelector('.cart__product-delete')) {
                productsBasket.forEach((elem, ind) => {
                    e.target.closest('.cart__product').remove();

                    if (elem.id === e.target.closest('.cart__product').getAttribute('data-id')) {
                        productsBasket.splice(ind, 1);

                        if (Array.from(document.querySelectorAll('.cart__product')) <= 0) {
                            document.querySelector('.cart').style.display = 'none';
                        }
                    }
                })
            }

        })

        localStorage.setItem('basket', JSON.stringify(productsBasket));
    })
})();