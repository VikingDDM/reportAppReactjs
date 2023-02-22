import "./index.css";
import Nav from "react-bootstrap/Nav";
import React, { useEffect } from "react";
import { RootState } from "store/store";
import { signout } from "store/modules/auth";
import { Row, Col, Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "store/hooks";

const Main = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(user);
  }, []);

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
          <div className="logotext">
            <h3>Welcome to BY2!</h3>
          </div>
        </Col>
        <Col className="exheader">
          <div className="logoutcontent">
            <span className="mb-3 text-muted">{user.email}</span>
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
              <i className="bi bi-file-text"></i> Daily report
            </Nav.Link>
            <Nav.Link className="navitem" eventKey="link-1">
              {" "}
              Freelancer management
            </Nav.Link>
            <Nav.Link className="navitem" eventKey="link-2">
              {" "}
              Pay amount
            </Nav.Link>
          </Nav>
          <div>dfsfsdf</div>
        </div>
      </Row>
      <Row className="footer">dsfdsfds</Row>
    </Row>
  );
};

export default Main;
