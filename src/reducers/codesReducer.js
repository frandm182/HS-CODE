import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  const {codes, code, update, tabIndex} = action;
  switch(action.type) {
    case types.LOAD_CODES_SUCCESS:
      return { ...state, codes } ;
    case types.TOGGLE_MODAL:
      return {...state, modal: !state.modal}
    case types.LOAD_CODE:
      return {...state, modal: !state.modal, editCode: code}
    case types.ADD_CODE:
      return {...state, tabIndex, editCode: { ...state.editCode, ...update }}
    case types.SAVE_CODE:
      return {...state, code, editCode: null, modal: !state.modal }

    default:
      return state;
  }
};
