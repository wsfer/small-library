
// Code to call and close the hidden book form.
document.querySelector('.new-book').addEventListener('click', () => {
    document.querySelector('.book-form').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.book-form').style.display = 'none';
});

// Book object constructor.
function book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}