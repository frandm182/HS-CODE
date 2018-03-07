import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const codes = [
  { id: '01', value: '01', name: 'ANIMALS; LIVE',
    headings: [
       { id: '01', value: '01', name: 'Horses, asses, mules and hinnies; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Horses; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Horses; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Asses; live' },
          { id: '90', value: '90', name: 'Mules and hinnies; live' }         
        ]
      },
       { id: '02', value: '02', name: 'Bovine animals; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Cattle; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Cattle; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '32', value: '32', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '45', value: '45', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '90', value: '90', name: 'Bovine animals; live, other than cattle and buffalo' }         
        ]
      },
      { id: '03', value: '03', name: 'Swine; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Cattle; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Cattle; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '32', value: '32', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '42', value: '42', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '45', value: '45', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '90', value: '90', name: 'Bovine animals; live, other than cattle and buffalo' }         
        ]
      },
      { id: '04', value: '04', name: 'Sheep and goats; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Cattle; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Cattle; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '32', value: '32', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '42', value: '42', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '45', value: '45', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '90', value: '90', name: 'Bovine animals; live, other than cattle and buffalo' }         
        ]
      }
    ]
  },
  { id: '02', value: '02', name: 'MEAT AND EDIBLE MEAT OFFAL',
    headings: [
       { id: '01', value: '01', name: 'Horses, asses, mules and hinnies; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Horses; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Horses; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Asses; live' },
          { id: '90', value: '90', name: 'Mules and hinnies; live' }         
        ]
      },
       { id: '02', value: '02', name: 'Bovine animals; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Cattle; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Cattle; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '32', value: '32', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '45', value: '45', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '90', value: '90', name: 'Bovine animals; live, other than cattle and buffalo' }         
        ]
      },
      { id: '03', value: '03', name: 'Swine; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Cattle; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Cattle; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '32', value: '32', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '42', value: '42', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '45', value: '45', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '90', value: '90', name: 'Bovine animals; live, other than cattle and buffalo' }         
        ]
      },
      { id: '04', value: '04', name: 'Sheep and goats; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Cattle; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Cattle; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '32', value: '32', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '42', value: '42', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '45', value: '45', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '90', value: '90', name: 'Bovine animals; live, other than cattle and buffalo' }         
        ]
      }
    ]
  },
  { id: '03', value: '03', name: 'FISH AND CRUSTACEANS, MOLLUSCS AND OTHER',
    headings: [
       { id: '01', value: '01', name: 'Horses, asses, mules and hinnies; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Horses; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Horses; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Asses; live' },
          { id: '90', value: '90', name: 'Mules and hinnies; live' }         
        ]
      },
       { id: '02', value: '02', name: 'Bovine animals; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Cattle; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Cattle; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '32', value: '32', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '45', value: '45', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '90', value: '90', name: 'Bovine animals; live, other than cattle and buffalo' }         
        ]
      },
      { id: '03', value: '03', name: 'Swine; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Cattle; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Cattle; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '32', value: '32', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '42', value: '42', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '45', value: '45', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '90', value: '90', name: 'Bovine animals; live, other than cattle and buffalo' }         
        ]
      },
      { id: '04', value: '04', name: 'Sheep and goats; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Cattle; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Cattle; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '32', value: '32', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '42', value: '42', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '45', value: '45', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '90', value: '90', name: 'Bovine animals; live, other than cattle and buffalo' }         
        ]
      }
    ]
  },
  { id: '04', value: '04', name: 'DAIRY PRODUCE; BIRDS EGGS; NATURAL HONEY',
    headings: [
       { id: '01', value: '01', name: 'Horses, asses, mules and hinnies; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Horses; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Horses; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Asses; live' },
          { id: '90', value: '90', name: 'Mules and hinnies; live' }         
        ]
      },
       { id: '02', value: '02', name: 'Bovine animals; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Cattle; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Cattle; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '32', value: '32', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '45', value: '45', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '90', value: '90', name: 'Bovine animals; live, other than cattle and buffalo' }         
        ]
      },
      { id: '03', value: '03', name: 'Swine; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Cattle; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Cattle; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '32', value: '32', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '42', value: '42', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '45', value: '45', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '90', value: '90', name: 'Bovine animals; live, other than cattle and buffalo' }         
        ]
      },
      { id: '04', value: '04', name: 'Sheep and goats; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Cattle; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Cattle; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '32', value: '32', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '42', value: '42', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '45', value: '45', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '90', value: '90', name: 'Bovine animals; live, other than cattle and buffalo' }         
        ]
      }
    ]
  },
  { id: '05', value: '05', name: 'ANIMAL ORIGINATED PRODUCTS; NOT ELSEWHERE',
    headings: [
       { id: '01', value: '01', name: 'Horses, asses, mules and hinnies; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Horses; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Horses; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Asses; live' },
          { id: '90', value: '90', name: 'Mules and hinnies; live' }         
        ]
      },
       { id: '02', value: '02', name: 'Bovine animals; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Cattle; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Cattle; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '32', value: '32', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '45', value: '45', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '90', value: '90', name: 'Bovine animals; live, other than cattle and buffalo' }         
        ]
      },
      { id: '03', value: '03', name: 'Swine; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Cattle; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Cattle; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '32', value: '32', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '42', value: '42', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '45', value: '45', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '90', value: '90', name: 'Bovine animals; live, other than cattle and buffalo' }         
        ]
      },
      { id: '04', value: '04', name: 'Sheep and goats; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Cattle; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Cattle; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '32', value: '32', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '42', value: '42', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '45', value: '45', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '90', value: '90', name: 'Bovine animals; live, other than cattle and buffalo' }         
        ]
      }
    ]
  },
  { id: '06', value: '06', name: 'TREES AND OTHER PLANTS',
    headings: [
       { id: '01', value: '01', name: 'Horses, asses, mules and hinnies; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Horses; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Horses; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Asses; live' },
          { id: '90', value: '90', name: 'Mules and hinnies; live' }         
        ]
      },
       { id: '02', value: '02', name: 'Bovine animals; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Cattle; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Cattle; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '32', value: '32', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '45', value: '45', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '90', value: '90', name: 'Bovine animals; live, other than cattle and buffalo' }         
        ]
      },
      { id: '03', value: '03', name: 'Swine; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Cattle; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Cattle; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '32', value: '32', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '42', value: '42', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '45', value: '45', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '90', value: '90', name: 'Bovine animals; live, other than cattle and buffalo' }         
        ]
      },
      { id: '04', value: '04', name: 'Sheep and goats; live', 
       subheadings: [
          { id: '21', value: '21', name: 'Cattle; live, pure-bred breeding animals' },
          { id: '29', value: '29', name: 'Cattle; live, other than pure-bred breeding animals' },
          { id: '30', value: '30', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '32', value: '32', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '42', value: '42', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '45', value: '45', name: 'Buffalo; live, pure-bred breeding animals' },
          { id: '90', value: '90', name: 'Bovine animals; live, other than cattle and buffalo' }         
        ]
      }
    ]
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
