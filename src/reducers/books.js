import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE,
  SET_BOOKMARK_REQUEST,
  REMOVE_BOOKMARK_REQUEST
} from '../actions/books'

const initialState = {
  books: [],
  bookmarkedBooks: [],
  isFetched: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_REQUEST:
      return {
        ...state,
        isFetched: false,
        error: false
      };

    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        isFetched: true,
        error: false
      };

    case GET_BOOKS_FAILURE:
      return {
        ...state,
        error: true
      }

    case SET_BOOKMARK_REQUEST:
      const book = state.books.find(book => book.id === action.payload);
      return {
        ...state,
        bookmarkedBooks: [...state.bookmarkedBooks, book]
      }

    case REMOVE_BOOKMARK_REQUEST:
      const books = state.bookmarkedBooks.filter(book => book.id !== action.payload);
      return {
        ...state,
        bookmarkedBooks: books
      }

    default:
      return state
  }
}

export const booksSelector = (state) => state.booksReducer.books;
export const bookmarkedBooksSelector = (state) => state.booksReducer.bookmarkedBooks;
export const isFetchedSelector = (state) => state.booksReducer.isFetched;
export const errorSelector = (state) => state.booksReducer.error;