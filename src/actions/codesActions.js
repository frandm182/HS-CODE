import * as types from './actionTypes';
import codesApi from '../api/mockCodesApi';

export const loadCodesSuccess = codes => (
  { type: types.LOAD_CODES_SUCCESS, codes }
);

export const loadCodes = () => (dispatch) =>
  codesApi.getAllCodes()
  .then(codes => {
    dispatch(loadCodesSuccess(codes));
  })
  .catch(error => {
    throw(error);
  });
