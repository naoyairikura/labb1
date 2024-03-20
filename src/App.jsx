import { useState } from 'react';
import './App.css'
import EditModal from './components/EditModal'
import RecipeCard from './components/RecipeCard'

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <RecipeCard setShowModal={setShowModal}/>
      {showModal && <EditModal setShowModal={setShowModal}/>}
      
      
    </>
  )
}

export default App
