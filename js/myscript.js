fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("c'è un errore");
    }
  })
  .then((books) => {
    const arrayBooks = books.map((book) => {
      return { title: book.title, price: book.price, img: book.img };
    });
    console.log(arrayBooks);

    arrayBooks.forEach((book, index) => {
      const grid = document.getElementById("books-grid");
      const card = document.createElement("div");
      card.classList.add("col-12", "col-sm-6", "col-md-3", "mt-3");
      grid.appendChild(card);
      card.innerHTML = `
      <div class="card h-100 text-bg-dark">
      <img src="${book.img}" class="card-img-top" alt="copertina libro" height="50%">
      <div class="card-body d-flex flex-column justify-content-between">
      <h6 class="card-title">${book.title}</h6>
      <p class="card-text">${book.price}</p>
      <div class="d-flex justify-content-center ">
      <button type="button" id="delete-button${index}" class="btn btn-danger me-1 bi bi-trash3-fill"></button>
      <button type="button" id="delete-button${index}" class="btn btn-info ms-1 bi bi-cart"></button>
      </div>
      </div>
      </div>
      `;
      const deletButton = document.getElementById(`delete-button${index}`);
      deletButton.addEventListener("click", () => {
        grid.removeChild(card);
      });
    });
  })
  .catch((error) => {
    console.log("errore durante la richiesta", error);
  });
