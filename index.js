let myLibrary = [];

function Book(title) {
  this.title = title;
}

Book.prototype.addBookToLibrary = function(){
  myLibrary.push(this.title);
  console.log(myLibrary);
}

const book1 = new Book("Harry Potter");
const book2 = new Book("The Hunger Games");

book1.addBookToLibrary()
book2.addBookToLibrary()