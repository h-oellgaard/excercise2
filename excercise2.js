
// Omskriv til en ES6 class:


function getBookTitle(book) {
  return book.title;
}

function getBookAuthor(book) {
  return book.author;
}

function getBookPublicationYear(book) {
  return book.publicationYear;
}

function setBookRating(book, rating) {
  book.rating = rating;
  return book;
}

const myBook = {
  title: "1984",
  author: "George Orwell",
  publicationYear: 1949
};

console.log(getBookTitle(myBook));  // 1984
console.log(getBookAuthor(myBook));  // George Orwell
console.log(getBookPublicationYear(myBook));  // 1949

setBookRating(myBook, 5);
console.log(myBook.rating);  // 5