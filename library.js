const table = document.querySelector('tbody');
const buttonAdd = document.querySelector('.button-add');
const buttonSubmit = document.querySelector('#submit');
let books = [];

function Book(title, author, pages, read, rendered) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.isRendered = rendered
}

function addToLibrary(title, author, pages, read, rendered) {
    const temp = Object.create(Book.prototype, { title: { value: title, enumerable: true },
                                       author: { value: author, enumerable: true },
                                       pages: { value: pages, enumerable: true },
                                       read: { value: read, enumerable: true },
                                       isRendered: { value: rendered, enumerable: true }  });
    books.push(temp);
}

function renderBooks() {
    books.forEach( (book) => {
        if (!(book.isRendered)) {
            const tableRow = document.createElement('tr');
            table.appendChild(tableRow);      
            for (const property in book) {
                if (property !== 'isRendered') {
                    const tableData = document.createElement('td');
                    tableData.textContent = book[property];
                    tableRow.appendChild(tableData);
                } 
            } 
        }
    });
    books = books.map( (book) => book.isRendered = true);
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
    const pages = (document.querySelector('#pages').value === '') ? 'Unknown Pages' : document.querySelector('#pages').value;
    const read = (document.querySelector('input[name="read"]:checked').value === null) ? false : document.querySelector('input[name="read"]:checked').value;
    addToLibrary(title, author, pages, read, false);
    renderBooks();
    reloadCss();
    resetModalFields();
    closeModal();
});

addToLibrary('test', 'test', 300, false, false);
addToLibrary('yee', 'yee', 3020, true, false);
addToLibrary('ffds', 'rvd', 3600, false, false);
addToLibrary('uuuuu', 'fdddd', 3300, true, false);
addToLibrary('rr', 'hyrxh', 3010, false, false);

renderBooks();