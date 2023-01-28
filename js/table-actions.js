import Product from "./class-product.js";
import products from './array-products.js';

const editProduct = id => {
    console.log('edit ok');
    console.log(Product.getProductById(id, products['list']));
};

const deleteProduct = id => {
    let productSelected = Product.getProductById(id, products['list']);
    productSelected.deleteProduct();
    Product.updateTable();
};

const actions = {
    edit:   (productId) => editProduct(productId),
    delete: (productId) => deleteProduct(productId),
};

export default actions;