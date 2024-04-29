import React from 'react';
import styles from './styles/RecipeList.module.css';

export default function RecipeList({ recipes }) {
  return (
    <ul className={styles.recipeList}>
      {recipes.map((recipe, index) => (
        <li key={index} className={styles.recipeItem}>
          <h2>{recipe.name}</h2>
          <p>{recipe.cuisine} | Time: {recipe.time} mins</p>
          {recipe.imageFilename ? (
            <img src={`/images/${recipe.imageFilename}`} alt={recipe.name} />
          ) : (
            <img src="/images/greeksw.jpg" alt="No image available" /> // Placeholder
          )}
          <p>{recipe.instructions}</p>
        </li>
      ))}
    </ul>
  );
}
