import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Title } from "~/components/Title";

type Recipe = {
    idMeal: string;
    strArea: string;
    strCountry: string;
    strMeal: string;
    strMealThumb: string;
}

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
        <main>
            <Title>
            Recipes
            </Title>
            {recipes.map((recipe, index) => (
                <p key={index}>{recipe.strMeal}</p>
            ))}
        </main>
        
    );
}