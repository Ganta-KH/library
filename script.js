const showForm = document.querySelector(".show");
const form = document.querySelector(".new");
const formCard = document.querySelector("form");
const submit = document.querySelector("#submit");
let myLibrary = [];

showForm.addEventListener("click", () => {
    form.style.cssText = "display: flex;";
});

form.addEventListener("click", () => {
    form.style.cssText = "display: none;";
});

formCard.addEventListener("click", (e) => {
    e.stopPropagation();
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function changeRead() {
    const btnRead = document.querySelectorAll(".read");
    btnRead.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("not-read");
            btn.textContent = btn.textContent === "Read" ? "Not read" : "Read";
            changeReadInLibrary(btn.parentNode.childNodes[0].textContent);
        });
    });
}

function removeBook() {
    const btnRemove = document.querySelectorAll(".remove");
    btnRemove.forEach((btn) => {
        btn.addEventListener("click", () => {
            const bookTitle = btn.parentNode.childNodes[0].textContent;
            for (let i = 0; i < myLibrary.length; i++) {
                if (myLibrary[i].title === bookTitle) {
                    myLibrary.splice(i, 1);
                    removeBooks();
                    showBooks(myLibrary);
                    break;
                }
            }
        });
    });
}

function showBooks(myLibrary) {
    const books = document.querySelector(".books");

    function readbook(read) {
        if (read === "Read")
            return '</p><button class="read">' + read + "</button>";
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

    changeRead();
    removeBook();
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

function changeReadInLibrary(title) {
    for (let book of myLibrary) {
        if (book.title === title) {
            book.read = book.read === "Read" ? "Not read" : "Read";
        }
    }
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
            parseInt(pages),
            read !== null ? "Read" : "Not read"
        );
        myLibrary.push(book);

        form.style.cssText = "display: none;";

        removeBooks();
        showBooks(myLibrary);
    });
}

addBookToLibrary();
showBooks(myLibrary);
