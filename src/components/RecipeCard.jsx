import React from 'react'
import Pasta from '../assets/pasta.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


const RecipeCard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col p-0">
          <img src={Pasta} alt="pasta" className="img-fluid" />
        </div>
        <div className="col">
          <div className="text-start">Pasta</div>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard