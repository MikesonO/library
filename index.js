const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const add = document.getElementById("add");

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

Book.prototype.addBookToLibrary = function(){
  myLibrary.push(this.title);
  myLibrary.push(this.author);
  myLibrary.push(this.pages);
  console.log(myLibrary);
}

  add.addEventListener("click", ()=>{
    const book = new Book(`${bookTitle.value}`,`${bookAuthor.value}`,`${bookPages.value}`);
    book.addBookToLibrary()
    reset();
  });

  const reset = ()=>{
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
  }