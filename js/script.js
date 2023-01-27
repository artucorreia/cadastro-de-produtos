import Product from './class-product.js';
import productsList from './array-products.js';
import options from './table-actions.js';

const tbody = window.document.getElementById('tableBody');
tbody.addEventListener('click', event => {
    let elementNode = event.target.nodeName;
    if (elementNode === 'I') {
        let datasetConfig = 
            event.target.dataset.config;
        let idFromElement = 
            event.target.parentElement.parentElement.firstElementChild.innerText;
        options[datasetConfig](idFromElement);
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
        productsList.push(newProduct);
        Product.updateTable(productsList);
        clearInputs(name, price);
    }
});

const buttonCancel = window.document.getElementById('cancel');
buttonCancel.addEventListener('click', () => {
    const name =  window.document.getElementById('inputName');
    const price = window.document.getElementById('inputPrice');
    clearInputs(name, price);
    console.log(productsList);
});