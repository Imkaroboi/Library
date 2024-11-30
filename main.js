const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};

function addBookToLibrary() {

};
const dialog = document.getElementById('book-dialog');
function show() {
dialog.showModal()
};
function hide() {
    dialog.close()
}