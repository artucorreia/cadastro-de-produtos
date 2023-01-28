import Product from './class-product.js';
import products from './array-products.js';
import actions from './table-actions.js';

const element = {
    node:    (event) => event.target.nodeName,
    dataset: (event) => event.target.dataset.config,
    id:      (event) => event.target.parentElement.parentElement.firstElementChild.innerText
};

const tbody = window.document.getElementById('tableBody');
tbody.addEventListener('click', event => {
    if (element['node'](event) === 'I') {
        actions[element['dataset'](event)](element['id'](event));
    }
}); 

const validateInputs = (...inputs) => {
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

let id = 0;
const generateIds = () => ++id;

const buttonAdd = window.document.getElementById('add');
buttonAdd.addEventListener('click', () => {
    const name =  window.document.getElementById('inputName');
    const price = window.document.getElementById('inputPrice');
    let inputInvalid = validateInputs(name, price);
    if (inputInvalid) {
        alert('Verifique os campos e tente novamente');
    } else {
        let newProduct = new Product(
            generateIds(),
            name.value.trim(), 
            price.value
        );
        products['list'].push(newProduct);
        Product.updateTable();
        clearInputs(name, price);
    }
});

const buttonCancel = window.document.getElementById('cancel');
buttonCancel.addEventListener('click', () => {
    const name =  window.document.getElementById('inputName');
    const price = window.document.getElementById('inputPrice');
    clearInputs(name, price);
    console.log(products['list']);
});