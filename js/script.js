import Product from './class-product.js';
import productsList from './array-products.js';

// caso algum valor estja incorreto
// retorna true
const checkIncorrectValues = (...inputs) => {
    for (let input of inputs) {
        if (input.value.trim() === '') {
            return true;
        }
    }
};

const clearInputs = (...inputs) => {
    for (let input of inputs) {
        input.value = '';
    }
};

const buttonAdd = window.document.getElementById('add');
buttonAdd.addEventListener('click', () => {
    const name = window.document.getElementById('inputName');
    const price = window.document.getElementById('inputPrice');
    let valueIncorrect = checkIncorrectValues(name, price);
    if (valueIncorrect) {
        alert('tem coisa errada ai meu nobre');
    } else {
        let newProduct = new Product(name.value.trim(), price.value);
        productsList.push(newProduct);
        newProduct.addInTable();
        clearInputs(name, price);
    }
    console.log(productsList);
});

const buttonCancel = window.document.getElementById('cancel');
buttonCancel.addEventListener('click', () => {
    const name = window.document.getElementById('inputName');
    const price = window.document.getElementById('inputPrice');
    clearInputs(name, price);
    console.log(productsList);
});