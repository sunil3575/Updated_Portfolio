import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data_files from '../Component/Project_introduction.json'
import './Projects.css';
const Projects = () => {
  return (
 <Container fluid className='project_container' style={{marginBottom:"50px"}}>
    <Row>
        <h1 className='project_heading' style={{marginTop:"90px",textAlign:"center",marginBottom:"50px"}}>Projects</h1>
        {data_files.map((item,index)=>(
        <Col key={index} className='card_column'  md={4} sm={6} xs={12} >
          <Card className='project_card'  style={{ width: '20rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text style={{textAlign:"left"}}>
          {item.description}
        </Card.Text>
        <Button className='project_button' variant="primary" href={item.link}>{item.btn}</Button>
      </Card.Body>
    </Card>
  
        </Col>
      ))}
    </Row>
 </Container>
  )
}

export default Projects;
