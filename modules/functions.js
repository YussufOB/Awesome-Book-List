// import { Book } from './book.js';
// eslint-disable-next-line max-classes-per-file
// import { Store } from './store.js';

// Defining Elements
const elements = {
  FormSection: document.getElementById('AddBookForm'),
  BooksListSection: document.getElementById('AwesomeBooks'),
  showListButton: document.getElementById('ListBookButton'),
  addNewButton: document.getElementById('AddNewBookBtn'),
  ContactsSection: document.getElementById('contact-info'),
  Contacts: document.getElementById('ContactsButton'),
};

const { showListButton, addNewButton, Contacts } = elements;

// Node Switch
const switchMode = (node) => {
  if (showListButton !== node && showListButton.classList.contains('active')) {
    showListButton.classList.remove('active');
  } else if (addNewButton !== node && addNewButton.classList.contains('active')) {
    addNewButton.classList.remove('active');
  } else if (Contacts !== node && Contacts.classList.contains('active')) {
    Contacts.classList.remove('active');
  }
  node.classList.add('active');
};

export { elements, switchMode };