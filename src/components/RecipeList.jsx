import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeList = ({ recipeList }) => {
    return (
        <>
            {recipeList.map((recipe, index) => (
                <div key={index} className='mt-3'>
                    <RecipeCard
                        name={recipe.name}
                        description={recipe.description}
                    />
                </div>
                
            ))}
        </>
    )
}

export default RecipeList