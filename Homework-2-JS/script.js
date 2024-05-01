do{
    const input = prompt("Введіть число:");
    const number = parseFloat(input);
    if (isNaN(number)) {
        alert("Введіть числове значення!");
    } 
    else if (!Number.isInteger(number)) {
        alert("Введіть ціле число!");
    } 
    else {
        let result = '';
        let found = false;
        const start = Math.min(0, number);
        const end = Math.max(0, number);
        for (let i = start; i <= end; i++) {
            if (i % 5 === 0) {
                result += i + ', ';
                found = true;
            }
        }
        if (found) {
            alert(result);
        } 
        else 
        {
            alert("У заданому діапазоні немає чисел, кратних 5");
        }
    }
}while(confirm("Продовжуємо?"));