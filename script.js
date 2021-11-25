let myLibrary = [
    {title: "Harry Potter", author: "JK Rowling", pages: 3000, isRead: true},
    {title: "Lord of the Rings", author: "J.R.R. Tolkien", pages: 500, isRead: true}
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

myLibrary.forEach(book =>{
    displayBook(book);
})

function displayBook(book){
    let card = document.createElement('div');
    let titleText = document.createElement('h3');
    let authorText = document.createElement('p');
    let pagesText = document.createElement('p');
    let readButton = document.createElement('button')
    let delButton = document.createElement('input');
    let box = document.createElement('div');
    let span = document.createElement ('span');

    card.className = "card";
    card.id = book.title;

    box.className = "box";
    
    delButton.type = "image";
    delButton.src = "../Library/red-cross.png";
    delButton.width = "50";
    delButton.height = "50";

    delButton.addEventListener('click', ()=>{
        deleteBook(book);
    })
    span.textContent = book.title
    titleText.textContent = 'Title: ';
    titleText.appendChild(span);

    authorText.textContent = "Author: " + book.author;
    pagesText.textContent = "Pages: " + book.pages;
  
    if (book.isRead){
        readButton.className = "btn-status btn-read";
        readButton.textContent = "READ!";
    }else{
        readButton.className = "btn-status btn-notread";
        readButton.textContent = "NOT READ!"
    }
    
    readButton.addEventListener('click', ()=>{
        toggleButton(readButton, book);
    });

    box.append(readButton, delButton);
    card.append(titleText, authorText, pagesText, box);
    container.appendChild(card);

}

function toggleButton (button, book){
    if (button.className.includes('btn-read')){
        button.className = "btn-status btn-notread";
        button.textContent = "NOT READ!";
        book.isRead = false;
    }else {
        button.className = "btn-status btn-read";
        button.textContent = "READ!";
        book.isRead = true;
    }
}

function deleteBook (book){
    container.removeChild(document.getElementById(book.title));
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
    let exists = false;
    myLibrary.forEach(book=>{
        if (book.title === title){
            alert("THAT BOOK ALREADY EXISTS");
            exists = true;
        }
    })
    if (exists == false){
    let newbook = new Book(title, author, pages, isRead);
    myLibrary.push(newbook);
    displayBook(newbook);
    }
}
