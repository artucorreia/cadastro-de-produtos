const conversionToBRL = value => {
    return Number(value).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

const createTableElements = (id, name, price) => {
    const tr = window.document.createElement('tr');
    const tdId = window.document.createElement('td');
    tdId.innerHTML = id;
    tdId.className = 'itemId';
    const tdName = window.document.createElement('td');
    tdName.innerHTML = name;
    const tdPrice = window.document.createElement('td');   
    let priceInBRL = conversionToBRL(price);
    tdPrice.innerHTML = priceInBRL;
    tdPrice.className = 'number';
    const tdActions = window.document.createElement('td');
    tdActions.className = 'action';
    const iconEdit = window.document.createElement('i');
    iconEdit.className = 'fa-solid fa-pencil';
    iconEdit.setAttribute('data-config', 'edit');
    const iconDelete = window.document.createElement('i');
    iconDelete.className = 'fa-solid fa-trash-can';
    iconDelete.setAttribute('data-config', 'delete');
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