let myLibrary = [
    {title: "Harry Potter", author: "JK Rowling", pages: 300, isRead: true},
    {title: "Lord of the Rings", author: "J.R.R. Tolkien", pages: 500, isRead: false}
];

let btnOpen = document.querySelector('.newBook');
let btnClose = document.querySelector('.cancel');
let form = document.querySelector('.formPopup');

let container = document.querySelector('.container')


btnOpen.addEventListener('click', newBook);
btnClose.addEventListener('click', ()=>form.style.display = "none");

let harryPotter = new Book("Harry Potter and the order of the phoenix", "J.K. Rowling", 400, true);
displayBook(harryPotter);
displayBook(harryPotter);

function displayBook(book){
    let card = document.createElement('div');
    let titleText = document.createElement('p');
    let authorText = document.createElement('p');
    let pagesText = document.createElement('p');
    let isReadText = document.createElement('p');
    
    titleText.textContent = book.title;
    authorText.textContent = book.author;
    pagesText.textContent = book.pages;
    isReadText.textContent = (book.isRead) ? "true": "false";

    card.className = "card";
    card.appendChild(titleText);
    card.appendChild(authorText);
    card.appendChild(pagesText);
    card.appendChild(isReadText);

    container.appendChild(card);

}


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
