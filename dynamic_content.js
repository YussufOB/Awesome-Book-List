// // Dynamic Html display for add books
// import library from "./modules/library.js";

// const booksList = document.getElementById('Listing');
// const DisplayBook = (book) => {
//   // Listing All Books
//   const bookDiv = document.createElement('div');
//   bookDiv.classList.add('book');

//   const removeButton = document.createElement('button');
//   removeButton.classList.add('remove');
//   removeButton.textContent = 'Remove Book';

//   bookDiv.innerHTML = `
//   <div class="BooksStore">
//     <h2 class="BooksTitle">"${book.title}"</h2>
//     <p class="BooksAuthor">By ${book.author}</p>
//   </div>
//   `;
//   bookDiv.appendChild(removeButton);

//   if (library.books.length === 0) {
//     booksList.innerHTML = '';
//   }

//   booksList.appendChild(bookDiv);

//   removeButton.addEventListener('click', () => {
//     library.removeBook(book);
//     bookDiv.remove();

//     if (library.books.length === 0) {
//       booksList.innerHTML = `
//         <p class="empty-library">No Books Available in the Store.</p>
//       `;
//     }
//   });
// };

// // Display All Books on Page load
// // /f (library.books.length === 0) {
// // / booksList.innerHTML = `
// // /         <p class="empty-library">No Books Available in the Store.</p>
// // /       `;
// // / else {
// // / library.books.forEach(book => {
// // /   DisplayBook(book);
// // / });
// // /

// export { DisplayBook, booksList };