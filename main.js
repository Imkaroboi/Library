
const myLibrary = [];
const container = document.querySelector('.container');
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary() {
    let pages = document.getElementById('Pages').value;
    let name = document.getElementById('Name').value;
    let author = document.getElementById('Author').value;
    let read = document.getElementById('read').value;
    let newBook = new Book(name, author, pages, read)
    console.log(newBook);
    myLibrary.push(newBook);
    dialog.close()

    for (let i = 0; i < myLibrary.length; i++) {
        let box = document.createElement('div');
        container.appendChild(box);
        let text = document.createElement('p');
        box.appendChild(text)
        text.textContent = author;
    }
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