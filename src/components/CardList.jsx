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

import React, { useState } from 'react';

export const CardList = () => {
  const avengers = [
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
  ]
 
  return (
    avengers.map((avenger, id) => {
      <Card/>
    })
  )
}
export const Card = ({ id, character, name }) => {
  return (
    <div className="card" id={id}>
      <button className="Delete"></button>
      <h1>{character}</h1>
      <p>alias: {name}</p>
    </div>
  ) 
};

export default CardList;