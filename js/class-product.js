import products from './array-products.js';
import createTableElements from './table-elements.js';

class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    static getProductById = (id, array) => {
        let product = array.filter((element) => {
            if (element.id == id) {
                return element;
            }
        });
        return product[0];
    }

    static updateTable = () => {
        const tbody = window.document.getElementById('tableBody');
        tbody.innerHTML = '';
        products['list'].map((element) => {
            let tableElements = createTableElements(
                element.id,
                element.name, 
                element.price 
            );
            tbody.appendChild(tableElements);
        });
    }

    deleteProduct = () => {
        products['list'] = products['list'].filter((element) => {
            if (element.id !== this.id) {
                return element;
            }
        });
    }
};

export default Product;  