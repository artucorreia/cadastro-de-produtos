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
buttonAdd.addEventListener('click', () => {
    const name =  window.document.getElementById('inputName');
    const price = window.document.getElementById('inputPrice');
    let inputInvalid = functions['validateInputs'](name, price);
    if (inputInvalid) {
        alert('Verifique os campos e tente novamente');
    } else {
        let newProduct = new Product(
            functions['generateIds'](),
            name.value.trim(), 
            price.value
        );
        products['list'].push(newProduct);
        Product.updateTable(products['list']);
        functions['clearInputs'](name, price);
    }
});

const buttonCancel = window.document.getElementById('cancel');
buttonCancel.addEventListener('click', () => {
    const name =  window.document.getElementById('inputName');
    const price = window.document.getElementById('inputPrice');
    functions['clearInputs'](name, price);
    console.log(products['list']);
});