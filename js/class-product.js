import createTableElements from './table-elements.js';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    static getProduct = () => {
        return console.log('get ok');
    }

    addInTable = () => {
        let tableElements = createTableElements(this.name, this.price);
        const tbody = window.document.getElementById('tableBody');
        tbody.appendChild(tableElements);
    }

};

export default Product;