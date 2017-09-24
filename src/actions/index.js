export function selectBook(book) {
  //selectBook is an ActionCreator; it needs to retrn an action - anobject with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
