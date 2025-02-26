fetch('books.json')
    .then(response => response.json())
    .then(data => {
        displayBooks(data);
    })
    .catch(error => console.error('Error loading JSON file:', error));

function displayBooks(books) {
    const container = document.getElementById('book-container');

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const img = document.createElement('img');
        img.src = book.spine;
        img.alt = `${book.title} spine`;

        // const title = document.createElement('p');
        // title.classList.add('title');
        // title.textContent = book.title;

        // const author = document.createElement('p');
        // author.classList.add('author');
        // author.textContent = `Author: ${book.author}`;

        // const id = document.createElement('p');
        // id.classList.add('id');
        // id.textContent = `ID: ${book.id}`;

        // Append all elements to the book container
        bookDiv.appendChild(img);
        // bookDiv.appendChild(title);
        // bookDiv.appendChild(author);
        // bookDiv.appendChild(id);

        container.appendChild(bookDiv);
    })
}