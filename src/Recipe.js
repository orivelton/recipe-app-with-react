import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
  return(
    <>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={image} alt={title} />
      <ol>
        {ingredients.map(ingredients => <li>{ingredients.text}</li>)}
      </ol>
    </>
  );
}

export default Recipe;
