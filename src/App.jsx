import { useState } from 'react';
import './App.css'
import Modal from './components/Modal'
import RecipeCard from './components/RecipeCard'
import NavBar from './components/NavBar';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [recipe, setRecipe] = useState({
    name: '',
    description: ''
  });
  const [modalType, setModalType] = useState('');

  return (
    <>
      <NavBar setShowModal={setShowModal} setModalType={setModalType}/>
      <RecipeCard 
        setShowModal={setShowModal} 
        recipe={recipe} 
        setModalType={setModalType}
      />
      {showModal && 
        <Modal 
          setShowModal={setShowModal} 
          setRecipe={setRecipe}
          modalType={modalType}
        />
      }
      
      
    </>
  )
}

export default App
