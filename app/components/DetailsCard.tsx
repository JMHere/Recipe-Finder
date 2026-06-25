import { useNavigate } from "react-router"
import { Button } from "./Button"

type CardProps = {
    id: string,
    img: string,
    name: string,
    details1?: string

}


export function DetailsCard({id, img, name, details1}: CardProps) {

    const navigate = useNavigate();

    function getRecipe() {
        navigate(`/recipeDetails?id=${id}`)
    }

    return (
        <div className="shadow-lg p-1 rounded-2xl ml-1">
            <div className="max-w-sm mx-auto">
                <img src={img} className="w-full rounded-2xl"/>
                <p className="text-2xl font-bold">{name}</p>
                <p>{details1}</p>
                <Button 
                label="View Full Recipe" 
                onClick={getRecipe}
                />
            </div>
        </div>
    )
}