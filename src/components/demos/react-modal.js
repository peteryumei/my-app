import React, { useState} from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';

Modal.setAppElement('#root')

function ReactModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
      <div className="jumbotron">
        <div>
        <Button onClick={() => setModalIsOpen(true)}>Open react-modal</Button>
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
          <h4>Modal Title</h4>
          <p>Modal Body</p>
          <div>
            <Button variant="secondary" onClick={() => setModalIsOpen(false)}>Close</Button>
          </div>
        </Modal>
        </div>
  
        <div>
          
        </div>
      </div>
    );
}

export default ReactModal;