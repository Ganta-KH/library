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
        read: "Read",
    },
    {
        title: "naruto shippuden",
        author: "boruto",
        pages: 250,
        read: "Not read",
    },
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function showBooks(myLibrary) {
    const books = document.querySelector(".books");

    function readbook(read) {
        if (read === 'Read') return '</p><button class="read">' + read + '</button>'
        return '</p><button class="read not-read">' + read + "</button>";
    }

    for (let book of myLibrary) {
        books.innerHTML +=
            '<div class="book"><p>' +
            book.title +
            "</p><p>" +
            book.author +
            "</p><p>" +
            book.pages +
            readbook(book.read) +
            "<button class='remove'>Remove</button></div>";
    }
}

function removeBooks() {
    const books = document.querySelectorAll(".book");
    books.forEach((book) => {
        book.remove();
    });
}

function checkTitle(title) {
    for (let book of myLibrary) {
        if (title === book.title) return true;
    }
    return false;
}

function addBookToLibrary() {
    submit.addEventListener("click", (e) => {
        e.preventDefault();

        const title = document.querySelector("#title").value;

        if (checkTitle(title)) {
            alert('The title "' + title + '" already exist.');
            return;
        }

        const author = document.querySelector("#author").value;
        const pages = document.querySelector("#pages").value;
        const read = document.querySelector("#read:checked");

        const book = new Book(
            title,
            author,
            pages,
            read !== null ? "Read" : "Not read"
        );
        myLibrary.push(book);

        form.style.cssText = "display: none;";

        removeBooks();
        showBooks(myLibrary);
    });
}

Book.prototype.changeRead = function () {
    const btnRead = document.querySelector(".read");
    btnRead.addEventListener("click", () => {
        btnRead.classList.toggle("not-read");
    });
};

addBookToLibrary();

const btnRead = document.querySelectorAll(".read");
btnRead.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn.parentNode.childNodes);
        btnRead.classList.toggle("not-read");
        btnRead.textContent =
            btnRead.textContent === "Read" ? "Not read" : "Read";
    });
});
