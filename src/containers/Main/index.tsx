import "./main.css";
import Nav from "react-bootstrap/Nav";
import React, { useState, useEffect } from 'react';
// import React, { useEffect } from "react";
// import { RootState } from "store/store";
import {signinAuth} from "store/modules/auth/selectors"
import { signout } from "store/modules/auth";
import { Row, Col, Button, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "store/hooks";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import AsyncLocalStorage from "@createnextapp/async-local-storage";
import { storageConst } from "helpers/const.helper";

const Main = () => {
  // const user = useAppSelector(signinAuth);
  const dispatch = useAppDispatch(); 
  const [userName, setUserName] = useState('');

  const init = async () => {
    const user = await AsyncLocalStorage.getItem("username");
    setUserName(user);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleLoginOut = () => {
    dispatch(signout()).then(() => 
      window.location.reload()
    );
  };

  useEffect(() => {
    init();    
  }, [])

  return (
    <Row>
      <Row className="header">
        <Col className="logocontent">
          <div>
            <img src="logo.png" width={100} height={45} alt="It's logos"/>
          </div>
          <div className="logotext">
            <h3>Welcome to BY2!</h3>
          </div>
        </Col>
        <Col className="exheader">
          <div className="logoutcontent">
            <span className="mb-3 text-muted">{userName}</span>
            <Button
              type="button"
              variant="outline-primary"
              onClick={handleLoginOut}
              className="logoutbtn"
            >
              Signout
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="content">
          <Nav defaultActiveKey="/home" className="flex-column navcontent">
            <Nav.Link className="navitem" href="/home">
                 <i className="bi bi-stickies-fill"></i> Daily report
            </Nav.Link>
            <Nav.Link className="navitem" eventKey="link-1">
              {" "}
              <i className="bi bi-people-fill"></i> Freelancer management
            </Nav.Link>
            <Nav.Link className="navitem" eventKey="link-2">
              {" "}
              <i className="bi bi-wallet-fill"></i> Pay amount
            </Nav.Link>
          </Nav>
          <Container>
            <div className="reportcontent">
              <h4>This is . YOu</h4>
              <Button className="reportbtn" variant="primary" onClick={handleShow}>
                  Report
              </Button>
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
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td><i className="bi bi-pencil-square"></i><i className="bi bi-trash-fill"></i></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td><i className="bi bi-pencil-square"></i><i className="bi bi-trash-fill"></i></td>
                  </tr>
                  
                </tbody>
              </Table>
            </div>  
          </Container>
        </div>
      </Row>
      <Row className="footer">dsfdsfds</Row>
    </Row>
  );
};

export default Main;
