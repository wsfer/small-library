let myLibrary = [];
const form = createForm();

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const bookDisplayer = document.querySelector('.displayBookContainer');
const addBookContainer = document.querySelector('.addBookContainer');
const addNewBookBtn = document.querySelector('.newBook');

function callBookForm () {
    addBookContainer.removeChild(addNewBookBtn);
    addBookContainer.appendChild(form);
}

addNewBookBtn.addEventListener('click', callBookForm);

function addBookToLibrary () {
    const title = document.querySelector('.titleInput');
    const author = document.querySelector('.authorInput');
    const pages = document.querySelector('.pagesInput');
    let readCheckBox = document.querySelector('.readInput');
    let redStatus = '';
    if (readCheckBox.checked === true) {
        readStatus = "Read";
    } else {
        readStatus = "Not Read";
    }
    const newBook = new Book (title.value, author.value, pages.value, readStatus);

    myLibrary.push(newBook);
    displayBooks();

    title.value = '';
    author.value = '';
    pages.value = '';
    readCheckBox.checked = false;
    addBookContainer.removeChild(form);
    addBookContainer.appendChild(addNewBookBtn);
}

//Will create the "books" on the page.
function displayBooks () {

    while (bookDisplayer.firstChild) {
        bookDisplayer.removeChild(bookDisplayer.firstChild);
    }

    for (let book of myLibrary) {
        let bookBox = document.createElement('div');
        let title = document.createElement('p');
        let author = document.createElement('p');
        let pages = document.createElement('p');
        let readStatus = document.createElement('button');

        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        readStatus.textContent = book.read;

        if (readStatus.textContent === "Read") {
            readStatus.style.background = "green";
        } else {
            readStatus.style.background = "red";
        }

        readStatus.addEventListener('click', function (e) {changeReadStatus(e.target);});

        bookBox.appendChild(title);
        bookBox.appendChild(author);
        bookBox.appendChild(pages);
        bookBox.appendChild(readStatus);

        bookBox.classList.add('bookBox');
        bookDisplayer.appendChild(bookBox);
    }
}

function changeReadStatus (button) {
    if (button.textContent === "Not Read") {
        button.style.background = "green";
        button.textContent = "Read";
    } else {
        button.style.background = "red";
        button.textContent = "Not Read";
    }

    //Also change read atributte inside myLibrary.
    for (let book of myLibrary) {
        if (button.parentNode.firstChild.textContent === book.title) {
            book.read = button.textContent;
        };
    }
}

//This is big...
function createForm () {
    let myForm = document.createElement('div');
    myForm.classList.add('formContainer'); 

    let inputContainer = document.createElement('div');
    let label = document.createElement('label');
    let input = document.createElement('input');
    inputContainer.classList.add('titleContainerInput');
    label.setAttribute('for', 'titleInput');
    label.textContent = 'Title:';
    input.setAttribute('type', 'text');
    input.classList.add('titleInput');
    inputContainer.appendChild(label);
    inputContainer.appendChild(input);
    myForm.appendChild(inputContainer);

    inputContainer = document.createElement('div');
    label = document.createElement('label');
    input = document.createElement('input');
    inputContainer.classList.add('authorContainerInput');
    label.setAttribute('for', 'authorInput');
    label.textContent = 'Author:';
    input.setAttribute('type', 'text');
    input.classList.add('authorInput');
    inputContainer.appendChild(label);
    inputContainer.appendChild(input);
    myForm.appendChild(inputContainer);

    inputContainer = document.createElement('div');
    label = document.createElement('label');
    input = document.createElement('input');
    inputContainer.classList.add('pagesContainerInput');
    label.setAttribute('for', 'pagesInput');
    label.textContent = 'Pages:';
    input.setAttribute('type', 'text');
    input.classList.add('pagesInput');
    inputContainer.appendChild(label);
    inputContainer.appendChild(input);
    myForm.appendChild(inputContainer);

    inputContainer = document.createElement('div');
    label = document.createElement('label');
    input = document.createElement('input');
    inputContainer.classList.add('readContainerInput');
    label.setAttribute('for', 'readInput');
    label.textContent = 'Read?';
    input.setAttribute('type', 'checkbox');
    input.classList.add('readInput');
    inputContainer.appendChild(label);
    inputContainer.appendChild(input);
    myForm.appendChild(inputContainer);

    let submit = document.createElement('button');
    submit.classList.add('submitBtn');
    submit.textContent = 'Submit';
    submit.addEventListener('click', addBookToLibrary);
    myForm.appendChild(submit);
    
    return myForm;
}