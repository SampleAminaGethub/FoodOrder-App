import MealItem from "./meal-item"
import classes from "./meals-gride.module.css"
export default function MealsGride({Meals}){
    return(
        <ul className={ classes.meals}>
            {Meals.map((meal)=>(<li key={meal.id}>
                <MealItem {...meal}/>
            </li>))}
        </ul>
    )
}