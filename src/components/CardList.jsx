// Interview Prep Question:

// Render a card view of each of these characters. Each card should have a delete button. When you click delete that Avenger should be removed from the list

// Extra

// add an Alphabetize button that alphabetizes the list.

// const AVENGERS = [
//   {
//     id: "1",
//     name: "Tony Stark",
//     character: "Iron Man",
//   },
//   {
//     id: "2",
//     name: "Steve Rogers",
//     character: "Captain America",
//   },
//   {
//     id: "3",
//     name: "Natasha Romanoff",
//     character: "Black Widow",
//   },
//   {
//     id: "4",
//     name: "Bruce Banner",
//     character: "Hulk",
//   },
//   {
//     id: "5",
//     name: "Thor Odinson",
//     character: "Thor",
//   },
//   {
//     id: "6",
//     name: "Clint Barton",
//     character: "Hawkeye",
//   },
// ];

import { useState } from 'react';

export const CardList = () => {
  const [avengers, setAvengers] = useState([
    {
      id: "1",
      name: "Tony Stark",
      character: "Iron Man",
    },
    {
      id: "2",
      name: "Steve Rogers",
      character: "Captain America",
    },
    {
      id: "3",
      name: "Natasha Romanoff",
      character: "Black Widow",
    },
    {
      id: "4",
      name: "Bruce Banner",
      character: "Hulk",
    },
    {
      id: "5",
      name: "Thor Odinson",
      character: "Thor",
    },
    {
      id: "6",
      name: "Clint Barton",
      character: "Hawkeye",
    },
  ]);

  const DeleteCard = (id) => {
    setAvengers(avengers.filter(avenger => avenger.id !== id));
  }

  const AlphabetizeCard = () => {
    setAvengers([...avengers].sort((a, b) => a.character.localeCompare(b.character)));
  }

  
  return (
    <div>
      <h1>The Avengers</h1>
      <button onClick={AlphabetizeCard} className="Alphabetize">Alphabetize</button>
      <ul className='avenger-list'>
        {avengers.map((avenger) => (
          <Card key={avenger.id} id={avenger.id} name={avenger.name} character={avenger.character} deleteCard={DeleteCard}/>
        ))}
      </ul>
    </div>
  )
}
export const Card = ({ id, character, name, deleteCard }) => {
  return (
    <li className='list-item' id={id}>
      <div className="card">
        <button onClick={ () => deleteCard(id) } className="Delete">Delete</button>
        <h1>{character}</h1>
        <p>alias: {name}</p>
      </div>
    </li>
  ) 
};

export default Card;