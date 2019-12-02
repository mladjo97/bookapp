import { combineReducers } from 'redux';

import books from './books';

const rootReducer = combineReducers({
    booksReducer: books 
});

export default rootReducer;