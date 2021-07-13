

import React, { useState} from 'react';
import Modal from 'react-modal';
import logo from './logo.svg';
import './App.css';

Modal.setAppElement('#root')
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="App">
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
  );
}

export default App;
