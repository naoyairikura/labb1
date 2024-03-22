import { useEffect, useState } from 'react';
import './App.css'
import Modal from './components/Modal'
import NavBar from './components/NavBar';
import RecipeList from './components/RecipeList';
import Footer from './components/Footer';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [recipeList, setRecipeList] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('../initRecipe.json');
      const data = await response.json();
      setRecipeList(data);
    }
    fetchData();
  }, [])


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
      <NavBar setShowModal={setShowModal} setModalType={setModalType} setIndex={setIndex}/>
      <RecipeList 
        recipeList={recipeList} 
        setShowModal={setShowModal} 
        setModalType={setModalType}
        setIndex={setIndex}
      />
      {showModal && 
        <Modal 
          index={index}
          recipeList={recipeList}
          setShowModal={setShowModal} 
          modalType={modalType}
          addRecipe={addRecipe}
          editRecipe={editRecipe}
        />
      }
      <Footer recipeList={recipeList}/>
    </>
  )
}

export default App
