import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { FaAddressCard, FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import { FaMapLocation, FaPhone, FaTwitter } from 'react-icons/fa6';
import { motion } from "framer-motion";
import "animate.css";
import { IoLocation, IoMail, IoMailOpen } from 'react-icons/io5';



const Footer = () => {
  return (
   
   
     <Container fluid className='footer_container'>
   
        <Row className='footer_info'>
        <Col className='col-2'></Col> 
            <Col className='address_column'>
            <Col className='unorder_contact' style={{listStyle:"none",paddingTop:"35px"}}>
            <Col className='mt'><span style={{color:"red"}}><IoLocation/></span> : Suddhodan Gaupalika Word-03,Charpata</Col>
           <Col className='mt'><span style={{color:"blue"}}><IoMail/></span> : sunilpangeni3570@gmail.com</Col>
           <Col className='mt'><span style={{color:"green"}}><FaPhone/></span> : 9779865451246</Col>
           </Col>
           </Col>
           <Col  className=' mt-5 address_column'>
           {/* <motion.div
         whileHover={{ scale: 1.2}}

         transition={{stiffness:"300",type:"spring"}}
         > */}
         {/* <Col className='social_col animate__animated animate__bounce animate__infinite animate_slow'><a className='anchor_footer' target='_blank'  */}
         <Col className='facebook_col'><a className='anchor_footer' target='_blank' 
         href='https://www.facebook.com/sunil.pangeni.33/'><FaFacebook/></a></Col>
        {/* </motion.div> */}
        <Col className='twitter_col'><a className='anchor_footer' target='_blank' 
        href='https://x.com/sunilsharma3570/'><FaTwitter/></a></Col>
          <Col className='instagram_col'><a className='anchor_footer' target='_blank' 
          href='https://t.me/sunilpangeni'><FaInstagram/></a></Col>
         
           </Col>
          
           <Col className='col-2'></Col>
           </Row>
           </Container>   
  )
}

export default Footer;

