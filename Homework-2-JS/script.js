// do{
//     const input = prompt("Введіть число:");
//     const number = parseFloat(input);
//     if (isNaN(number)) {
//         alert("Введіть числове значення!");
//     } 
//     else if (!Number.isInteger(number)) {
//         alert("Введіть ціле число!");
//     } 
//     else {
//         let result = '';
//         let found = false;
//         const start = Math.min(0, number);
//         const end = Math.max(0, number);
//         for (let i = start; i <= end; i++) {
//             if (i % 5 === 0) {
//                 result += i + ', ';
//                 found = true;
//             }
//         }
//         if (found) {
//             alert(result);
//         } 
//         else 
//         {
//             alert("У заданому діапазоні немає чисел, кратних 5");
//         }
//     }
// }while(confirm("Продовжуємо?"));


do{
    const isInteger = value => Number.isInteger(Number(value));
    let m, n;
    do {
        m = prompt("Введіть перше число (m):");
        n = prompt("Введіть друге число (n):");
        if (isInteger(m) && isInteger(n)) {
            m = parseInt(m);
            n = parseInt(n);
            if (m > n) {
                alert("Перше число не може бути більше другого!");
                continue;
            }
            break;
        } else {
            alert("Введіть цілі числа!");
        }
    } while (true);

    const Simple = number => {
        if (number <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    };

    let simple_numbers = '';
    for (let i = m; i <= n; i++) {
        if (Simple(i)) {
            simple_numbers += i + ', ';
        }
    }

    if (simple_numbers) {
        alert(`Прості числа від ${m} до ${n}:\n${simple_numbers}`);
    } else {
        alert(`У заданому діапазоні немає простих чисел.`);
    }
}while(confirm('Продовжуємо?'))