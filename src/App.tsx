import "./App.css";
import RecipeCard from "./components/RecipeCard";
import useFeatureFlags from "./hooks/useFeatureFlag";
import useRecipes from "./hooks/useRecipes";

function App() {
  const { flags, error: flagsError } = useFeatureFlags();
  const { featuredRecipes, regularRecipes, error: recipeError } = useRecipes();

  const isDarkThemeEnabled = flags.darkTheme;
  const isFeaturedRecipeEnabled = flags.featuredRecipe;

  return (
    <div className={isDarkThemeEnabled ? "app dark-theme" : "app"}>
      <h1>Recipe Showcase</h1>
      {recipeError && <p>{recipeError}</p>}
      {flagsError && <p>{flagsError}</p>}

      {/* Feature Recipe */}
      {isFeaturedRecipeEnabled && featuredRecipes.length > 0 && (
        <section className="featured">
          <h2>Featured Recipe</h2>
          {featuredRecipes?.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </section>
      )}

      {/* Regular recipes */}
      <section className="recipes">
        <h2>All Recipes</h2>
        {regularRecipes?.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </div>
  );
}

export default App;
