const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const add = document.getElementById("btn-add");
const library = document.querySelector(".my-books");
const empty = document.querySelector(".empty-container");
const bookTotal = document.getElementById("total-books");
const booksRead = document.getElementById("books-read");

//Empty Library Array
let myLibrary = [];

//Increments based on total of books read
let booksTotalCount = 0;
let booksReadCount = 0;

//Book Constructor
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}
//Add Book btn retrives User's Input
add.addEventListener("click", () => {
  const formTitle = document.getElementById("title");
  const formAuthor = document.getElementById("author");
  const formPages = document.getElementById("pages");

  const formTitleInput = formTitle.value.trim();
  const formAuthorInput = formAuthor.value.trim();
  const formPagesInput = formPages.value.trim();

  formValidation(formTitleInput, formAuthorInput, formPagesInput);

  if (formTitleInput === "" || formAuthorInput === "" || formPagesInput === "") {
    return;
  }

  const book = new Book(`${bookTitle.value}`, `${bookAuthor.value}`, `${bookPages.value}`);
  myLibrary.push(book);
  updateBooks();
  checkTotalBooksRead();
  reset();
});

function updateBooks() {
  booksTotalCount = 0;
  booksReadCount = 0;
  checkTotalBooksRead();
  library.querySelectorAll('div').forEach(n => n.remove()); //Deletes every book
  for (let i = 0; i < myLibrary.length; i++) { //Updates and Displys books
    createCard(myLibrary[i]);
  }
  checkIfEmpty();
}


//Create Card and Displays Book Information
function createCard(item) {
  const card = document.createElement("div");
  card.className = "card";
  library.appendChild(card);

  const pTitle = document.createElement("p");
  const pAuthor = document.createElement("p");
  const pPages = document.createElement("p");
  const deleteBtn = document.createElement("i");
  const readCheck = document.createElement("label");
  const toggleBtn = document.createElement("input");

  pTitle.innerText = `${item.title}`
  pAuthor.innerText = `Written by: ${item.author}`;
  pPages.innerText = `Pages: ${item.pages}`;

  let deleteBtnClasses = ["delete", "fa-solid", "fa-trash"];
  deleteBtn.classList.add(...deleteBtnClasses);

  readCheck.innerText = "Read:";
  readCheck.classList.add("checkbox");
  toggleBtn.setAttribute("type", "checkbox");
  readCheck.appendChild(toggleBtn);

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

  toggleBtn.addEventListener("click", () => {
    if (toggleBtn.checked == true) {
      booksReadCount++;
      checkTotalBooksRead()
    } else {
      booksReadCount--;
      checkTotalBooksRead()
    }
  });

  booksTotalCount++;
  checkTotalBooks();
}

//Resets Input Fields
const reset = () => {
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  booksReadCount = 0;
  booksRead.innerHTML = "Books Read: 0";
}

//Checks Library is empty
const checkIfEmpty = () => {
  if (myLibrary.length != 0) {
    empty.classList.add("hide");
  } else {
    empty.classList.remove("hide");
    booksTotalCount = 0;
    checkTotalBooks();
  }
}

//Checks the Total number of books read
const checkTotalBooksRead = () => booksRead.innerHTML = `Books Read: ${booksReadCount}`;

const checkTotalBooks = () => {
  bookTotal.innerText = `Total Books: ${booksTotalCount}`;
}



// const checkTitle = (input, error) => {
//     if(input === ""){
//     error.classList.remove("hidden");
//     add.disabled = true;
//   } else {
//     error.classList.add("hidden");
//     add.disabled = false;
//   }
// }

function formValidation(titleInput, authorInput, pagesInput) {
  const titleError = document.getElementById("title-check");
  const authorError = document.getElementById("author-check");
  const pagesError = document.getElementById("pages-check");

  if (titleInput === "") {
    titleError.classList.remove("hidden");
  } else {
    titleError.classList.add("hidden");
  }

  if (authorInput === "") {
    authorError.classList.remove("hidden");
  } else {
    authorError.classList.add("hidden");
  }

  if (pagesInput == 0) {
    pagesError.classList.remove("hidden");
  } else {
    pagesError.classList.add("hidden");
  }
}


//Event listener for Page Input
document.getElementById("pages").addEventListener("keypress", function (evt) {

  //Prvents these keys from being pressed
  const invalidChars = [
    "-",
    "+",
    "e",
    "."
  ];

  if (invalidChars.includes(evt.key)) {
    evt.preventDefault();
  }

  //Limits the characters the user can Input to 7 digits.
  const max_chars = 6;
  if (this.value.length > max_chars) {
    this.value = this.value.substr(0, max_chars);
  }

  //Prevents leading zeroes
  this.value = this.value.replace(/^0+/, '');
});