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
    
    /* this will create this svg:
    <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
    </svg>
    */
    let deleteBook = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    deleteBook.setAttribute('viewBox', '0 0 24 24');
    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', 'currentColor');
    path.setAttribute('d', 'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z');
    deleteBook.appendChild(path);
    deleteBook.classList.add('delete');
    deleteBook.addEventListener('click', () => {
        /* This will delete the card element and decrement
        the index of all next cards by 1 */
        const cards = document.querySelectorAll('.card');
        myLibrary.splice(parent.objIndex, 1);
        for (let i=parent.objIndex+1; i < cards.length; i++) {
            cards[i].objIndex--;
        }
        parent.parentElement.removeChild(parent);
    })
    parent.appendChild(deleteBook);
}