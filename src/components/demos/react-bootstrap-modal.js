import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import toast from 'react-simple-toasts';
import './react-bootstrap-modal.css';

function ReactBootstrapModal() {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [clientEmail, setClientEmail] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toastMessage = (event) => {
      toast('Email sent successfully', 50000);
    }
    const sendEmail = (event) => {

     
      
      if (lastName.trim() ==='' || lastName.trim() ==='' || clientEmail.trim() ==='') 
      {
        setValidated(true);
        return;
      }
      else 
      {
        handleClose();
      }

      
    }
  
    return (
      <div className="jumbotron">
        <Button variant="primary" onClick={handleShow}>
        Open react-bootstrap modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form  >
                    <Row>
                        <Col>
                            <Form.Group className="mb-2" controlId="formTitle">
                                <Form.Control as="select" defaultValue="Anrede">
                                    <option>Anrede</option>
                                    <option>Herr</option>
                                    <option>Frau</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col sm={8}>
                            <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Control style={validated && firstName.trim() ==='' ? { borderColor: 'red' } : { borderColor: '#ced4da' }} type="text" placeholder="Vorname" onChange={e => {
                                    setFirstName(e.target.value);
                                }}/>
                            </Form.Group>
                         </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Control style={validated && lastName.trim() ==='' ? { borderColor: 'red' } : { borderColor: '#ced4da' }} type="text" placeholder="Nachname" onChange={e => {
                                    setLastName(e.target.value);
                                }}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formCompany">
                            <Form.Control type="text" placeholder="Firma" />
                            </Form.Group>
                        </Col>
                    </Row>
                        
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Control type="text" placeholder="Telefonnummer" />
                            </Form.Group>
                         </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Control style={validated && (clientEmail.trim() ==='' || !( /(.+)@(.+){2,}\.(.+){2,}/.test(clientEmail))) ? { borderColor: 'red' } : { borderColor: '#ced4da' }} type="email" placeholder="E-Mail" onChange={e => {
                                    setClientEmail(e.target.value);
                                }}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button disabled={validated && (lastName.trim() ==='' || lastName.trim() ==='' || clientEmail.trim() ==='' || !( /(.+)@(.+){2,}\.(.+){2,}/.test(clientEmail))) ? true : false}  
                      onClick={sendEmail}>
                    Submit Form
                    </Button>
                    <Button onClick={toastMessage}>Toast Message</Button>
                    <div>
  <p>Red dot:&nbsp;&nbsp;&nbsp;
  <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
    AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
        9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" /></p>
</div>
                </Form>
      </Modal.Body>
         
        </Modal>
      </div>
    );
  }

  export default ReactBootstrapModal;
  