import React from 'react'
import NavigationBar from '../Component/NavigationBar';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
   <NavigationBar/>

   <Outlet/>
   <Footer/>
  
   

   </>
 
   
  
   
  )
}

export default Layout;
