import { useState } from 'react';
import './App.css'
import EditModal from './components/EditModal'
import RecipeCard from './components/RecipeCard'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [recipe, setRecipe] = useState({
    name: '',
    description: ''
  });

  return (
    <>
      <RecipeCard setShowModal={setShowModal} recipe={recipe}/>
      {showModal && <EditModal setShowModal={setShowModal} setRecipe={setRecipe}/>}
      
      
    </>
  )
}

export default App
