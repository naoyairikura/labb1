import React from 'react'
import Pasta from '../assets/pasta.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


const RecipeCard = ({setShowModal, recipe}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col p-0">
          <img src={Pasta} alt="pasta" className="img-fluid" />
        </div>
        <div className="col position-relative">
          <h4 className="text-start m-0">{recipe.name}</h4>
          <div className="text-start">{recipe.description}</div>
          <div className="position-absolute bottom-0 bt-group">
            <button className="btn btn-primary btn-sm me-2" onClick={()=>setShowModal(true)}>Edit</button>
            <button className="btn btn-danger btn-sm">Delete</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default RecipeCard