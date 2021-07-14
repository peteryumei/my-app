import React, { useState} from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

function ReactModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
      <div className="jumbotron">
        <div>
        <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
        <Modal 
          isOpen={modalIsOpen} 
          shouldCloseOnOverlayClick={true} 
          onRequestClose={() => setModalIsOpen(false)} 
          style={
            {
              overlay: {
                backgroundColor: 'grey'
              },
              content: {
                color:'orange'
              }
            }
          }>
          <h2>Modal Title</h2>
          <p>Modal Body</p>
          <div>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
          </div>
        </Modal>
        </div>
  
        <div>
          
        </div>
      </div>
    );
}

export default ReactModal;