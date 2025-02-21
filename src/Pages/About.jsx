import React from 'react'
import './About.css';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
  return (
    <Container fluid className='second_container' id='about' >
    <Row className='second_row'>
        <Col className='col-2'></Col>
        <Col className='about_column'><h1 className='about_heading'>About Me</h1>
        <p className='about_paragraph'>I'm a passionate web developer with a keen eye for design and a love for 
            creating intuitive, user-friendly experiences. With expertise in modern web technologies, 
            I bring ideas to life through clean, efficient code.When I'm not coding, you can find me 
            exploring new technologies, contributing to open-source projects, or enjoying the great 
            outdoors. I'm always excited to take on new challenges and collaborate on innovative projects.</p>
            </Col><Col className='col-2'></Col>
            </Row>
            <Row>

            </Row>
</Container>
  )
}

export default About;
