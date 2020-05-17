import React from 'react';

export function Person({resource}) {
  const person = resource.person.read();
  return (
    <div>
     {person.name.first}
    </div>
  )
}
