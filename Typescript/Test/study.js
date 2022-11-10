function addValue(value1, value2, value3) {
    if (value3) {
        return value1 + value2 + value3;
    }
    else {
        return value1 + value2;
    }
}
console.log(addValue('Good', ' Morning'));
console.log(addValue(10, 20, 30));
