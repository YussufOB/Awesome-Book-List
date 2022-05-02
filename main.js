// // Checking if storge is availiable
// // eslint-disable-next-line max-classes-per-file
// const IsStorageFree = (type) => {
//   let storage;
//   try {
//     storage = window[type];
//     const x = '__storage_test__';
//     storage.setItem(x, x);
//     storage.removeItem(x);
//     return true;
//   } catch (e) {
//     return e instanceof DOMException && (
//       e.code === 22
//       || e.code === 1014
//       || e.name === 'QuotaExceededError'
//       || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
//       && (storage && storage.length !== 0);
//   }
// };

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }
// }

// // consist list of books
// class Store {
//   constructor(books) {
//     this.books = [];
//   }

//   // check if a book exists
//   Available = (book) => {
//     for (let x = 0; x < this.books.length; x += 1) {
//       if (this.books[x].title === book.title && this.books[x].author === book.author) {
//         return true;
//       }
//     }
//     return false;
//   }

//   // add a new book
//   AddBook = (book) => {
//     if (!this.Available(book)) {
//       // eslint-disable-next-line no-use-before-define
//       DisplayBook(book);
//       this.books.push(book);
//       alert('Book added successfully');
//       this.ReloadLocalStorage();
//       return;
//     }
//     alert('Book and Author Already exist');
//   }

//   // Remove book from the list
//   removeBook = (book) => {
//     for (let x = 0; x < this.books.length; x += 1) {
//       if (this.books[x].title === book.title && this.books[x].author === book.author) {
//         this.books.splice(x, 1);
//         alert('Book remove successfully');
//         this.ReloadLocalStorage();
//         return;
//       }
//     }
//   }

//   // update locastorage
//   ReloadLocalStorage = () => {
//     if (IsStorageFree('localStorage')) {
//       localStorage.setItem('books', JSON.stringify(this.books));
//     }
//   }
// }

// // Initializing Store
// const library = new Store();

// // Load intial book stored
// const StoredBooks = localStorage.getItem('books');
// if (StoredBooks) {
//   library.books = JSON.parse(StoredBooks);
// }

// // Dynamic section Interface Display
// const elements = {
//   FormSection: document.getElementById('AddBookForm'),
//   BooksListSection: document.getElementById('AwesomeBooks'),
//   showListButton: document.getElementById('ListBookButton'),
//   addNewButton: document.getElementById('AddNewBookBtn'),
//   ContactsSection: document.getElementById('contact-info'),
//   Contacts: document.getElementById('ContactsButton'),
// };
// const {
//   FormSection, BooksListSection, showListButton, addNewButton, ContactsSection, Contacts,
// } = elements;

// const switchMode = (node) => {
//   if (showListButton !== node && showListButton.classList.contains('active')) {
//     showListButton.classList.remove('active');
//   } else if (addNewButton !== node && addNewButton.classList.contains('active')) {
//     addNewButton.classList.remove('active');
//   } else if (Contacts !== node && Contacts.classList.contains('active')) {
//     Contacts.classList.remove('active');
//   }
//   node.classList.add('active');
// };

// const showBooksList = () => {
//   switchMode(showListButton);
//   BooksListSection.style.display = 'flex';

//   ContactsSection.style.display = 'none';
//   FormSection.style.display = 'none';
// };

// showListButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   showBooksList();
// });

// addNewButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   switchMode(addNewButton);
//   FormSection.style.display = 'flex';
//   BooksListSection.style.display = 'none';
//   ContactsSection.style.display = 'none';
// });

// Contacts.addEventListener('click', (event) => {
//   event.preventDefault();
//   switchMode(Contacts);
//   ContactsSection.style.display = 'flex';
//   BooksListSection.style.display = 'none';
//   FormSection.style.display = 'none';
// });

// // Add Books Event Listener
// const AddBook = document.getElementById('AddBooks');
// AddBook.addEventListener('submit', (event) => {
//   event.preventDefault();
//   library.AddBook(new Book(AddBook.elements.title.value, AddBook.elements.author.value));
//   AddBook.elements.title.value = '';
//   AddBook.elements.author.value = '';
//   showBooksList();
// });

// document.getElementById('current-date').innerHTML = new Date().toLocaleString();
// document.getElementById('year').innerHTML = new Date().getFullYear();
