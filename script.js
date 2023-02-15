const showForm = document.querySelector(".show");
const form = document.querySelector(".new");
const formCard = document.querySelector("form");
const submit = document.querySelector("#submit");

showForm.addEventListener("click", () => {
    form.style.cssText = "display: flex;";
});

form.addEventListener("click", () => {
    form.style.cssText = "display: none;";
});

formCard.addEventListener("click", (e) => {
    e.stopPropagation();
});

let myLibrary = [
    {
        title: "One Piece",
        author: "Oda",
        pages: 250,
        read: true,
    },
    {
        title: "naruto shippuden",
        author: "boruto",
        pages: 250,
        read: false,
    },
];

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function showBooks(myLibrary) {
    const books = document.querySelector(".books");
    for (let book of myLibrary) {
        books.innerHTML +=
            '<div class="book"><p>' +
            book.title +
            "</p><p>" +
            book.author +
            "</p><p>" +
            book.pages +
            "</p><p>" +
            book.read +
            "</p></div>";
    }
}

function addBookToLibrary() {
    submit.addEventListener("click", (e) => {
        const title = document.querySelector("#title").value;
        const author = document.querySelector("#author").value;
        const pages = document.querySelector("#pages").value;
        const read = document.querySelector("#pages").value;

        const book = new Book(title, author, pages, read ? "Read" : "Not read");
        
        myLibrary.push(book);
        e.preventDefault();
        form.style.cssText = "display: none;";
        showBooks(myLibrary);
    });
}

addBookToLibrary();

