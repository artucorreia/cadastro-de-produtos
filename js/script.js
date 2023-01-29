import Product from './class-product.js';
import products from './array-products.js';
import actions from './table-actions.js';
import functions from './functions.js';

const tbody = window.document.getElementById('tableBody');
tbody.addEventListener('click', event => {
    if (event.target.nodeName === 'I') {
        actions[event.target.dataset.config](event.target);
    }
});

const buttonAdd = window.document.getElementById('add');
buttonAdd.addEventListener('click', () => Product.addNewProduct(
    products['list']
));

const buttonCancel = window.document.getElementById('cancel');
buttonCancel.addEventListener('click', () => {
    const name =  window.document.getElementById('inputName');
    const price = window.document.getElementById('inputPrice');
    functions['clearInputs'](name, price);
    console.log(products['list']);
});