import productsList from './array-products.js';
import createTableElements from './table-elements.js';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.active = true;
    }

    static getProduct = (name, array) => {
        let productsFilter = array.filter((element) => {
            if (element.name === name) {
                return element;
            }
        });
        return productsFilter[0];
    }

    static updateTable = array => {
        const tbody = window.document.getElementById('tableBody');
        tbody.innerHTML = '';
        array.map((element, indice) => {
            let tableElements = createTableElements(
                element.name, 
                element.price, 
                indice
            );
            tbody.appendChild(tableElements);
        });
    }

    changeStatus = () => {
        return this.active = false;
    }
};

export default Product;