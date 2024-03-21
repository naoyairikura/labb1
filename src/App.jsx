import { useState } from 'react';
import './App.css'
import Modal from './components/Modal'
import RecipeCard from './components/RecipeCard'
import NavBar from './components/NavBar';
import RecipeList from './components/RecipeList';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [recipe, setRecipe] = useState({
    name: '',
    description: ''
  });
  const [modalType, setModalType] = useState('');
  const [recipeList, setRecipeList] = useState([
    {
      name: "Pasta",
      description: "pastas description"
    },
    {
      name: "Hamburger",
      description: "Hamburgers description"
    },
  ])

  const addRecipe = (name, description) => {
    const newRecipeList = [...recipeList, {
      name: name,
      description: description
    }]
    setRecipeList(newRecipeList);
  }

  return (
    <>
      <NavBar setShowModal={setShowModal} setModalType={setModalType}/>
      <RecipeList recipeList={recipeList}/>
      {showModal && 
        <Modal 
          setShowModal={setShowModal} 
          setRecipe={setRecipe}
          modalType={modalType}
          addRecipe={addRecipe}
        />
      }
      
      
    </>
  )
}

export default App
