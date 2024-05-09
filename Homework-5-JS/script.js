const createNewUser = () => {
    let firstName = prompt("Введіть ваше ім'я:");
    let lastName = prompt("Введіть вашу фамілію:");
    let birthday = prompt("Введіть вашу дату народження у форматі dd.mm.yyyy:");

    let newUser = {
        firstName,
        lastName,
        birthday,
        getLogin() {
            return ((this.firstName.charAt(0) + this.lastName).toLowerCase());
        },
        getAge() {
            let datenumber = new Date();
            let birthDate = this.birthday.split('.');
            let userBirthDate = new Date(birthDate[2], birthDate[1] - 1, birthDate[0]);
            let age = datenumber.getFullYear() - userBirthDate.getFullYear();
            if (datenumber.getMonth() < userBirthDate.getMonth() || (datenumber.getMonth() === userBirthDate.getMonth() && datenumber.getDate() < userBirthDate.getDate())) {
                age--;
            }
            return age;
        },
        getPassword() {
            let firstLetter = this.firstName.charAt(0).toUpperCase();
            let lowerLastName = this.lastName.toLowerCase();
            let birthYear = this.birthday.split('.')[2];
            return `${firstLetter}${lowerLastName}${birthYear}`;
        }
    };
    
    console.log(`Ім'я: ${newUser.firstName}`);
    console.log(`Фамілія: ${newUser.lastName}`);
    console.log(`Дата народження: ${newUser.birthday}`);
    console.log(`Логін: ${newUser.getLogin()}`);
    console.log(`Вік: ${newUser.getAge()}`);
    console.log(`Пароль: ${newUser.getPassword()}`);
    
    return newUser;
}
createNewUser();
// let user = createNewUser();
// user.setFirstName("Тарас");
// user.setLastName("Шевченко");
// console.log(`Ім'я: ${user.firstName}`);
// console.log(`Фамілія: ${user.lastName}`);
// console.log(`Новий Логін: ${user.getLogin()}`);
// console.log(`Пароль: ${user.getPassword()}`);