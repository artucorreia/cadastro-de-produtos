import Product from "./class-product.js";
import products from './array-products.js';
import localstorage from "./localstorage.js";

const validationDelete = () => {
    return window.confirm('Tem certeza que deseja deletar esse item?');
};

const getElementHTML = {
    tr: target => target.parentElement.parentElement.lastElementChild,
    id: target => target.parentElement.parentElement.firstElementChild.innerText
};

const editProduct = target => {
    let productSelected =
        Product.getProductById(
            getElementHTML['id'](target), 
            products['list']
        );
    productSelected.editProduct();
};

const deleteProduct = target => {
    if(validationDelete()) {
        let productSelected = 
            Product.getProductById(
                getElementHTML['id'](target), 
                products['list']
            );
        products['list'] = 
            productSelected.deleteProduct(products['list']);
        Product.updateTable(products['list']);
        localstorage['update'](
            products['list']
        );
    }
};

const actions = {
    edit:   (target) => editProduct(target),
    delete: (target) => deleteProduct(target),
};

export default actions;