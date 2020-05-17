function fetchPerson() {
  return fetch("https://randomuser.me/api").then(x=>x.json()).then(x=>x.results[0]);
};

function wrapePromise (promise) {
  let status = 'pending';
  let result = '';
  
  let suspender = promise.then(r => {
    status = 'Success';
    result = r;
  }, e => {
    status = 'Error';
    result = e;
  });

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if(status === 'error') {
        throw result;
      }

      return result;
    }
  }
}

export function createResource() {
  return {
    person: wrapePromise(fetchPerson())
  };
};