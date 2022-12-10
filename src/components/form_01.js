import React from "react";
import { useState } from 'react';
import './form_01.css';
import {Form, Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyForm() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    }
  
    return (
      <Container className="label_01 form_container">
        <Form className="form01">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formBasicMake">
              <Form.Label className="label_01">Make</Form.Label>
              <Form.Control type="text" name="make" value={inputs.make || ""} onChange={handleChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="formBasicModel">
              <Form.Label className="label_01">Model</Form.Label>
              <Form.Control type="text" name="model" value={inputs.model || ""} onChange={handleChange}/>
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>

      </Container>
      
    )
  }

  export default MyForm;

