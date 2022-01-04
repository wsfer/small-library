let myLibrary = [];

function Book (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
const submitBtn = document.querySelector('.submit');

function addBookToLibrary () {
    const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value);
    myLibrary.push(newBook);
}

submitBtn.addEventListener('click', addBookToLibrary);