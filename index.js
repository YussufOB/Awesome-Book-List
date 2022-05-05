// eslint-disable-next-line max-classes-per-file
import Book from './modules/book.js';
import { booksList, DisplayBook, library } from './modules/store.js';
import * as funcs from './modules/functions.js';
import { DateTime } from './modules/luxon.js';
// Initializing Store
// export const library = new Store();

// Load intial book stored
const StoredBooks = localStorage.getItem('books');
if (StoredBooks) {
  library.books = JSON.parse(StoredBooks);
}

// SPA Interface Controller
const showBooksList = () => {
  funcs.switchMode(funcs.elements.showListButton);
  funcs.elements.BooksListSection.style.display = 'flex';

  funcs.elements.ContactsSection.style.display = 'none';
  funcs.elements.FormSection.style.display = 'none';
};

funcs.elements.showListButton.addEventListener('click', (event) => {
  event.preventDefault();
  showBooksList();
});

funcs.elements.addNewButton.addEventListener('click', (event) => {
  event.preventDefault();
  funcs.switchMode(funcs.elements.addNewButton);
  funcs.elements.FormSection.style.display = 'flex';
  funcs.elements.BooksListSection.style.display = 'none';
  funcs.elements.ContactsSection.style.display = 'none';
});

funcs.elements.Contacts.addEventListener('click', (event) => {
  event.preventDefault();
  funcs.switchMode(funcs.elements.Contacts);
  funcs.elements.ContactsSection.style.display = 'flex';
  funcs.elements.BooksListSection.style.display = 'none';
  funcs.elements.FormSection.style.display = 'none';
});

// Add Books Event Listener
const AddBook = document.getElementById('AddBooks');
AddBook.addEventListener('submit', (event) => {
  event.preventDefault();
  library.AddBook(new Book(AddBook.elements.title.value, AddBook.elements.author.value));
  AddBook.elements.title.value = '';
  AddBook.elements.author.value = '';
  showBooksList();
});

// Dynamic Html display for add books
if (library.books.length === 0) {
  booksList.innerHTML = `
          <p class="empty-library">No Books Available in the Store.</p>
        `;
} else {
  library.books.forEach((book) => {
    DisplayBook(book);
  });
}

let output = document.getElementById('current-date');
let today = DateTime.local();
output.textContent = today.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);