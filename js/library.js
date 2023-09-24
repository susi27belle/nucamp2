class Book {
    constructor(title, author, available = true) {
      this.title = title;
      this.author = author;
      this.available = available;
    }
  }
  
  module.exports = Book; // Export the Book class for later use
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(title, author) {
      const newBook = new Book(title, author);
      this.books.push(newBook);
    }
    checkOutBook(title) {
        const book = this.books.find((book) => book.title === title);
    
        if (book) {
          if (book.available) {
            book.available = false;
            console.log(`Checked out: ${book.title} by ${book.author}`);
          } else {
            console.log(`${book.title} is already checked out.`);
          }
        } else {
          console.log(`Book not found: ${title}`);
        }
      }

      getAvailableBooks() {
        const availableBooks = this.books.filter((book) => book.available);
        console.log('Available Books:');
        availableBooks.forEach((book) => {
          console.log(`${book.title} by ${book.author}`);
        });
      }
    }
    
    module.exports = Library; // Export the Library class for later use

    const Book = require('./Book'); // Import the Book class

const newBooks = `[{"title": "Book1", "author": "Author1"},
                   {"title": "Book2", "author": "Author2"}]`;

function receiveBooks(jsonData) {
  const books = JSON.parse(jsonData);

  books.forEach((book) => {
    library.addBook(book.title, book.author);
  });
}

module.exports = receiveBooks;

function checkOutBook(title) {
    try {
      const book = this.books.find((book) => book.title === title);
  
      if (!book) {
        throw new Error(`Book not found: ${title}`);
      }
  
      if (book.available) {
        book.available = false;
        console.log(`Checked out: ${book.title} by ${book.author}`);
      } else {
        console.log(`${book.title} is already checked out.`);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  