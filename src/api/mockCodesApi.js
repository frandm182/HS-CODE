import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const codes = [
  {
    id: '01',
    value: '01',
    name: 'Marediya',
    headings: [
       {
        id: '01',
        value: '01',
        name: 'Marediya',
        subheadings: [
          {
            id: '01',
            value: '01',
            name: 'Lane'
          }          
        ]
      }
    ]
  },
  {
    id: '02',
    value: '02',
    name: 'Marediya',
  },
  {
    id: '03',
    value: '03',
    name: 'Marediya',
  }
];



class CodesApi {
  static getAllCodes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], codes));
      }, delay);
    });
  }
}

export default CodesApi;
