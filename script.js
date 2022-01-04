let myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
const submitBtn = document.querySelector('.submit');
const bookDisplayer = document.querySelector('.displayBooks');
const listDisplayer = document.querySelector('#list');

function addBookToLibrary () {
    const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
    myLibrary.push(newBook);
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.checked = false;
    displayTheBook(newBook);
}

submitBtn.addEventListener('click', addBookToLibrary);

function displayTheBook (obj) {
    const bookBox = document.createElement('div');

    let textContainer = document.createElement('p');
    textContainer.textContent = `Title: ${obj.title}`;
    bookBox.appendChild(textContainer);

    textContainer = document.createElement('p');
    textContainer.textContent = `Author: ${obj.author}`;
    bookBox.appendChild(textContainer);

    textContainer = document.createElement('p');
    textContainer.textContent = `Pages: ${obj.pages}`;
    bookBox.appendChild(textContainer);

    bookBox.classList.add('bookBox');
    bookDisplayer.appendChild(bookBox);
}