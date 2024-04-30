const getUserData = (defaultName = '', defaultAge = '') => {
    let name = defaultName;
    let age = defaultAge;

    while (!name || isNaN(age)) {
        name = prompt('Please enter your name:', defaultName);
        age = prompt('Please enter your age:', defaultAge);
    }

    return { name, age: parseInt(age) };
};

// Функция для проверки возраста и отображения соответствующего сообщения
const checkAgeAndDisplayMessage = (name, age) => {
    if (age < 18) {
        alert('You are not allowed to visit this website');
    } else if (age >= 18 && age <= 22) {
        const confirmation = confirm('Are you sure you want to continue?');
        if (confirmation) {
            alert('Welcome, ' + name);
        } else {
            alert('You are not allowed to visit this website');
        }
    } else {
        alert('Welcome, ' + name);
    }
};

// Получаем данные пользователя
const userData = getUserData();

// Проверяем данные пользователя и отображаем сообщение
checkAgeAndDisplayMessage(userData.name, userData.age);