function findAuthorById(authors, id) {
  // YOUR SOLUTION HERE
  //failed response:  should return the account object when given a particular ID
  //go through and find the list of authors, then match the list of authors to a specific ID
  //will be similar to the accounts find solution 
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  // YOUR SOLUTION HERE
  //go through the list of books, sort the books by id and match them to a given id
  //change the method used to a for/in loop
  /* for (let i= 0; i < books.length; i++) {
  let book = books[i];
  if(book.id === id) {
  return book}
  } */
 // return books.find((book) => book.id === id);
 for (let book in books) {
  if (books[book].id === id) {
      return books[book];
    }
  }
}


// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
