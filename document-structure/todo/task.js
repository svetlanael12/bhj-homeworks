(() => {
    const arrayTasks = [];

    const btnAddTask = document.querySelector('#tasks__add');
    let tasksList = document.querySelector('#tasks__list');
    const input = document.querySelector('#task__input');

    document.addEventListener('DOMContentLoaded', function() {
        let local = JSON.parse(localStorage.getItem('tasks'));

        if (JSON.parse(localStorage.getItem('tasks')).length > 0) {
            local.forEach((value) => {
                arrayTasks.push(value);
                tasksList.innerHTML += `
                <div class="task">
                    <div class="task__title">
                        ${value}
                    </div>
                    <a href="#" class="task__remove">&times;</a>
                </div>`;
            })
        }
    })

    btnAddTask.addEventListener('click', function (e) {
        e.preventDefault();

        if (input.value.length > 0) {
            tasksList.innerHTML += `
                <div class="task">
                    <div class="task__title">
                        ${input.value}
                    </div>
                    <a href="#" class="task__remove">&times;</a>
                </div>`;
            arrayTasks.push(input.value);
            localStorage.setItem('tasks', JSON.stringify(arrayTasks));
            input.value = '';
        }
    })

    document.addEventListener('click', deleteTask = (e) => {
        document.querySelectorAll('.task').forEach((task) => {
            arrayTasks.forEach((elem, ind) => {
                if (e.target === task.querySelector('.task__remove')) {
                    if (elem === task.querySelector('.task__title').innerText) {
                        arrayTasks.splice(ind, 1);
                        e.target.closest('.task').remove();
                        localStorage.setItem('tasks', JSON.stringify(arrayTasks));
                    }
                }
            })
        })
    })
})();