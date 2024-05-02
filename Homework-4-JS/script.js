const createNewUser = () => {
    const newUser = {};
    const firstName = prompt("Введіть ім'я:");
    const lastName = prompt("Введіть прізвище:");
    newUser.firstName = firstName;
    newUser.lastName = lastName;
     newUser.getLogin = () => (newUser.firstName.charAt(0) + newUser.lastName).toLowerCase();
    return newUser; 
};
const user = createNewUser();
console.log("Логін користувача: " + user.getLogin());
console.log(newUser);