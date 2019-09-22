class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
}

class UI {
    addBookToList(book) {
        let row = `<tr><td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.ISBN}</td>
        <td><a href="#" class="delete">X</a></td></tr>`
        $("#book-list").append(row)
    }

    showAlert(str, className) {
        $(`<div class='alert ${className}'>${str}</div>`).insertBefore("#book-form");
        setTimeout(() => {
            $(".alert").remove();
        }, 1000);
    }

    deleteBook(book) {
        $(book).closest("tr").remove()
    }

    clearBook() {
        $("#title").val("")
        $("#author").val("")
        $("#isbn").val("")
    }
}

$("#book-form").on("submit", e => {
    e.preventDefault();
    let title = $("#title").val(),
        author = $("#author").val(),
        ISBN = $("#isbn").val();
    const ui = new UI();
    if (title === "" || author === "" || ISBN == "") {
        ui.showAlert("Please fill in information", "error");
    } else {
        const book = new Book(title, author, ISBN);
        ui.addBookToList(book);
        ui.showAlert("Book added", "success");
        ui.clearBook(book);
    }
});

$("#book-list").on("click", e => {
    e.preventDefault();
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert("Book deleted", "success");
});