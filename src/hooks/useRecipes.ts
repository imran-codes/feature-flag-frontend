// A custom hook for fetching recipes

import axios from "axios";
import { useEffect, useState } from "react";
import { Recipe } from "../types";

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { data } = await axios.get("https://your-api.com/api/recipes");
        setRecipes(data);
      } catch (err) {
        console.error("Error fetching recipes:", err);
        setError("Failed to fetch recipes. Please try again later.");
      }
    };
    fetchRecipes();
  }, []);

  const featuredRecipes = recipes.filter((recipe) => recipe.isFeatured);
  const regularRecipes = recipes.filter((recipe) => !recipe.isFeatured);

  return { recipes, error, featuredRecipes, regularRecipes };
};

export default useRecipes;
