function filterBy(array, type) {
    
    let filtered = array.filter(item => typeof item !== type);
    return { original: array, filtered: filtered };
}


let array = ['hello', 'world', 23, '23', null];
let result = filterBy(array, 'string');
console.log('Початкові дані:', result.original);
console.log('Результат:', result.filtered);