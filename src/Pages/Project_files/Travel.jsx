import React from 'react'
import './Travel.css'
import { Col, Container, Image, Row } from 'react-bootstrap';
import travel_data from '../Json_for_projects/Travel_datafiles.json';
const Travel = () => {
  return (
    <Container className='travel_container'>
    <Row>
      {travel_data.map((item, index) => (
        <Col key={index}>
          <h3 className='travel_heading'>{item.name}</h3>
         <Row>
              {item.images.map((image, image_index) => (
                <Col className='travel_image__col' key={image_index} xs={12} sm={6} md={4} lg={6}>
                    <Image src={image} className="travel_image" fluid />
                </Col>
              ))}
           </Row>
          <p className='travel_paragraph' style={{textAlign:"left"}}>{item.Detail}</p>
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export default Travel;
