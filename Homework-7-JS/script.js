function displayList(array) {
    const listContainer = document.getElementById('listContainer');
    const listItems = array.map(item => {
        if (Array.isArray(item)) {
            // Если элемент массив, рекурсивно вызываем displayList для создания вложенного списка
            return `<li><ul>${displayList(item)}</ul></li>`;
        } else if (typeof item === 'object') {
            // Если элемент объект, рекурсивно вызываем displayList для создания вложенного списка из его значений
            return `<li><ul>${displayList(Object.values(item))}</ul></li>`;
        } else {
            // Иначе просто создаем элемент списка
            return `<li>${item}</li>`;
        }
    }).join('');
    listContainer.innerHTML = listItems;
}

const array1 = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];


displayList(array1); // вызываем функцию для вывода первого массива


// Для продвинутого задания можно использовать setTimeout
let countdown = 10;
const countdownInterval = setInterval(() => {
    countdown--;
    if (countdown === 0) {
        clearInterval(countdownInterval);
        document.getElementById('listContainer').innerHTML = ''; // Очищаем список
    } else {
        document.getElementById('countdown').innerText = countdown;
    }
}, 1000);