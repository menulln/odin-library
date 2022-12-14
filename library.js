const table = document.querySelector('tbody');
const buttonAdd = document.querySelector('.button-add');
const buttonSubmit = document.querySelector('#submit');
let books = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addToLibrary(title, author, pages, read) {
    const temp = new Book(title, author, pages, read);
    books.push(temp);
}

function renderBooks() {
    books.forEach( (book) => {
        const tableRow = document.createElement('tr');
        table.appendChild(tableRow);      
        for (const property in book) {
            if (property !== 'read') {
                const tableData = document.createElement('td');
                tableData.textContent = book[property];
                tableRow.appendChild(tableData);
            } else {
                const tableData = document.createElement('td');
                const toggleRead = document.createElement('button');
                toggleRead.classList.toggle( (book[property] === 'true') ? 'true' : 'false');
                tableData.appendChild(toggleRead);
                tableRow.appendChild(tableData);
                toggleRead.addEventListener('click', (e) => {
                    toggleRead.classList.toggle('true');
                    toggleRead.classList.toggle('false');
                });
            }
        }
        const tableData = document.createElement('td');
        const buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'Delete';
        buttonDelete.classList.add('delete');
        tableData.appendChild(buttonDelete);
        tableRow.appendChild(tableData);
        buttonDelete.addEventListener('click', (e) => {
            e.path[2].remove();
            reloadCss();
        });
    }); 
    books = [];
}

function resetModalFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
}

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.style.cssText = 'visibility: hidden;';
}

function reloadCss() {
    let stylesheet = document.querySelector('link');
    stylesheet.href += '';
}

buttonAdd.addEventListener('click', (e) => {
    const modal = document.querySelector('.modal');
    const modalClose = modal.querySelector('span');
    modal.style.cssText = 'visibility: visible;';
    modalClose.addEventListener('click', (e) => {
        modal.style.cssText = 'visibility: hidden;';
    });
});

buttonSubmit.addEventListener('click', (e) => {
    const title = (document.querySelector('#title').value === '') ? 'Unknown Title' : document.querySelector('#title').value;
    const author = (document.querySelector('#author').value === '') ? 'Unknown Author' : document.querySelector('#author').value;
    const pages = (document.querySelector('#pages').value === '') ? '/' : document.querySelector('#pages').value;
    const read = (document.querySelector('input[name="read"]:checked').value === null) ? false : document.querySelector('input[name="read"]:checked').value;
    addToLibrary(title, author, pages, read);
    renderBooks();
    reloadCss();
    resetModalFields();
    closeModal();
});