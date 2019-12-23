import React from 'react';
import FoodItem from './FoodItem';

const FoodList = ({recipes}) => {
    const renderedList=recipes.map(recipe=>{
        return (
            <FoodItem recipe={recipe}/>
        )
    })
    return(
        <div className='row'>
            {renderedList}
            
        </div>
    )
}

export default FoodList;