import createTableElements from './table-elements.js';
import functions from './functions.js';
import products from './array-products.js'

class Product {
    static saveIdForEdit = 0;
    
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    static addNewProduct = array => {
        const name =  window.document.getElementById('inputName');
        const price = window.document.getElementById('inputPrice');
        let inputInvalid = functions['validateInputs'](name, price);
        if (inputInvalid) {
            window.alert('Verifique os campos e tente novamente');
        } else {
            if (Product.saveIdForEdit == 0) {
                let newProduct = new Product(
                    functions['generateIds'](),
                    name.value.trim(), 
                    price.value
                );
                array.push(newProduct);
            } else {
                let productEdited =
                Product.getProductById(Product.saveIdForEdit, products['list']);
                console.log(productEdited);
                productEdited.changeDados(
                    name.value.trim(),
                    price.value
                );
                functions['resetProductId']();
            }
            functions['clearInputs'](name, price);
            Product.updateTable(array);
        }
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
        this.manipulationInputs({
            name,
            price,
            buttonAdd
        });
        functions['saveProductId'](this.id);
    }

    manipulationInputs = ({name, price, buttonAdd}) => {
        name.value = this.name;
        price.value = this.price;
        buttonAdd.value = 'Salvar';
    }

    changeDados = (name, price) => {
        this.name = name;
        this.price = price;
    }
};

export default Product;  