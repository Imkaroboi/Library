
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
        box.classList.add('boxes')
        totalbooks.appendChild(box);
        let book = myLibrary[i];
        box.innerHTML = `<h2>${book.title}</h2>`;
        let author = document.createElement('h3');
        author.classList.add('author')
        author.textContent = `by: ${book.author}`;
        box.appendChild(author)
        let pages = document.createElement('p');
        pages.textContent = `${book.pages}`;
        box.appendChild(pages)
        let bookstatus = document.createElement('p');
        bookstatus.textContent = `Read:`
        box.appendChild(bookstatus)
        let checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox")
        checkbox.checked = book.read;
        box.appendChild(checkbox)
        let remove = document.createElement('button');
        remove.textContent = "Remove";
        remove.classList.add('removeButton');
        remove.setAttribute('onclick', 'document.querySelector(".boxes").remove(); myLibrary.pop()')
        box.appendChild(remove)
        console.log(myLibrary[i])
    }
}
function addBookToLibrary() {
    let pages = document.getElementById('Pages').value;
    let name = document.getElementById('Name').value;
    let author = document.getElementById('Author').value;
    let read = document.getElementById('read').checked;
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

    


const form = document.getElementById('forms');
form.addEventListener('submit', (e) => {
    e.preventDefault();
})
