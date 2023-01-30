import Product from "./class-product.js";
import functions from "./functions.js";

const setLocalStorage = () => {
    if (localStorage.products === undefined) {
        localStorage.setItem('products', '');
    }
};

const updateLocalStorage = array => localStorage.products = JSON.stringify(array);

const displayLocalStorage = array => {
    let localStorageInObject = JSON.parse(localStorage.products);
    localStorageInObject.map((element) => {
        let newProduct = 
            new Product(
                functions['generateIds'](), 
                element.name, 
                element.price
            ); 
        array.push(newProduct);
    })
    Product.updateTable(array);
};

export default {
    set: setLocalStorage,
    update: updateLocalStorage,
    display: displayLocalStorage,
};