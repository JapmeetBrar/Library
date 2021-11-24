let myLibrary = [
    {title: "Harry Potter", author: "JK Rowling", pages: 3000, isRead: true},
    {title: "Lord of the Rings", author: "J.R.R. Tolkien", pages: 500, isRead: false}
];

let btnOpen = document.querySelector('.newBook');
let btnClose = document.querySelector('.cancel');
let form = document.querySelector('.formPopup');
let container = document.querySelector('.container');
let btnSubmit = document.querySelector('.submit');
let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author');
let pagesInput = document.querySelector('#pages');
let isReadInput = document.querySelector('#read');

btnOpen.addEventListener('click', popupWindow);
btnClose.addEventListener('click', ()=>form.style.display = "none");

btnSubmit.addEventListener('click', function(){
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, isReadInput.checked);
    
});

let harryPotter = new Book("Harry Potter and the order of the phoenix", "J.K. Rowling", 400, true);

myLibrary.forEach(book =>{
})

function newBook(){
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let isRead = isReadInput.value;
    addBookToLibrary(title, author, pages, isRead);

}

function displayBook(book){
    let card = document.createElement('div');
    let titleText = document.createElement('p');
    let authorText = document.createElement('p');
    let pagesText = document.createElement('p');
    let isReadText = document.createElement('p');
    
    titleText.textContent = '\"' + book.title + '\"';
    authorText.textContent = book.author;
    pagesText.textContent = book.pages + " Pages";
    isReadText.textContent = (book.isRead);
    
    card.className = "card";
    card.appendChild(titleText);
    card.appendChild(authorText);
    card.appendChild(pagesText);
    card.appendChild(isReadText);

    container.appendChild(card);

}


function popupWindow(){
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
    displayBook(newbook);
}
