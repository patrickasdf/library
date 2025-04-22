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

 Book.prototype.readStatus = function() {
    if (this.read == "read") {
        return this.read = "not read yet";
    } else return this.read = "read";
 };

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayLibrary() {
    while (bookGrid.firstChild) {
        bookGrid.removeChild(bookGrid.firstChild);
    }
    myLibrary.forEach(book => {
        //Display library
        thisBookDiv = document.createElement("div");
        thisBookDiv.classList.add("grid-item");
        thisBookDiv.classList.add(book.idInfo());
        thisBookDiv.textContent = book.info();
        bookGrid.appendChild(thisBookDiv);
        //Add Remove and Toggle Read buttons
        addButtons(book);
    });
}

function addButtons(thisItem) {
    //Find ID
    const bookID = thisItem.idInfo();
    //Remove
    const newButtonRemove = document.createElement("button");
    newButtonRemove.classList.add("grid-item");
    newButtonRemove.classList.add("remove-button");
    newButtonRemove.classList.add(bookID);
    newButtonRemove.indexNumber = bookID;
    newButtonRemove.textContent = "Remove";
    thisBookDiv.appendChild((newButtonRemove));
    newButtonRemove.addEventListener("click", buttonRemove, false);
    //Toggle
    const newButtonToggle = document.createElement("button");
    newButtonToggle.classList.add("grid-item");
    newButtonToggle.classList.add("toggle-read");
    newButtonToggle.classList.add(bookID);
    newButtonToggle.indexNumber = bookID;
    newButtonToggle.textContent = "Toggle Read";
    thisBookDiv.appendChild(newButtonToggle);
    newButtonToggle.addEventListener("click", () => {
        //const thisElement = document.getElementsByClassName(bookID);
        thisItem.readStatus();
        addButtons(thisBookDiv);
    });
}

function buttonRemove() {
    const thisElement = document.getElementsByClassName(this.indexNumber);
    bookGrid.removeChild(thisElement[0]);
    console.log(myLibrary);
}

// function toggleRead() {
//     console.log(myLibrary);
//     const thisToggle = document.getElementsByClassName(this.indexNumber);
//     console.log(thisToggle[0].textContent.split("RemoveToggle Read"));
// }

const submitBook = document.querySelector("dialog form button");

submitBook.addEventListener("click", submitClick, false);

function submitClick(event) {
    event.preventDefault();
    const formTitle = document.forms["bookForm"]["title"].value;
    const formAuthor = document.forms["bookForm"]["author"].value;
    const formPages = document.forms["bookForm"]["pages"].value + " pages";
    const formRead = document.forms["bookForm"]["read"].value;
    addBookToLibrary((formTitle), (formAuthor), (formPages), (formRead));
    dialog.close();
    displayLibrary();
}

addBookToLibrary("AA", "BB", "121 pages", "read");
addBookToLibrary("BB", "CC", "121 pages", "not read yet");
displayLibrary();