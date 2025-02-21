// import logo from './logo.svg';
// import './App.css';
// import Layout from './Pages/Layout';
// import Home from './Pages/Home';
// import { BrowserRouter, Link, Outlet, Router, Routes } from 'react-router';
// import { Route } from 'react-router';
// import About from './Pages/About';
// import Projects from './Pages/Projects';
// import Skills from './Pages/Skills';
// import Contact from './Pages/Contact';


// function App() {
//   return (
//     <>
//     {/* <Layout/> */}
//  <BrowserRouter>
  
//  <Routes>
//   <Route path='/' element={<Layout/>}>
//   <Route index element={<Home/>}/>
//   <Route path='/about' element={<About/>}/>
//   <Route path='/project' element={<Projects/>}/>
//   <Route path='/skill' element={<Skills/>}/>
//   <Route path='/contact' element={<Contact/>}/>
//   <Route path="*" element={<h2 style={{textAlign:"center"}}>Page Not Found</h2>} />

//   </Route>
//  </Routes>
//  </BrowserRouter>
 
 
//  </>

//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import { AnimatePresence } from 'framer-motion';
import Footer from './Pages/Footer';
import Error from './Pages/Error';

function App() {
  return (
    <>
    <BrowserRouter>
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home/>}/>
          <Route path="about" element={<About />} />
          {/* <Route path="project" element={<Projects />} /> */}
          <Route path="skill" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="footer" element={<Footer />} />
          {/* <Route path="hydro" element={<Hydropower />} /> */}
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </AnimatePresence>
    </BrowserRouter>
    </>
  );
}

export default App;

