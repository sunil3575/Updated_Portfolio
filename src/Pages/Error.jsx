import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Error.css';
import { FaFaceSadTear} from 'react-icons/fa6';


const Error = () => {
  return (
   <Container className='error_container'>
    <Row>
        <Col>
       
        <h4 className='display-4'><span className='display-1'>404</span><br/>Sorry, we couldn't find this page.<br/>
        <span style={{color:"red"}}><FaFaceSadTear/></span></h4>
        

        </Col>
    </Row>
    <Row>
        <Col className='error_col'>
       <br/> <Button className='error_btn' href='/'>Back To Home</Button>
        </Col>
    </Row>
   </Container>
  )
}

export default Error;
