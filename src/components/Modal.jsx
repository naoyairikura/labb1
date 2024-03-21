import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Modal = ({ setShowModal, setRecipe, modalType, addRecipe }) => {
  const [recipeName, setRecipeName] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const handleSave = () => {
    addRecipe(recipeName, recipeDescription);
    setShowModal(false);
  }
  return (
    <>
      <div className="modal-backdrop fade show" style={{ zIndex: 1050, backgroundColor: 'rgba(0, 0, 0, 1)', position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }}>
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block', zIndex: 1051 }}>
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
                    id="recipeName"
                    value={recipeName}
                    onChange={(e)=>setRecipeName(e.target.value)}
                  />
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor="description" className="me-2">Description:</label>
                  <input type="text" className="form-control" id="description" />
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
