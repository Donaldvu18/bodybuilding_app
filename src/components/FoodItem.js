import React from 'react';
import './FoodItem.css';

const FoodItem = ({recipe}) => {

    return(
        (<div className='col-4 text-center fooditem mb-2'><p className='foodlabel'>{recipe.title}</p>
            <img className='img-fluid' src={`https://spoonacular.com/recipeImages/${recipe.id}-480x360.jpg`}/>
            </div>)
    )
}

export default FoodItem;