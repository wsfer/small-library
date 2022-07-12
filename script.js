let myLibrary = [
    {title: "Book", author: "Author", pages: 342, read: false, description: "aaaa"},
    {title: "Paper", author: "Nothing", pages: 46, read: false, description: "stopped on page 89"},
    {title: "Nothing", author: "Hello", pages: 123, read: true, description: "Null"},
    {title: "Random", author: "Name", pages: 856, read: false, description: "a book"}
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
        document.querySelector('#description').value
    ));
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
    let title = document.createElement('h3');
    title.textContent = book.title;
    let author = document.createElement('p');
    author.textContent = '-' + book.author;
    let pages = document.createElement('p');
    pages.textContent = book.pages + ' pages';
    let read = document.createElement('input');
    let label = document.createElement('label');
    label.for = 'read';
    label.textContent = 'Read ';
    read.type = 'checkbox';
    read.id = 'read';
    read.checked = book.read;
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(label);
    card.appendChild(read);
    let description = document.createElement('h4');
    description.textContent = 'Description:';
    card.appendChild(description);
    description = document.createElement('p');
    description.textContent = book.description;
    card.appendChild(description);
    document.querySelector('.books').appendChild(card);
}

function createTrashIcon (parent) {
    svg = document.createElement('svg');
    svg.style = 'width:24px;height:24px';
    svg.viewBox = '0 0 24 24';
}