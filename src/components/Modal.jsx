import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Modal = ({ index, recipeList, setShowModal, modalType, addRecipe, editRecipe }) => {
  const [recipe, setRecipe] = useState(
    index === null ? {
      name: '',
      description: '',
      src: 'src/assets/fallback.jpeg'
    } : recipeList[index]
  );
  const change = (e) => {
    setRecipe({...recipe, [e.target.name]:e.target.value})
  }

  const handleSave = () => {
    modalType === 'Add' ? addRecipe(recipe) : editRecipe(recipe);
    setShowModal(false);
  }
  return (
    <>
      <div className="modal-backdrop fade show">
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalType} recipe</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body d-flex flex-column">
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="recipeName" className="me-2">Recipe name:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name='name'
                    value={recipe.name}
                    onChange={change}
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="description" className="me-2">Description:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name='description' 
                    value={recipe.description}
                    onChange={change}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal
