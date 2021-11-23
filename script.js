let myLibrary = [
    {title: "Harry Potter", author: "JK Rowling", pages: 300, isRead: true},
    {title: "Lord of the Rings", author: "J.R.R. Tolkien", pages: 500, isRead: false}
];

let table = document.querySelector('table');
let data = Object.keys(myLibrary[0]);
let btnOpen = document.querySelector('.newBook');
let btnClose = document.querySelector('.cancel');
let form = document.querySelector('.formPopup');

btnOpen.addEventListener('click', newBook);
btnClose.addEventListener('click', ()=>form.style.display = "none");


displayBooks(table, myLibrary);
generateTableHead(table, data);

function newBook(){
    form.style.display = "block";
}


function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead){
    let newbook = new Book(title, author, pages, isRead);
    myLibrary.push(newbook);
}


function generateTableHead(table, data){
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data){
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }

}

function displayBooks(table, myLibrary){
    for (const book of myLibrary) {
        let newRow = table.insertRow();
        
        for (current in book) {
            let cell = newRow.insertCell();
            let text = document.createTextNode(book[current]);
            cell.appendChild(text);
            
        }

    }
}
