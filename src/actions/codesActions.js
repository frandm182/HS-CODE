import * as types from './actionTypes';
import codesApi from '../api/mockCodesApi';

export const loadCodesSuccess = codes => (
  { type: types.LOAD_CODES_SUCCESS, codes }
);

export const toggleModal = () => (
  { type: types.TOGGLE_MODAL }
);
export const loadCode = code => (
  { type: types.LOAD_CODE, code }
);
export const addCode = (name, id,text, index) => {
  let update = {[name] : id};
  if (index === 2) {
    update.subheading = '00';
  }
  if (index === 1) {
    update.heading = '00';
    update.subheading = '00';
  }
      
  
  
  return({ type: types.ADD_CODE, update, index, id, text });
};

export const saveCode = code =>
  ({ type: types.SAVE_CODE, code });

export const clickTab = tabIndex =>
  ({ type: types.CLICK_TAB, tabIndex });

export const loadCodes = () => (dispatch) =>
  codesApi.getAllCodes()
  .then(codes => {
    return dispatch(loadCodesSuccess(codes));
  })
  .catch(error => {
    throw(error);
  });


