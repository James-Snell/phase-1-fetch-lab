function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
 return fetch("https://anapioficeandfire.com/api/books") //fetches data from url
  
  .then((resp) => resp.json()) //converts data to json
  .then((json) => renderBooks(json)) //function called with data and uses loop for each object entry 
}
  

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
