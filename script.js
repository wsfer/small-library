let myLibrary = [];

// Code to call and close the hidden book form.
document.querySelector('.new-book').addEventListener('click', () => {
    document.querySelector('.book-form').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.book-form').style.display = 'none';
});

// Book object constructor.
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
}