do {
    const isInteger = value => Number.isInteger(Number(value)); 
    let num1, num2;
    do {
        num1 = prompt("Введіть перше число:");
        num2 = prompt("Введіть друге число:");
        if (isInteger(num1) && isInteger(num2)) {
            break;
        } else {
            alert("Введіть цілі числа!");
        }
    } while (true);
    const operation = prompt('Введіть операцію (+, -, *, /):');
    const calculate = (num1, num2, operator) => {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return 'Неправильна операція';
        }
    };
    alert(`Результат: ${calculate(Number(num1), Number(num2), operation)}`);
} while (confirm('Продовжуємо?'));