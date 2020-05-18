import React, {useState, useEffect}from 'react';
import {fetchPerson} from './FetchPersonApi';

export function Person() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
   fetchPerson().then(r => {
    setResult(r.name.first);
   }, e => {
    setError(e);
   });   
  },[]);

  return (
    <div>
     {error && (<div>{JSON.stringify(error, null , 2)}</div>)}
     <div>{result}</div>
    </div>
  )
}
