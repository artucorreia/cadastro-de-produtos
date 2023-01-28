import Product from "./class-product.js";
import productsList from './array-products.js';

const editProduct = id => {
    console.log('edit ok');
    console.log(Product.getProductById(id, productsList));
};

const deleteProduct = id => {
    // console.log('delete ok');
    let productSelected = Product.getProductById(id, productsList);
    console.log(productsList);
    productSelected.deleteProduct(productsList);
    console.log(productsList);
};

const actions = {
    edit:   (productId) => editProduct(productId),
    delete: (productId) => deleteProduct(productId),
};

export default actions;