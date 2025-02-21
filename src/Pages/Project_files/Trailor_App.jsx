import React from 'react'
import './Trailor_App.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import trailor_data from '../Json_for_projects/Trailor_datafiles.json';

const Trailor_App = () => {
  return (
    <Container className='trailor_container'>
    <Row>
      {trailor_data.map((item, index) => (
        <Col key={index}>
          <h3 className='trailor_heading'>{item.name}</h3>
         <Row>
              {item.images.map((image, image_index) => (
                <Col className='trailor_image__col' key={image_index} xs={12} sm={6} md={4} lg={6}>
                    <Image src={image} className="trailor_image" fluid />
                </Col>
              ))}
           </Row>
          <p className='trailor_paragraph' style={{textAlign:"left"}}>{item.Detail}</p>
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export default Trailor_App;
