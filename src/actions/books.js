import config from '../config';
import { RSAA } from 'redux-api-middleware';

export const GET_BOOKS_REQUEST = 'GET_BOOKS_REQUEST';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE';

export const getBooks = () => dispatch => {
  return dispatch({
    [RSAA]: {
      endpoint: `${config.api}/books`,
      method: 'GET',
      types: [
        GET_BOOKS_REQUEST,
        GET_BOOKS_SUCCESS,
        GET_BOOKS_FAILURE
      ]
    }
  })
}