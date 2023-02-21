import './index.css'
import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { useAppDispatch } from "store/hooks";
import { signin } from "store/modules/auth";
import { emailReg, errorMsg, passwordReg } from "helpers/const.helper";
import { url } from "inspector";

const validationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

const initialValues = {
  email: "",
  password: "",
};

const SigninPage = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, actions) => {
      !emailReg.test(values.email)
        ? toast.error(errorMsg.mail)
        : !passwordReg.test(values.password)
        ? toast.error(errorMsg.password)
        : dispatch(signin(values)).then(() => {
            history.push("/");
          });
      actions.resetForm({
        values: {
          ...values,
          password: "",
        },
      });
    },
  });

  return (
    <Row className="signinpagebody">
      <Col md={6} lg={4} className="mx-auto" style={{ height: "100vh",zIndex:"10"}}>
        
        <Card className='logincard' style={{ marginTop: "300px", transform: "translateY(-50%)" ,zIndex:"20",borderTop:"7px solid #9f8d37"}}>
          <div style={{margin:"auto"}}>
            <img className='logoimg' src='logo.png'/>
          </div>
          
          <Card.Body style={{ marginTop:"10px"}}>
            <Card.Title style={{ textAlign: "center",fontWeight: "300",marginBottom: "1.5rem",lineHeight: "1.5",fontSize: "1.75rem"}}>Have an account?</Card.Title>
            
            <Form className="form" onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-2 loginform">
                
                <Form.Control
                  type="text"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="email"
                  className="emailformcontrol"
                  style={{ height: "50px",
                    color: "black",
                    border: "1px solid #9f8d37",
                    background: "transparent",
                    paddingLeft: "20px",
                    paddingRight: "20px"}}
                />
                {
                  formik.touched.email && formik.errors.email ? 
                  (
                    <div className="text-danger">{formik.errors.email}</div>
                  ) 
                  : null
                }
              </Form.Group>
              <Form.Group className="mb-2 loginform">
                
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
                Sign in
              </Button>
            </Form>
            
            <Link to="/signup" className="d-block my-2 text-center" style={{textDecoration:"none", color:"#934036",width:"150px",margin:"auto"}}>
              <b>Go to Sign up Page</b>
            </Link>
            <div style={{position:"relative"}}>
                <div>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{color:"grey"}}>
                       <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                </div>
                <div style={{ position:"absolute",right:"4px",top:"0px",color:"grey"}}>
                    <Link to="/signup" className="  text-center" style={{textDecoration:"none", width:"150px",color:"grey"}}>
                       Forgot password?
                    </Link>
                </div>
                
            </div>
          </Card.Body>
        </Card>
        
      </Col>
    </Row>
  );
};

export default SigninPage;
