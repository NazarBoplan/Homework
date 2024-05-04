function filterBy(array, type) {
    
    let filtered = array.filter(item => typeof item !== type);
    return { original: array, filtered: filtered };
}


let array = ['hello', 'world', 23, '23', null];
let result = filterBy(array, 'string');
console.log('Original Array:', result.original);
console.log('Filtered Array:', result.filtered);