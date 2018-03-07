import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  const { codes, code, update, index, id, tabIndex, text } = action;
  switch(action.type) {
    case types.LOAD_CODES_SUCCESS:
      return { ...state, codes } ;
    case types.TOGGLE_MODAL:
      return {...state, modal: !state.modal}
    case types.LOAD_CODE:
      return {...state, modal: !state.modal, editCode: code}
    case types.ADD_CODE: {
      let { codes , heading, subheading } = state;

      if (index === 1) {
        heading = codes.filter(e=> e.id === id)[0].headings;
      }

      if (index === 2) {
        subheading = heading.filter(e=> e.id === id)[0].subheadings;
      }
      return {...state, heading, subheading,  editCode: { ...state.editCode, ...update, name: text }}
    }
      
    case types.SAVE_CODE:
      return {...state, code: { ...code,}, editCode: null, modal: !state.modal }
    case types.CLICK_TAB:
      return {...state, tabIndex }

    default:
      return state;
  }
};
