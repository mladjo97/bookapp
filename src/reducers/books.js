import mapper from '../utils/mapper';

import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE
} from '../actions/books'

const initialState = {
  books: [],
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
      const mappedBooks = mapper.mapBooks(action.payload);

      console.log('Mapped Books: ', mappedBooks);
      
      return {
        ...state,
        books: mappedBooks,
        isFetched: true,
        error: false
      };

    case GET_BOOKS_FAILURE:
      return {
        ...state,
        error: true
      }

    default:
      return state
  }
}

export const booksSelector = (state) => state.booksReducer.books;
export const isFetchedSelector = (state) => state.booksReducer.isFetched;
export const errorSelector = (state) => state.booksReducer.error;