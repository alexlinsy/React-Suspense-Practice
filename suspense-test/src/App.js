import React, {Suspense} from 'react';
import {createResource} from './fetchPersonApi';
import {Person} from './Person';

function App() {
  const resource = createResource();
  return (
    <div className="App">
     <Suspense fallback={<h1>Loading...</h1>}>
       <Person resource={resource} />
     </Suspense>
    </div>
  );
}

export default App;
