
const myLibrary = [];
const container = document.querySelector('.container');
const totalbooks = document.getElementById('totalbooks')
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};
function display() {
    let allBooks = document.getElementById("totalbooks");
    allBooks.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let box = document.createElement('div');
        totalbooks.appendChild(box);
        let book = myLibrary[i];
        box.innerHTML = `<p>${book.title}</p>`;
        let paragraph = document.createElement('p');
        paragraph.textContent = `${book.author}`;
        box.appendChild(paragraph)
        console.log(myLibrary[i])
    }
}
function addBookToLibrary() {
    let pages = document.getElementById('Pages').value;
    let name = document.getElementById('Name').value;
    let author = document.getElementById('Author').value;
    let read = document.getElementById('read').value;
    let newBook = new Book(name, author, pages, read)
    myLibrary.push(newBook);
    dialog.close()
    display()
};


const dialogDiv = document.querySelector('dialog');
const dialog = document.getElementById('book-dialog');



function show() {
dialogDiv.style.visibility = "shown";
dialog.showModal() 
};
function hide() {
    dialog.close()
}

// function bookItem() {
    


// const form = document.getElementById('forms');
// form.addEventListener('submit', function (e){
//     e.preventDefault();
//     dialog.close()
// })}