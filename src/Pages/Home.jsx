import React, { useState } from 'react';
import './Home.css';
import { Button, Card, CardGroup, Col, Container, Form, Image, InputGroup, Row } from 'react-bootstrap';
import picture from '../Component/my_image/IMG_20201214_150020.jpg';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';
const Home = () => {
    return (
        <><Container fluid className='first_container'>
            <Row className='first_row'>
                {/* <Col className='col-1'></Col> */}
                <Col className='mt-5 pt-5 intro_column'><h1 className='display-3'><b className='intro_hi' style={{fontWeight:"bold",color:"black"}}>
                    Hi, I'm <span className='intro_style_name'>Your Sunil</span></b></h1><span style={{color:"black",fontSize:"20px"}}>Passionate web developer creating amazing digital experiences.
                    </span> <br/><Button href="#contact" variant="primary mt-4 pt-1" size="lg" ><small><a style={{color:"white",textDecoration:"none",fontWeight:"bold",padding:"5px",textAlign:"center"}}>Get in touch</a></small></Button>
                </Col>
                <Col className='col-2'></Col>
                <Col className='mt-4 intro__column_image'><Image className='intro_inner_pic' src={picture} height='550px' width="100%"></Image></Col>
                {/* <Col className='col-1'></Col> */}
            </Row>
            </Container>
            <Row>
            <About />
            <Projects/>
            <Skills/>
            <Contact/>
            </Row>
         
        
       
        
        </>

    )
}
export default Home;
