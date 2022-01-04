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
    console.log('a');
}

submitBtn.addEventListener('click', addBookToLibrary);