import { useSearchParams } from "react-router";
import { Title } from "~/components/Title";

export default function RecipeDetails() {

    const apiString = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
    const [params] = useSearchParams();
    const id = params.get('id');
    

    return (
        <main>
            <Title>
                Recipe: recipe name
            </Title>
        </main>
    )
}