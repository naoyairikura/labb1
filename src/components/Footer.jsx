import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = ({ recipeList }) => {
    return (
        <>
            <footer className="footer mt-3 py-3 bg-light">
                <div className="container text-center">
                    <div className="text-muted">Number of recipe: {recipeList.length}</div>
                    <div className="text-muted">© 2024 Naoya Irikura</div>
                </div>
            </footer>
        </>

    )
}

export default Footer