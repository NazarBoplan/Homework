const createNewUser = () => {
    let firstName = prompt("Введіть ваше ім'я:");
    let lastName = prompt("Введіть вашу фамілію:");
    let newUser = {
        firstName,
        lastName,
        getLogin() {
            return (this.firstName.charAt(0) + this.lastName).toLowerCase();
        },
        setFirstName(newFirstName) {
            this.firstName = newFirstName;
        },
        setLastName(newLastName) {
            this.lastName = newLastName;
        },
    };
    console.log(`Ім'я: ${newUser.firstName}`);
    console.log(`Фамілія: ${newUser.lastName}`);
    console.log(`Логін: ${ newUser.getLogin()}`);
    return newUser;
}

let user = createNewUser();
user.setFirstName("Тарас");
user.setLastName("Шевченко");
console.log(`Ім'я: ${user.firstName}`);
console.log(`Фамілія: ${user.lastName}`);
console.log(`Новий Логін: ${user.getLogin()}`);
