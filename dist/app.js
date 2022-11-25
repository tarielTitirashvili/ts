"use strict";
const message = 'string';
const button = document.getElementById('button');
if (button) {
    button.addEventListener('click', () => {
        console.log('i was clicked');
    });
}
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('here');
    }, 1000);
});
promise.then((data) => {
    console.log(data);
});
console.log(message);
function names(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const mergedNames = names({ name: 'tariel' }, { age: 25 });
mergedNames.age;
mergedNames.name;
function test(value) {
    return {
        value,
        count: `this word has ${value.length} letter`
    };
}
//# sourceMappingURL=app.js.map