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
export const addCode = (name,id, index) => {
  let update = {[name] : id};
  if (index === 2 || index === 1) {
    update.subheading = '00';
    if (index === 1)
      update.heading = '00';
  }
  const tabIndex = index < 3 ? index + 1 : index;
  return({ type: types.ADD_CODE, update, tabIndex });
};

export const saveCode = code =>
  ({ type: types.SAVE_CODE, code });



export const loadCodes = () => (dispatch) =>
  codesApi.getAllCodes()
  .then(codes => {
    dispatch(loadCodesSuccess(codes));
  })
  .catch(error => {
    throw(error);
  });


