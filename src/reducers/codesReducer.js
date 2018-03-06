import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.bd, action) => {
  const {codes} = action;
  switch(action.type) {
    case types.LOAD_CODES_SUCCESS:
      return { ...state, codes } ;
    default:
      return state;
  }
};
