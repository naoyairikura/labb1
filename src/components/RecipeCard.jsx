import React from "react";

const RecipeCard = ({
  index,
  recipe,
  setShowModal,
  setModalType,
  setIndex,
  deleteRecipe,
}) => {
  const handleEdit = () => {
    setIndex(index);
    setShowModal(true);
    setModalType("Edit");
  };

  const handleDelete = () => {
    setIndex(index);
    deleteRecipe(index);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col p-0">
          <img src={recipe.src} alt="pasta" className="img-fluid" />
        </div>
        <div className="col position-relative">
          <h4 className="text-start m-0">{recipe.name}</h4>
          <div className="text-start">{recipe.description}</div>
          <div className="position-absolute bottom-0 bt-group">
            <button
              className="btn btn-outline-primary btn-sm me-2"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
