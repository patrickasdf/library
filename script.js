function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call contstructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return(this.title + " by " + this.author + ", " + this.pages +
        ", " + this.read)
    };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", "295 pages", "not read yet");
console.log(theHobbit.info());