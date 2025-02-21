import React, { useRef, useState } from 'react'
import './Contact.css';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import emailjs from "@emailjs/browser";






const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    // ✅ Send email via EmailJS
    emailjs
      .sendForm(
        "service_zf6ei6h", // ✅ Your EmailJS Service ID
        "template_n2l5khw", // ✅ Your EmailJS Template ID
        formRef.current,
        "VOerHd8LL8-ZjTSmC" // ✅ Your EmailJS Public Key
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setIsSubmitted(true);
        setErrorMessage("");
        form.reset(); // ✅ Reset form after submission
        setValidated(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setErrorMessage("Error sending message. Please try again.");
      });
  };

  return (
    <Container fluid className="fifth_container" id="contact">
      <Row className='contact_row'>
      {isSubmitted && <Alert variant="success">Form submitted successfully!</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <Col className="col-1 cou_col"></Col>
        <Col className='mb-5'>
          <h1 className="form_heading">
            Get in touch
          </h1>

          {/* ✅ Success & Error Messages */}
         
          <Form ref={formRef} noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="First Name" required />
                <Form.Control.Feedback type="invalid">Enter First Name</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastname" placeholder="Last Name" required />
                <Form.Control.Feedback type="invalid">Enter Last Name</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Email" required />
                <Form.Control.Feedback type="invalid">Please provide a valid Email</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  style={{ resize: "none" }}
                  placeholder="Enter message..."
                  required
                />
                <Form.Control.Feedback type="invalid">Please Type Message</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button style={{ marginBottom: "45px", width: "100%" }} type="submit">
              Submit Form
            </Button>
          </Form>
        </Col>
    
<Col className="map_location">
<h1 className="map_heading" style={{marginBottom:"35px"}}>
        Location
      </h1>
      <iframe style={{height:"560px",width:"100%",borderRadius:"5px"}}
       src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2909.4565298958437!2d83.41395287457215!3d27.60772217623984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDM2JzI3LjgiTiA4M8KwMjQnNTkuNSJF!5e1!3m2!1sen!2snp!4v1739366863940!5m2!1sen!2snp">
        
       </iframe>
</Col>
        <Col className='col-1 cont_col'></Col>
    </Row>
</Container>
  )
}

export default Contact;
