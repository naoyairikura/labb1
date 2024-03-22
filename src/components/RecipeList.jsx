import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeList = ({ recipeList, setShowModal, setModalType, setIndex, deleteRecipe }) => {
    return (
        <>
            {recipeList.map((recipe, index) => (
                <div key={index} className='mt-3'>
                    <RecipeCard
                        index={index}
                        recipe={recipe}
                        setShowModal={setShowModal}
                        setModalType={setModalType}
                        setIndex={setIndex}
                        deleteRecipe={deleteRecipe}
                    />
                </div>
                
            ))}
        </>
    )
}

export default RecipeList