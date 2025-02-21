import React from 'react'
import './India_Tourisum.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import india_tour_data from '../Json_for_projects/India_tourisum_datafiles.json';

const India_Tourisum = () => {
  return (
    <Container className='india_tour_container'>
    <Row>
      {india_tour_data.map((item, index) => (
        <Col key={index}>
          <h3 className='india_tour_heading'>{item.name}</h3>
         <Row>
              {item.images.map((image, image_index) => (
                <Col className='india_tour_image__col' key={image_index} xs={12} sm={6} md={4} lg={6}>
                    <Image src={image} className="india_tour_image" fluid />
                </Col>
              ))}
           </Row>
          <p className='india_tour_paragraph' style={{textAlign:"left"}}>{item.Detail}</p>
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export default India_Tourisum;
