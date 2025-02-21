import React from 'react'
import './Paint.css'
import { Col, Container, Image, Row } from 'react-bootstrap';
import paint_data from '../Json_for_projects/Paint_datafiles.json';

const Paint = () => {
  return (
    <Container className='paint_container'>
    <Row>
      {paint_data.map((item, index) => (
        <Col key={index}>
          <h3 className='paint_heading'>{item.name}</h3>
         <Row>
              {item.images.map((image, image_index) => (
                <Col className='paint_image__col' key={image_index} xs={12} sm={6} md={4} lg={6}>
                    <Image src={image} className="paint_image" fluid />
                </Col>
              ))}
           </Row>
          <p className='paint_paragraph' style={{textAlign:"left"}}>{item.Detail}</p>
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export default Paint;
