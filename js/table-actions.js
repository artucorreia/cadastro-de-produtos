import Product from "./class-product.js";
import productsList from './array-products.js';

const editProduct = id => {
    console.log('edit ok');
    console.log(Product.getProductById(id, productsList));
};

const deleteProduct = id => {
    console.log('delete ok');
    console.log(Product.getProductById(id, productsList));
};

const options = {
    edit:   (idFromElement) => editProduct(idFromElement),
    delete: (idFromElement) => deleteProduct(idFromElement),
};

export default options;