const showForm = document.querySelector(".show");
const form = document.querySelector(".new");
const formCard = document.querySelector("form");

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
        title: "naruto shippuden",
        author: "boruto",
        pages: 250,
        read: "not read yet",
    },
    {
        title: "naruto shippuden",
        author: "boruto",
        pages: 250,
        read: "not read yet",
    },
    {
        title: "naruto shippuden",
        author: "boruto",
        pages: 250,
        read: "not read yet",
    },
    {
        title: "naruto shippuden",
        author: "boruto",
        pages: 250,
        read: "not read yet",
    },
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}