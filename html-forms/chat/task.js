(() => {
    const messagesRobots = [
        "Добрый день!",
        "Вы не купили ни одного товара для того, чтобы так с нами разговаривать!",
        "Кто тут?",
        "Где ваша совесть",
        "К сожалению, все операторы сейчас заняты. Не пишите нам больше.",
        "До свидания!",
    ];

    let chatWidget = document.querySelector('.chat-widget');
    let btnShowChat = document.querySelector('.chat-widget__side');
    let input = document.querySelector('#chat-widget__input');

    const messages = document.querySelector('.chat-widget__messages');

    let timeout;

    btnShowChat.addEventListener('click', function () {
        chatWidget.classList.add('chat-widget_active');
        timeout = setTimeout(timer, 30000);
    });

    chatWidget.addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();

            if (!input.checkValidity()) {
                input.placeholder = 'Сообщение не может быть пустым';
                input.style.outline = 'none';
                input.style.border = '2px solid red';
            } else {
                let indexMessage = Math.floor(Math.random() * messagesRobots.length);

                message(input.value, 'message_client');
                message(messagesRobots[indexMessage]);

                input.value = '';
                input.placeholder = 'Введите ваше сообщение';
                input.style.border = '1px solid gray';
                input.style.outline = 'auto';
            }

            clearTimeout(timeout);
            timeout = setTimeout(timer, 30000);

            autoScroll(); 
        }
   
    })

    const message = (value, classMessage) => {
        messages.innerHTML += `
            <div class="message ${classMessage}">
                <div class="message__time">
                    ${new Date().toLocaleTimeString('ru', { hour: "2-digit", minute: "2-digit" })}
                </div>
                <div class="message__text">
                    ${value}
                </div>
            </div>
        `;
    }

    const timer = () => {
        message('Задайте свой вопрос в чат');
        autoScroll();
    }

    const autoScroll = () => {
        let containerMessages = document.querySelector('.chat-widget__messages-container')
        let top = document.querySelector('.chat-widget__messages').scrollTop;
        let bottom = document.querySelector('.chat-widget__messages').scrollHeight;
     
        containerMessages.scrollTo(top, bottom);
    }
})();