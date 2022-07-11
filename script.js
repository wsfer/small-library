let myLibrary = [
    {title: "Book", author: "Author", pages: 342, read: false},
    {title: "Paper", author: "Nothing", pages: 46, read: false},
    {title: "Nothing", author: "Hello", pages: 123, read: true},
    {title: "Random", author: "Name", pages: 856, read: false}
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
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
/*** Using prototype will avoid javascript from copying the
same function for each object, reducing memory usage ***/
Book.prototype.changeReadStatus = () => {
    this.read = !(this.read);
}


// Script to create the book object.
document.querySelector('.create').addEventListener('click', addBookToLibrary);

function addBookToLibrary () {
    myLibrary.push(new Book(
        document.querySelector('#title').value,
        document.querySelector('#author').value,
        document.querySelector('#pages').value,
        document.querySelector('#read').checked,
    ));
    closeBookForm();
}

function createBookCard (book) {
    let card = document.createElement('div');
    card.classList.add('card');
    let title = document.createElement('h3');
    title.textContent = book.title;
    let author = document.createElement('p');
    author.textContent = book.author;
    let pages = document.createElement('p');
    pages.textContent = book.pages;
    let read = document.createElement('p');
    read.textContent = book.read;
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    document.querySelector('.books').appendChild(card);
}

for (let i = 0; i < myLibrary.length-1; i++) {
    createBookCard(myLibrary[i]);
}