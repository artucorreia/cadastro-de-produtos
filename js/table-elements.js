let position = 0;
const counterTr = () => ++position;

const createTableElements = (name, price) => {
    // criando elementos
    position = counterTr();
    const tr = window.document.createElement('tr');
    const tdId = window.document.createElement('td');
    tdId.innerHTML = position;
    tdId.className = 'itemId';
    const tdName = window.document.createElement('td');
    tdName.innerHTML = name;
    const tdPrice = window.document.createElement('td');
    tdPrice.innerHTML = price;
    tdPrice.className = 'number';
    const tdActions = window.document.createElement('td');
    tdActions.className = 'action';
    const iconEdit = window.document.createElement('i');
    iconEdit.className = 'fa-solid fa-pencil';
    const iconDelete = window.document.createElement('i');
    iconDelete.className = 'fa-solid fa-trash-can';
    // organizando
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tdActions.appendChild(iconEdit);
    tdActions.appendChild(iconDelete);
    tr.appendChild(tdActions);
    return tr;
};

export default createTableElements;