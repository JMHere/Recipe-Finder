import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Title } from "~/components/Title";


export default function RecipeDetails() {

    const apiString = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
    const [params] = useSearchParams();
    const id = params.get('id');
    const [recipeDetails, setRecipeDetials] = useState<RecipeDetails>();

    async function getDetials() {
        const response = await fetch(apiString + id);
        const data = await response.json();

        setRecipeDetials(data.meals[0])
    }

    useEffect(() => {
        getDetials();
    }, []);
    
    return (
        <div className="grid grid-cols-2 mt-10 gap-4 m-4">
            <div className="flex flex-col justify-center">
                <p className="">{recipeDetails?.strCategory}</p>
                <p className="text-3xl font-bold">
                    {recipeDetails?.strMeal}
                </p>
            </div>
            <div>
                <img src={recipeDetails?.strMealThumb}/>
            </div>
            <div>
                <p>Ingredients</p>
            </div>
            <div>
                <p>Instructions</p>
            </div>
        </div>
    )
}