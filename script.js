let myLibrary = [
    new Book('Book', 'Author', 342, false, 'aaaaaaaa'),
    new Book('Paper', 'Nothing', 46, true, 'Stopped on page 86'),
    new Book('Nothing', 'Hello', 123, true, 'Null'),
    new Book('Random', 'Name', 856, true, 'A book')
]; //where book objects will be stored

// Code to control the hidden book form.
function closeBookForm () {
    document.querySelector('.book-form').style.display = 'none';
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#read').checked = false;
}

document.querySelector('.new-book').addEventListener('click', () => {
    document.querySelector('.book-form').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', closeBookForm);


// Book object constructor, the main objective of this project.
function Book (title, author, pages, read, description) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.description = description;
}
/*** Using prototype will avoid javascript from copying the
same function for each object, reducing memory usage ***/
Book.prototype.changeReadStatus = function () {
    this.read = !(this.read);
}


// Script to create the book object.
document.querySelector('.create').addEventListener('click', addBookToLibrary);

function addBookToLibrary () {
    let newBook = new Book(
        document.querySelector('#title').value,
        document.querySelector('#author').value,
        document.querySelector('#pages').value,
        document.querySelector('#read').checked,
        document.querySelector('#description').value
    );
    myLibrary.push(newBook);
    closeBookForm();
    for (let i = 0; i < myLibrary.length; i++) {
        if (i >= document.querySelectorAll('.card').length) {
            createBookCard(myLibrary[i]);
        }
    }
}

for (let i = 0; i < myLibrary.length; i++) {
    createBookCard(myLibrary[i]);
}

function createBookCard (book) {
    let card = document.createElement('div');
    card.classList.add('card');
    
    // This will associate the card with book object.
    card.objIndex = myLibrary.indexOf(book);

    createBookInformations(book, card);
    createBookDescription(book, card);
    createButtons(book, card);
    document.querySelector('.books').appendChild(card);
}

function createBookInformations (book, parent) {
    let title = document.createElement('h3');
    title.textContent = book.title;
    title.classList.add('book-title');
    parent.appendChild(title);

    let author = document.createElement('p');
    author.textContent = '-' + book.author;
    author.classList.add('book-author');
    parent.appendChild(author);

    let pages = document.createElement('p');
    pages.textContent = book.pages + ' pages';
    pages.classList.add('book-pages');
    parent.appendChild(pages);
}

function createBookDescription (book, parent) {
    let description = document.createElement('p');
    description.textContent = book.description;
    let title = document.createElement('h4');
    title.textContent = 'Description:';

    let container = document.createElement('div');
    container.classList.add('description');
    container.appendChild(title);
    container.appendChild(description);

    parent.appendChild(container);
}

function createButtons (book, parent) {
    let read = document.createElement('button');
    read.textContent = book.read;
    read.classList.add('read');
    read.addEventListener('click', () => {
        myLibrary[parent.objIndex].changeReadStatus();
        read.textContent = book.read;
    });
    parent.appendChild(read);

    let deleteBook = document.createElement('button');
    deleteBook.textContent = 'Delete';
    deleteBook.classList.add('delete');
    parent.appendChild(deleteBook);
}