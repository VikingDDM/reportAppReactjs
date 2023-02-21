import './index.css'
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { emailReg, errorMsg, passwordReg } from "helpers/const.helper";
import { toast } from "react-toastify";
import { signup } from "hooks/auth";

const validationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

const initialValues = {
  email: "",
  password: "",
};

const SignupPage = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, actions) => {
      !emailReg.test(values.email)
        ? toast.error(errorMsg.mail)
        : !passwordReg.test(values.password)
        ? toast.error(errorMsg.password)
        : signup(values).then(() => {
            history.push("/signup/changeemail", { data: values.email });
          });
      actions.resetForm({ values: initialValues });
    },
  });

  return (
    <Row className="signuppagebody">
      <Col md={6} lg={4} className="mx-auto" style={{ height: "100vh",zIndex:"10" }}>
        <Card className='logoutcard' style={{ marginTop: "300px", transform: "translateY(-50%)",zIndex:"20",borderTop:"7px solid #9f8d37"}}>
          <div style={{margin:"auto"}}>
            <img className='logoimg' src='logo.png'/>
          </div>
          <Card.Body style={{ marginTop:"10px"}}>
            <Card.Title style={{ textAlign: "center",fontWeight: "300",marginBottom: "1.5rem",lineHeight: "1.5",fontSize: "1.75rem"}}>Sign up</Card.Title>
            
            <Form className="form" onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-2 logoutform">
                <Form.Control
                  type="text"
                  name="name"
                  id="name"
                  
                  placeholder="name"
                  className="emailformcontrol"
                  style={{ height: "50px",
                    color: "black",
                    border: "1px solid #9f8d37",
                    background: "transparent",
                    paddingLeft: "20px",
                    paddingRight: "20px"}}
                />
                
              </Form.Group>
              <Form.Group className="mb-2 logoutform">
                <Form.Control
                  type="text"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="gmail"
                  className="emailformcontrol"
                  style={{ height: "50px",
                    color: "black",
                    border: "1px solid #9f8d37",
                    background: "transparent",
                    paddingLeft: "20px",
                    paddingRight: "20px"}}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-2" style={{ marginBottom: "1rem", textAlign: "left" }}>
                
                <Form.Control
                  type="password"
                  name="password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className="pswformcontrol"
                  placeholder="password"
                  style={{ height: "50px",
                    color: "black",
                    border: "1px solid #9f8d37",
                    background: "transparent",
                    paddingLeft: "20px",
                    paddingRight: "20px"}}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}
              </Form.Group>
              <Button type="submit" color="primary" className="w-100 submitbtn">
                Sign up
              </Button>
            </Form>
            <Link to="/signin" className="d-block my-2 text-center" style={{textDecoration:"none", color:"#934036",width:"150px",margin:"auto"}}>
              <b>Go to Sign in Page</b>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SignupPage;
