import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Title } from "~/components/Title";
import RecipeDetails from "./recipeDetails";
import { DetailsCard } from "~/components/DetailsCard";

export default function Recipes() {

    const [params] = useSearchParams();
    const search = params.get('search');
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const apiString = "https://www.themealdb.com/api/json/v1/1/filter.php?i="

    async function handleSearch() {
        const response = await fetch(apiString + search);
        const data = await response.json();

        const firstFive = data.meals.slice(0,5);
        setRecipes(firstFive);
        console.log(firstFive);
    }

    useEffect(() => {
        handleSearch();
    }, []);

    return(
        <div>
            <Title>
            Recipes
            </Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recipes.map((recipe, index) => (
                <DetailsCard 
                id={recipe.idMeal}
                img={recipe.strMealThumb + "/medium"}
                name={recipe.strMeal}
                />
            ))}
            </div>
        </div>
        
    );
}