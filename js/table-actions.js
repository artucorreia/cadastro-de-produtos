import Product from "./class-product.js";
import productsList from './array-products.js';

const editProduct = () => {
    console.log('edit ok');
};

const deleteProduct = elementHTML => {
    const product = Product.getProduct(
        elementHTML.parentElement.parentElement.children[1].innerText, 
        productsList
    );
    product.changeStatus();
    productsList = product.removeFromArray(productsList);
};

const options = {
    edit:   (elementHTML) => editProduct(elementHTML),
    delete: (elementHTML) => deleteProduct(elementHTML),
};

const tableActions = event => options[event.target.dataset.config](event.target);

export default tableActions;