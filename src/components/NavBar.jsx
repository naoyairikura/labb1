import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand ms-2">Your recipe</a>
      <form className="form-inline ms-auto">
        <button className="btn btn-outline-success me-2" type="button">Add recipe</button>
      </form>
    </nav>
  )
}

export default NavBar