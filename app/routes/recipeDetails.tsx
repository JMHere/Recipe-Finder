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
        const ingredients = data.meals[0];
        const strIngredients = [];
        const strMeasurements = []
        for (let i = 1; i <= 20; i++) {
            const ing = ingredients[`strIngredient${i}`]
            const measure = ingredients[`strMeasure${i}`]
            strIngredients.push(ing)
            strMeasurements.push(measure)
        }
        setRecipeDetials({
            ...ingredients,
            strIngredients,
            strMeasurements
        })
        console.log(strIngredients)
        
    }

    useEffect(() => {
        getDetials();
    }, []);
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-4 m-4">
            <div className="flex flex-col justify-center">
                <p className="">{recipeDetails?.strCategory}</p>
                <p className="text-3xl font-bold">
                    {recipeDetails?.strMeal}
                </p>
            </div>
            <div>
                <img src={recipeDetails?.strMealThumb}
                    className="rounded-2xl w-full max-w-lg"
                />
            </div>
            <div>
                <p className="text-green-600 font-bold text-2xl">Ingredients</p>
                {recipeDetails?.strIngredients.map((ing, index) => (
                    <div key={index} className="flex gap-2">
                        <p className="font-bold">{recipeDetails?.strMeasurements[index]}</p>
                        <p>{ing}</p>
                    </div>
                ))}
            </div>
            <div>
                <p className="text-green-600 font-bold text-2xl">Instructions</p>
                <p>{recipeDetails?.strInstructions}</p>
            </div>
        </div>
    )
}