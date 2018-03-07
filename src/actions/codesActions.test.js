import expect from 'expect';
import * as codesActions from './codesActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Codes actions', () => {

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async actions', (done) => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('should clean LOAD_CODES_SUCCESS when loading codes', done => {
    const expectedActions = [
      {
        type: types.LOAD_CODES_SUCCESS,
        body: {
          codes: [
            { 
              id: '01', value: '01', name: 'ANIMALS; LIVE',
              headings: []
            },
          ]
        }
      }
    ];
    const store = mockStore({codes: []}, expectedActions);

    store.dispatch(codesActions.loadCodes()).then(()=> {
      const actions = store.getActions();
      expect(actions[1].type).toEqual(types.LOAD_CODES_SUCCESS);
      done();
    });

  });
});
});