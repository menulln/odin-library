const table = document.querySelector('tbody');
const books = [];

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
}