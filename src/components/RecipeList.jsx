import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeList = ({ recipeList, setShowModal, setModalType, setIndex }) => {
    return (
        <>
            {recipeList.map((recipe, index) => (
                <div key={index} className='mt-3'>
                    <RecipeCard
                        index={index}
                        name={recipe.name}
                        description={recipe.description}
                        setShowModal={setShowModal}
                        setModalType={setModalType}
                        setIndex={setIndex}
                    />
                </div>
                
            ))}
        </>
    )
}

export default RecipeList