class Book {
    setInfo(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    showDetails() {
        console.log("Book Title:", this.title);
        console.log("Author:", this.author);
        console.log("Price:", this.price);
    }
}

let b1 = new Book();
b1.setInfo("JavaScript Basics", "Omkar", 299);

b1.showDetails();
