// eslint-disable-next-line max-classes-per-file
// Checking Storage Availaibility
const IsStorageFree = (type) => {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      e.code === 22
      || e.code === 1014
      || e.name === 'QuotaExceededError'
      || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && (storage && storage.length !== 0);
  }
};

// Book Store
class Store {
  constructor() {
    this.books = [];
  }

  // check if a book exists
  Available = (book) => {
    for (let x = 0; x < this.books.length; x += 1) {
      if (this.books[x].title === book.title && this.books[x].author === book.author) {
        return true;
      }
    }
    return false;
  }

  // add a new book
  AddBook = (book) => {
    if (!this.Available(book)) {
      // eslint-disable-next-line no-use-before-define
      DisplayBook(book);
      this.books.push(book);
      alert('Book added successfully');
      this.ReloadLocalStorage();
      return;
    }
    alert('Book and Author Already exist');
  }

  // Remove book from the list
  removeBook = (book) => {
    for (let x = 0; x < this.books.length; x += 1) {
      if (this.books[x].title === book.title && this.books[x].author === book.author) {
        this.books.splice(x, 1);
        alert('Book remove successfully');
        this.ReloadLocalStorage();
        return;
      }
    }
  }

  // update locastorage
  ReloadLocalStorage = () => {
    if (IsStorageFree('localStorage')) {
      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }
}

const library = new Store();

// export default library;

const booksList = document.getElementById('Listing');
const DisplayBook = (book) => {
  // Listing All Books
  const bookDiv = document.createElement('div');
  bookDiv.classList.add('book');

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove');
  removeButton.textContent = 'Remove Book';

  bookDiv.innerHTML = `
  <div class="BooksStore">
    <h2 class="BooksTitle">"${book.title}"</h2>
    <p class="BooksAuthor">By ${book.author}</p>
  </div>
  `;
  bookDiv.appendChild(removeButton);

  if (library.books.length === 0) {
    booksList.innerHTML = '';
  }

  booksList.appendChild(bookDiv);

  removeButton.addEventListener('click', () => {
    library.removeBook(book);
    bookDiv.remove();

    if (library.books.length === 0) {
      booksList.innerHTML = `
        <p class="empty-library">No Books Available in the Store.</p>
      `;
    }
  });
};

export {
  DisplayBook, Store, booksList, library,
};