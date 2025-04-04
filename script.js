const myLibrary = [];
const bookGrid = document.querySelector("div");
document.body.appendChild(bookGrid);

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call contstructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.info = function() {
        return(this.title + " by " + this.author + ", " + this.pages +
        ", " + this.read)
    };
    this.idInfo = function() {
        return(this.id)
    };
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayLibrary() {
    myLibrary.forEach(book => {
        thisBookDiv = document.createElement("div");
        thisBookDiv.textContent = book.info() + " --ID-- " + book.idInfo();
        bookGrid.appendChild(thisBookDiv);
    });
}
displayLibrary();

addBookToLibrary("Book One", "A. Author", "6 pages", "read");
addBookToLibrary("Book Two", "A. Author", "11 pages", "not read yet");
addBookToLibrary("Book Three", "B. Author", "77 pages", "read");

console.log(myLibrary[0].info());
console.log(myLibrary[0].idInfo());