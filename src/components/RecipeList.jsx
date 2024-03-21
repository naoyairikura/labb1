import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeList = ({ recipeList }) => {
    return (
        <div className='card-list'>
            {recipeList.map((recipe, index) => (
                <div key={index} className='mt-3'>
                    <RecipeCard
                        name={recipe.name}
                        description={recipe.description}
                    />
                </div>
                
            ))}
        </div>
    )
}

export default RecipeList