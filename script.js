const myLibrary = [];
const bookGrid = document.querySelector(".grid-container");
document.body.appendChild(bookGrid);

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

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
    while (bookGrid.firstChild) {
        bookGrid.removeChild(bookGrid.firstChild);
    }
    myLibrary.map(book => {
        thisBookDiv = document.createElement("div");
        thisBookDiv.classList.add("grid-item");
        thisBookDiv.textContent = book.info() + " --ID-- " + book.idInfo();
        bookGrid.appendChild(thisBookDiv);
    });
}

addBookToLibrary("Book One", "A. Author", "6 pages", "read");
addBookToLibrary("Book Two", "A. Author", "11 pages", "not read yet");
addBookToLibrary("Book Three", "B. Author", "77 pages", "read");



const submitBook = document.querySelector("dialog form button");

submitBook.addEventListener("click", submitClick, false);

function submitClick(event) {
    event.preventDefault();
    const formTitle = document.forms["bookForm"]["title"].value;
    console.log("title " + formTitle)
    const formAuthor = document.forms["bookForm"]["author"].value;
    console.log("author " + formAuthor);
    const formPages = document.forms["bookForm"]["pages"].value + " pages";
    console.log("pages " + formPages);
    const formRead = document.forms["bookForm"]["read"].value;
    console.log("read? " + formRead);
    addBookToLibrary(toString(formTitle), toString(formAuthor), toString(formPages));
    dialog.close();
    displayLibrary();
}


displayLibrary();