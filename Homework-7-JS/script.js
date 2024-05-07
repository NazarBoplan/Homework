const list = (arr) => {
    const listContainer = document.getElementById('listсontainer');

    const renderlist = (item) => {
        if (Array.isArray(item)) {
            const subitems = item.map(Item => renderlist(Item)).join('');
            return `<ul>${subitems}</ul>`;
        } else if (typeof item === 'object' && item !== null) {
            const subitems = Object.entries(item).map(([key, value]) => `<li>${key}: ${value}</li>`).join('');
            return `<ul>${subitems}</ul>`;
        } else {
            return `<li>${item}</li>`;
        }
    };

    const listItems = arr.map(item => renderlist(item)).join('');
    listContainer.innerHTML = listItems;
};

const data = ['hello', 'world', 'Kiev', 23, ['never'], 'Kharkiv', 'Odessa', 'Lviv'];
list(data);

const deleteelements = document.createElement('div');
deleteelements.textContent = 'Сторінка буде очищена через 10 секунд';
document.body.appendChild(deleteelements);

let secondsLeft = 10;
const countdownInterval = setInterval(() => {
    secondsLeft--;
    deleteelements.textContent = `Сторінка буде очищена через ${secondsLeft} секунд`;
    if (secondsLeft === 0) {
        clearInterval(countdownInterval);
        document.body.innerHTML = '';
    }
}, 1000);