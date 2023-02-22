import './index.css'
import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { useAppDispatch, useAppSelector } from "store/hooks";
import { signout } from "store/modules/auth";
import { RootState } from "store/store";


const Main = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();

  const handleLoginOut = () => {
    dispatch(signout());
    window.location.reload();
  };

  return (
    <Row>
      <Row className="header">
        <Col className="logocontent">
          <div>
              <img src="logo.png" width={100} height={45} />
          </div>
          <div className='logotext'>
               <h3>Welcome to BY2!</h3>
          </div>
        </Col>
        <Col className='exheader'>
          <div className='logoutcontent'>
              <span className="mb-3 text-muted">{user.email}</span>
               <Button
                 type="button"
                 variant="outline-primary"
                 onClick={handleLoginOut}
                 className='logoutbtn'
               >
                 Signout
               </Button>
          </div>
           
        </Col>
      </Row>
      <Row className='content'>
        <div>
            <Nav defaultActiveKey="/home" className="flex-column navcontent">
              <Nav.Link className='navitem' href="/home"><i className="bi bi-file-text"></i> Daily report</Nav.Link>
              <Nav.Link className='navitem' eventKey="link-1"> Freelancer management</Nav.Link>
              <Nav.Link className='navitem' eventKey="link-2"> Pay amount</Nav.Link>
            </Nav>
        </div>
        <div>
          dfsfsdf
        </div>
      </Row>
      <Row className='footer'>
        dsfdsfds
      </Row>
    </Row>
  );
};

export default Main;
