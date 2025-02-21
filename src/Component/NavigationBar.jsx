import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavigationBar.css";
import { color, motion, useAnimation } from 'framer-motion';




const NavigationBar = () => {
  const [scrolling, setScrolling] = useState(false);
     const controls = useAnimation();
    
     useEffect(() => {
       const handleScroll = () => {
       if (window.scrollY >50) {
          setScrolling(true);
         } else {
           setScrolling(false);
         }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    
    <motion.nav   key="navbar-animation" // Forces re-render

      initial={{ opacity: 0, y: 50}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 , ease: "easeOut" }}
    >
      <motion.div   key="navbar-animation" // Forces re-render

        animate={{
          backgroundColor: scrolling ? "rgb(239, 237, 237)":"white",
          boxShadow: scrolling ? "0px 4px 10px   rgba(0,0,0,0.8)" : "none",
        }}
        transition={{ duration: 0.5 }}
       style={{ position: "fixed", width: "100%", zIndex: 1000,color:"white" }}
     >
      <Navbar  expand="lg" className="navigation" style={{}}>
    <Container className='conatiner_navigation'>
      <Navbar.Brand className='brand' href="/">Sunil Pangeni</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav  className="ms-auto navbar navbar-default">
        <motion.div   key="navbar-animation" // Forces re-render
 whileHover={{ scale: 1.5, color: "#FFD700" }} transition={{ type: "spring", stiffness: 300 }}>
                
          <Nav.Link href="/home" spy={true} smooth={true}   offset={50} duration={500}>Home</Nav.Link>
          </motion.div>
          <motion.div   key="navbar-animation" // Forces re-render
 whileHover={{ scale: 1.5, color: "#FFD700" }} transition={{ type: "spring", stiffness: 300 }}>
                
                <Nav.Link href="/about" spy={true} smooth={true}   offset={50} duration={500}>About</Nav.Link>
                </motion.div>
                <motion.div   key="navbar-animation" // Forces re-render
 whileHover={{ scale: 1.5, color: "#FFD700" }} transition={{ type: "spring", stiffness: 300 }}>
                
                <Nav.Link href="/project" spy={true} smooth={true}   offset={50} duration={500}>Projects</Nav.Link>
                </motion.div>
                <motion.div   key="navbar-animation" // Forces re-render
 whileHover={{ scale: 1.5, color: "#FFD700" }} transition={{ type: "spring", stiffness: 300 }}>
                
                <Nav.Link href="/skill" spy={true} smooth={true}   offset={50} duration={500}>Skills</Nav.Link>
                </motion.div>
                <motion.div   key="navbar-animation" // Forces re-render
 whileHover={{ scale: 1.5, color: "black" }} transition={{ type: "spring", stiffness: 300 }}>
                
                <Nav.Link href="/contact" spy={true} smooth={true}   offset={50} duration={500}>Contact</Nav.Link>
                </motion.div>
         
                  
       
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></motion.div></motion.nav>
  )
}

export default NavigationBar;







