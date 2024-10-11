document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('book-list');
    const bookManagement = document.getElementById('book-management');
    const addBookForm = document.getElementById('add-book-form');

    // Sample books
    let books = [
        { title: 'Book 1', author: 'Author 1', isbn: '123456' },
        { title: 'Book 2', author: 'Author 2', isbn: '654321' },
        { title: 'Book 3', author: 'Author 3', isbn: '245781' },
        { title: 'Book 4', author: 'Author 4', isbn: '574321' }
    ];

    // Display books on homepage
    if (bookList) {
        displayBooks(bookList, books);
    }

    // Display books in manage books page
    if (bookManagement) {
        displayBooksForManagement(bookManagement, books);
    }

    // Handle add book form submission
    if (addBookForm) {
        addBookForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const isbn = document.getElementById('isbn').value;
            const newBook = { title, author, isbn };
            books.push(newBook);
            addBookForm.reset();
            alert('Book added successfully!');

            // Update the book list on the homepage
            if (bookList) {
                displayBooks(bookList, books);
            }

            // Update the book list on the manage books page
            if (bookManagement) {
                displayBooksForManagement(bookManagement, books);
            }
        });
    }

    // Function to display books on homepage
    function displayBooks(container, books) {
        container.innerHTML = '';
        books.forEach((book) => {
            const bookItem = document.createElement('div');
            bookItem.className = 'book-item';
            bookItem.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>ISBN: ${book.isbn}</p>
            `;
            container.appendChild(bookItem);
        });
    }

    // Function to display books on manage books page
    function displayBooksForManagement(container, books) {
        container.innerHTML = '';
        books.forEach((book, index) => {
            const bookManageItem = document.createElement('div');
            bookManageItem.className = 'book-manage-item';
            bookManageItem.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>ISBN: ${book.isbn}</p>
                <button onclick="removeBook(${index})">Remove</button>
            `;
            container.appendChild(bookManageItem);
        });
    }

    // Function to remove book
    window.removeBook = function(index) {
        books.splice(index, 1);
        if (bookManagement) {
            displayBooksForManagement(bookManagement, books);
        }
        if (bookList) {
            displayBooks(bookList, books);
        }
    };
});
