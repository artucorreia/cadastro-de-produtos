import createTableElements from './table-elements.js';

class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    static addNewProduct = () => {
        
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
    }

    manipulationInputs = ({name, price, buttonAdd}) => {
        name.value = this.name;
        price.value = this.price;
        buttonAdd.value = 'Salvar';
    }
};

export default Product;  