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