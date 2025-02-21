// import React from 'react'
// import './Skills.css';
// import { Button, Col, Container, Row } from 'react-bootstrap';
// import resume from '../Component/Resume/SunilResume.pdf';
// import { FaDownload } from "react-icons/fa";

// const Skills = () => {
//   return (
//     <Container  className='fourth_container' id='skill'>
//        <h1 className='skills_heading'>My Skills</h1>
//     <Row>
        
       
//         <Col className='fourth_column'>
       
//         <Button className='skills_btn'>HTML</Button>
//         <Button className='skills_btn'>css</Button>
//         <Button className='skills_btn'>JavaScript</Button>
//         <Button className='skills_btn'>React</Button>
//         <Button className='skills_btn'>Oracle</Button>
//         <Button className='skills_btn'>Sql</Button>
//         <Button className='skills_btn'>MySql</Button>
//         <Button className='skills_btn'>MongoDB</Button>
//         <Button className='skills_btn'>Bootstrap</Button>
//         <Button className='skills_btn'>Nodejs</Button>
//         <Button className='skills_btn'>Handoop</Button>
//         <Button className='skills_btn'>Express</Button>
//         <Col className='p-3 portfolio_resume' >
//         <a className='about_resume' style={{textDecoration:"none",fontSize:"larger"}} href={resume} download="SunilResume">{FaDownload}<i>{FaDownload}</i> Download Resume</a>

//         </Col>
        
//         </Col>
      
      


//     </Row>

// </Container>
//   )
// }

// export default Skills;

// updated code 

import React from 'react';
import './Skills.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import resume from '../Component/Resume/SunilResume.pdf';
import { FaDownload } from "react-icons/fa";

const Skills = () => {
  return (
    <Container className='fourth_container' id='skill'>
      <h3 className='skills_heading'>My Skills</h3>
      <Row>
        <Col className='fourth_column'>
          <Button className='skills_btn'>HTML</Button>
          <Button className='skills_btn'>CSS</Button>
          <Button className='skills_btn'>JavaScript</Button>
          <Button className='skills_btn'>React</Button>
          <Button className='skills_btn'>Oracle</Button>
          <Button className='skills_btn'>SQL</Button>
          <Button className='skills_btn'>MySQL</Button>
          <Button className='skills_btn'>MongoDB</Button>
          <Button className='skills_btn'>Bootstrap</Button>
          <Button className='skills_btn'>Node.js</Button>
          <Button className='skills_btn'>Hadoop</Button>
          <Button className='skills_btn'>Express</Button>
        </Col>
      </Row>
      <Col className='p-3 portfolio_resume'>
        <a className='about_resume' href={resume} download="SunilResume">
          <FaDownload /> Download Resume
        </a>
      </Col>
    </Container>
  );
}

export default Skills;

