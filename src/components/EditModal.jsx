import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const EditModal = () => {
  

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div>
        <div className="modal-backdrop fade show" style={{ zIndex: 1050, backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }}>
          <div className="modal fade show" tabIndex="-1" style={{ display: 'block', zIndex: 1051 }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>
                  <button type="button" className="btn-close" onClick={handleClose}></button>
                </div>
                <div className="modal-body">
                  This is the content of the modal. You can put any JSX elements or components here.
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleClose}>
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      
    </div>
  );
}

export default EditModal
