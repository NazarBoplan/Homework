const user_data = (Name = '', Age = '') => {
    let name = Name;
    let age = Age;

    while (!name || isNaN(age)) {
        name = prompt('Введіть ім`я:', Name);
        age = prompt('Вкажіть свій вік:', Age);
    }
    return { name, age: parseInt(age) };
};
const check = (name, age) => {
    if (age < 18) {
        alert('Шуруй звідси , ще занадто молодий для такого');
    } else if (age >= 18 && age <= 22) {
        const confirmation = confirm('Ти хочеш продовжити?');
        if (confirmation) {
            alert('Вітаю, ' + name);
        } else {
            alert('Відхилено');
        }
    } else {
        alert('Вітаю, ' + name);
    }
};
const user = user_data();
check(user.name, user.age);