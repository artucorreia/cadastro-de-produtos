import Product from "./class-product.js";

const changeInputValue = ({...inputs}, {...values}, inputsAmount)  => {
    for(let i = 1; i <= inputsAmount; i++) {
        inputs[i].value = values[i];
    }
};

const saveProductId = id => Product.saveIdForEdit = id;

const resetProductId = () => Product.saveIdForEdit = 0;

const validateInputs = (...inputs) => {
    for (let input of inputs) {
        if (input.value.trim() === '') {
            return true;
        }
    }
};

const clearInputs = (...inputs) => {
    for (let input of inputs) {
        input.value = '';
    }
};

let id = 0;
const generateIds = () => ++id;

export default {
    changeInputValue: changeInputValue,
    saveProductId:  saveProductId,
    resetProductId: resetProductId,
    validateInputs: validateInputs,
    clearInputs:    clearInputs,
    generateIds:    generateIds
};