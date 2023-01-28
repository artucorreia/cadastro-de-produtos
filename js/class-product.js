import productsList from './array-products.js';
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

    static updateTable = array => {
        const tbody = window.document.getElementById('tableBody');
        tbody.innerHTML = '';
        array.map((element) => {
            let tableElements = createTableElements(
                element.name, 
                element.price, 
                element.id
            );
            tbody.appendChild(tableElements);
        });
    }

    deleteProduct = () => {
        console.log(typeof productsList)
        console.log(Array.isArray(productsList));
        // productsList = productsList.filter((element) => {
        //     if (element.id !== this.id) {
        //         return element;
        //     }
        // });
    }
};

export default Product;  