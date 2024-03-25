import React from "react";

const NavBar = ({ setShowModal, setModalType, setIndex }) => {
  const handleAddClick = () => {
    setShowModal(true);
    setModalType("Add");
    setIndex(null);
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand ms-2">Your recipe</a>
      <form className="form-inline ms-auto">
        <button
          className="btn btn-outline-success me-2"
          type="button"
          onClick={handleAddClick}
        >
          Add recipe
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
