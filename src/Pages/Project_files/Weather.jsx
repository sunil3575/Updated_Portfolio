import React from 'react'
import './Weather.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import weather_data from '../Json_for_projects/Weather_datafiles.json';
const Weather = () => {
  return (
    <Container className='weather_container'>
    <Row>
      {weather_data.map((item, index) => (
        <Col key={index}>
          <h3 className='weather_heading'>{item.name}</h3>
         <Row>
              {item.images.map((image, image_index) => (
                <Col className='weather_image__col' key={image_index} xs={12} sm={6} md={4} lg={6}>
                    <Image src={image} className="weather_image" fluid />
                </Col>
              ))}
           </Row>
          <p className='weather_paragraph' style={{textAlign:"left"}}>{item.Detail}</p>
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export default Weather;
