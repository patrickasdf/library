const myLibrary = [];

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
        ", " + this.read + " id " + this.id)
    };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", "295 pages", "not read yet");
const theBobbit = new Book("The Bobbit", "J.R.R. Tolkein", "295 pages", "not read yet");
console.log(theHobbit.info());
console.log(theBobbit.info());
console.log(theBobbit.info());

function addBookToLibrary() {
    const newBook = new Book(title, author, pages, read);

}