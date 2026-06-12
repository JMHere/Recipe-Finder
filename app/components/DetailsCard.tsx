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
        <div>
            <img src={img}/>
            <p>{name}</p>
            <p>{details1}</p>
            <Button 
            label="View Full Recipe" 
            onClick={getRecipe}
            />
        </div>
    )
}