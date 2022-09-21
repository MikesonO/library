const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const add = document.getElementById("btn-add");
const library = document.querySelector(".my-books");

//Empty Library Array
let myLibrary = [];

//Book Constructor
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}
//Add Book btn retrives User's Input
  add.addEventListener("click", ()=>{
    const book = new Book(`${bookTitle.value}`,`${bookAuthor.value}`,`${bookPages.value}`);
    myLibrary.push(book);
    updateBook();
    for (let i = 0; i < myLibrary.length; i++) {
      createCard(myLibrary[i]);
    }
    reset();
  });

  function updateBook(){
    library.querySelectorAll('div').forEach(n => n.remove());
  }
  

  //Create Card and Displays Book Information
  function createCard (item){
    const card = document.createElement("div");
    card.className = "card";
    library.appendChild(card); 
    
    const pTitle = document.createElement('p');
    const pAuthor = document.createElement('p');
    const pPages = document.createElement('p');

    pTitle.innerText = `${item.title}`
    pAuthor.innerText = `Written by: ${item.author}`;
    pPages.innerText = `Pages: ${item.pages}`;

    card.appendChild(pTitle);
    card.appendChild(pAuthor);
    card.appendChild(pPages);
  }

  const reset = ()=>{
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
  }