// import "./main.css";
import { Modal, Form, Table, Container, Button}  from 'react-bootstrap';
import React, { useState } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";


const AllReport = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const productsGenerator = (quantity: any) => {
    const items = [];
    for (let i = 0; i < quantity; i++) {
      items.push({ id: i, name: `Item name ${i}`, price: 2100 + i });
    }
    return items;
  };
  
  const products = productsGenerator(100);
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
    },
    {
      dataField: "name",
      text: "Product Name",
    },
    {
      dataField: "price",
      text: "Product Price"
    }
  ];
  
  

  return (
    <Container className="reportcontent">
        <div >
          <h4 className="contecttitle">This is All Report</h4>
          <div className="reportbtncontent">
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
        </div>  
    </Container>
  )

}

export default AllReport;