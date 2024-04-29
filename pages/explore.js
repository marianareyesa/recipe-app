import React, { useEffect, useState } from 'react';
import { getRecipes } from '../recipeService';
import RecipeList from '../components/RecipeList';



export default function Explore() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipes();
        setRecipes(data);
        setFilteredRecipes(data); // Initially, all recipes are shown
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    // Filter recipes whenever the selectedCuisine changes
    if (selectedCuisine) {
      const filtered = recipes.filter(recipe => recipe.cuisine === selectedCuisine);
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes(recipes);
    }
  }, [selectedCuisine, recipes]);

  const handleCuisineChange = (cuisine) => {
    setSelectedCuisine(cuisine);
  };

  return (
    <div className="explore-page">
      <main>
        <h1>Recipe List</h1>
        <RecipeList recipes={filteredRecipes} />
      </main>
    </div>
  );
}
