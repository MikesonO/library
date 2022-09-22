const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const add = document.getElementById("btn-add");
const library = document.querySelector(".my-books");
const empty = document.querySelector(".empty-container");

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
    updateBooks();
    reset();
  });

  function updateBooks(){
    library.querySelectorAll('div').forEach(n => n.remove()); //Deletes every book
    for (let i = 0; i < myLibrary.length; i++) { //Updates and Displys books
      createCard(myLibrary[i]);
    }
      checkIfEmpty();
  }
  

  //Create Card and Displays Book Information
  function createCard (item){
    const card = document.createElement("div");
    card.className = "card";
    library.appendChild(card); 
    
    const pTitle = document.createElement("p");
    const pAuthor = document.createElement("p");
    const pPages = document.createElement("p");
    const deleteBtn = document.createElement("i");
    const readCheck = document.createElement("label");
    const toggleBtn = document.createElement("input");
  

    let deleteBtnClasses = ["delete", "fa-solid", "fa-trash"];
    deleteBtn.classList.add(...deleteBtnClasses);
    
    readCheck.innerText = "Read:";
    readCheck.classList.add("checkbox");
    toggleBtn.setAttribute("type", "checkbox");
    readCheck.appendChild(toggleBtn);

    pTitle.innerText = `${item.title}`
    pAuthor.innerText = `Written by: ${item.author}`;
    pPages.innerText = `Pages: ${item.pages}`;

    card.appendChild(pTitle);
    card.appendChild(pAuthor);
    card.appendChild(pPages);
    card.appendChild(deleteBtn);
    card.appendChild(readCheck);

    deleteBtn.addEventListener("click", () => {
      myLibrary.splice(myLibrary.indexOf(item), 1);
      console.log(myLibrary);
      console.log(myLibrary.length);
      updateBooks();
    });
  }

  //Resets Input Fields
  const reset = ()=>{
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
  }

  //Checks Library is empty
  const checkIfEmpty = () =>{
    if (myLibrary.length != 0){
      empty.classList.add("hide");
    } else {
      empty.classList.remove("hide");
    }
  }