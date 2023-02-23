import "../main.css";
import { Modal, Form, Table, Container, Button, Pagination }  from 'react-bootstrap';
import React, { useState } from 'react';


const Report =() => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="reportcontent">
        <div >
          <h4 className="contecttitle">This is . YOu</h4>
          <div>
                <Button className="reportbtn" variant="primary" onClick={handleShow}>
                    Report
                </Button>
          </div>
          
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Input about your daily work</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          <Table striped bordered hover size="sm" >
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Summery</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><i className="bi bi-pencil-square"></i><i className="bi bi-trash-fill"></i></td>
              </tr>
            </tbody>
          </Table>
        </div>  
    </Container>
  )

}

export default Report;