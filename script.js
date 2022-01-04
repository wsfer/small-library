let myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const form = createForm();

const bookDisplayer = document.querySelector('.displayBooks');
const listDisplayer = document.querySelector('#list');
const addBookContainer = document.querySelector('.addBookContainer');
const addNewBookBtn = document.querySelector('.newBook');

function callBookForm () {
    addBookContainer.removeChild(addNewBookBtn);
    addBookContainer.appendChild(form);
}

addNewBookBtn.addEventListener('click', callBookForm);

function addBookToLibrary () {
    console.log('aa');
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