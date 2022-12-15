const table = document.querySelector('tbody');
const buttonAdd = document.querySelector('.button-add');
const buttonSubmit = document.querySelector('#submit');
let books = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addToLibrary(title, author, pages, read) {
    const temp = Object.create(Book.prototype, { title: { value: title, enumerable: true },
                                       author: { value: author, enumerable: true },
                                       pages: { value: pages, enumerable: true },
                                       read: { value: read, enumerable: true } });
    books.push(temp);
}

function renderBooks() {
    books.forEach( (book) => {
        const tableRow = document.createElement('tr');
        table.appendChild(tableRow);      
        for (const property in book) {
            const tableData = document.createElement('td');
            tableData.textContent = book[property];
            tableRow.appendChild(tableData);
        }  
    });
    books = [];
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
    const pages = (document.querySelector('#pages').value === '') ? 'Unknown Pages' : document.querySelector('#pages').value;
    const read = (document.querySelector('input[name="read"]:checked').value === null) ? false : document.querySelector('input[name="read"]:checked').value;
    addToLibrary(title, author, pages, read);
    renderBooks();
});