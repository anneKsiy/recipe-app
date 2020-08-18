import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients, servings, url }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>
        <strong>Calories: </strong>
        {Math.floor(calories)} <br />
        <strong>No. of Servings: </strong>
        {servings}
      </p>
      <a href={url} target="_blank">
        <img className={style.image} src={image} alt="recipe" />
      </a>
    </div>
  );
};

export default Recipe;
