import createTableElements from './table-elements.js';
import functions from './functions.js';
import products from './array-products.js';
import localstorage from './localstorage.js';

class Product {
    static saveIdForEdit = 0;
    
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = Number(price)
    }

    static main = array => {
        const name =  window.document.getElementById('inputName');
        const price = window.document.getElementById('inputPrice');
        let inputInvalid = functions['validateInputs'](name, price);
        if (inputInvalid) {
            window.alert('Verifique os campos e tente novamente');
        } else {
            if (Product.saveIdForEdit == 0) {
                Product.addNewProduct(name, price, array);
            } else {
                Product.editionConfirm(name, price);
            }
            functions['clearInputs'](name, price);
            Product.updateTable(array);
            localstorage['update'](array);
        }
    }

    static addNewProduct = (name, price, array) => {
        let newProduct = new Product(
            functions['generateIds'](),
            name.value.trim(), 
            price.value
        );
        array.push(newProduct);
    }

    static editionConfirm = (name, price) => {
        let productEdited =
            Product.getProductById(
                Product.saveIdForEdit, 
                products['list']
            );
        productEdited.changeProductData(
            name.value.trim(),
            price.value
        );
        functions['resetProductId']();
        functions['changeInputValue'](
            {
                1: window.document.getElementById('add')
            }, 
            {
                1: 'Adicionar'
            },
            1
        );
    }

    static getProductById = (id, array) => {
        let product = array.filter((element) => {
            if (element.id == id) {
                return element;
            }
        });
        return product[0];
    }

    static updateTable = array => {
        const tbody = window.document.getElementById('tableBody');
        tbody.innerHTML = '';
        array.map((element) => {
            let tableElements = createTableElements(
                element.id,
                element.name, 
                element.price 
            );
            tbody.appendChild(tableElements);
        });
    }

    deleteProduct = array => {
        array = array.filter((element) => {
            if (element.id !== this.id) {
                return element;
            }
        });
        return array;
    }

    editProduct = () => {
        const name = window.document.getElementById('inputName');
        const price = window.document.getElementById('inputPrice');
        const buttonAdd = window.document.getElementById('add');
        functions['changeInputValue'](
            {
                1: name, 
                2: price,
                3: buttonAdd
            }, 
            {
                1: this.name, 
                2: this.price,
                3: 'Salvar'
            },
            3
        );
        functions['saveProductId'](this.id);
    }

    changeProductData = (name, price) => {
        this.name = name;
        this.price = price;
    }
};

export default Product;  