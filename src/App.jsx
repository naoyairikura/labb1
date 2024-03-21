import { useState } from 'react';
import './App.css'
import Modal from './components/Modal'
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

  const addRecipe = (recipe) => {
    const newRecipeList = [...recipeList, recipe]
    setRecipeList(newRecipeList);
  }

  const [index, setIndex] = useState();
  const editRecipe = (editedRecipe) => {
    const newRecipeList = [...recipeList];
    newRecipeList[index] = editedRecipe;
    setRecipeList(newRecipeList)
  }

  return (
    <>
      <NavBar setShowModal={setShowModal} setModalType={setModalType}/>
      <RecipeList 
        recipeList={recipeList} 
        setShowModal={setShowModal} 
        setModalType={setModalType}
        setIndex={setIndex}
      />
      {showModal && 
        <Modal 
          setShowModal={setShowModal} 
          setRecipe={setRecipe}
          modalType={modalType}
          addRecipe={addRecipe}
          editRecipe={editRecipe}
        />
      }
    </>
  )
}

export default App
