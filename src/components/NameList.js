import React from 'react';

function NameList() {
  const persons = [
    { name: 'Bruce', age: 30, skill: 'React' },
    { name: 'Clark', age: 25, skill: 'Angular' },
    { name: 'Diana', age: 28, skill: 'Vue' }
  ];

  const personList = persons.map(person => (
    <h2>
      I am {person.name}. I am {person.age} years old. I know {person.skill}.
    </h2>
  ));

  return <div>{personList}</div>;
}

export default NameList;
