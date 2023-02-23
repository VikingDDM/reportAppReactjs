import "./main.css";
import Nav from "react-bootstrap/Nav";
import React, { useState, useEffect } from 'react';
import { signout } from "store/modules/auth";
import { Row, Col, Button } from "react-bootstrap";
import { useAppDispatch } from "store/hooks";
import AsyncLocalStorage from "@createnextapp/async-local-storage";
import Report from "./components/report";

// import React, { useEffect } from "react";
// import { RootState } from "store/store";
// import {signinAuth} from "store/modules/auth/selectors"
// import { storageConst } from "helpers/const.helper";

const Main = () => {
  // const user = useAppSelector(signinAuth);
  const dispatch = useAppDispatch(); 
  const [userName, setUserName] = useState('');

  const init = async () => {
    const user = await AsyncLocalStorage.getItem("username");
    setUserName(user);
  };

  const handleLoginOut = () => {
    dispatch(signout()).then(() => 
      window.location.reload()
    );
  };

  useEffect(() => {
    init();    
  }, [])

  return (
    <Row className="mainbody">
      <Row className="header">
        <Col className="logocontent">
          <div>
            <img className="logoiimg" src="logo.png" width={70} height={33} alt="It's logos"/>
          </div>
          <div className="logotext">
            <h3>{userName}, Welcome to BY2!</h3>
          </div>
        </Col>
        <Col className="exheader">
          <div className="logoutcontent">
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
      <Row className="maincontent">
        <div className="content">
          <Nav defaultActiveKey="/home" className="flex-column navcontent">
            <Nav.Link className="navitem" href="/home">
                 <i className="bi bi-stickies-fill"></i> Daily report
            </Nav.Link>
            <Nav.Link className="navitem" eventKey="link-1">
              {" "}
              <i className="bi bi-people-fill"></i> All Reports
            </Nav.Link>
            <Nav.Link className="navitem" eventKey="link-2">
              {" "}
              <i className="bi bi-wallet-fill"></i> Pay amount
            </Nav.Link>
          </Nav>
          <Report />
        </div>
      </Row>
      <Row className="footer">dsfdsfds</Row>
    </Row>
  );
};

export default Main;
