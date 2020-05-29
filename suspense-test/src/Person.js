import React, {useState, useEffect}from 'react';
import {fetchPerson} from './FetchPersonApi';
import './style.css';

export function Person() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
   fetchPerson().then(r => {
    setProfile(r)
   }, e => {
    setError(e);
   });
  },[]);

  return (
    <div>
      {error && (<div>{JSON.stringify(error, null , 2)}</div>)}
      {profile ? (<div className="md:flex bg-gray-100 shadow-md rounded-lg md:w-1/2 p-6 mt-4 mx-auto">
       <img alt="avatar" className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src={profile.picture.medium}/>
       <div className="text-center md:text-left">
         <div className="text-lg text-gray-600">
          {`${profile.name.first} ${profile.name.last}`}
         </div>
         <div className="text-blue-500">
          {profile.location.city}
         </div>
         <div className="text-gray-600">
          {profile.email}
         </div>
         <div className="text-gray-600">
          {profile.phone}
         </div>
         <div className="mt-4">
          <button className="bg-indigo-500 focus:outline-none focus:shadow-outline hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded shadow-lg">
            Connect
          </button>
         </div>
       </div>
      </div>) : (<div>Loading...</div>)}
    </div>
  )
}
