const editProduct = () => {
    console.log('edit ok');
};

const deleteProduct = () => {
    console.log('delete ok')
};

const options = {
    edit: () => editProduct(),
    delete: () => deleteProduct(),
};

const tableAction = config => options[config]();

export default tableAction;