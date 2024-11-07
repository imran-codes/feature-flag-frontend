import React from "react";
import { Recipe } from "../types";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className={`recipe-card`}>
      <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" />
      <div className="recipe-text">
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
