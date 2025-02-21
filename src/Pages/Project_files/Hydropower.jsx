

import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgRotate from 'lightgallery/plugins/rotate';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgPager from 'lightgallery/plugins/pager';
import  lgFullscreen from 'lightgallery/plugins/fullscreen';
import CloseButton from 'react-bootstrap';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Hydropower.css';
import hydro_data from '../Json_for_projects/Hydropower_datafiles.json';
import "lightgallery.js/dist/css/lightgallery.css";
import lightGallery from 'lightgallery';

const Hydropower = () => {
  // const onInit = () => {
  //        console.log('lightGallery has been initialized');
  //     };
  return (
    <Container className='hydro_container'>
      <Row>
        {hydro_data.map((item, index) => (
          <Col key={index}>
            <h3 className='hydro_heading'>{item.name}</h3>
            {/* <lightGallery
      onInit={onInit}
      speed={500}
     plugins={[lgFullscreen,lgAutoplay,lgRotate,lgPager]}> */}
           <Row>
                {item.images.map((image, image_index) => (
                  <Col className='image_col' key={image_index} xs={12} sm={6} md={4} lg={6}>
                    {/* <a href={image} data-lightgallery="item"> */}
                      <Image src={image} className="hydro_image" fluid />
                    {/* </a> */}
                  </Col>
                ))}
             </Row>
            {/* </lightGallery> */}
            <p className='hydro_paragraph' style={{textAlign:"left"}}>{item.Detail}</p>
            
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Hydropower;

