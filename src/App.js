import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
// import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
// import { AnimatePresence } from 'framer-motion';
import Footer from './Pages/Footer';
import Error from './Pages/Error';
import { AnimatePresence } from 'framer-motion';
import Projects from './Pages/Projects';
import Hydropower from './Pages/Project_files/Hydropower';
import Trailor_App from './Pages/Project_files/Trailor_App';
import Weather from './Pages/Project_files/Weather';
import Paint from './Pages/Project_files/Paint';
import Travel from './Pages/Project_files/Travel';
import India_Tourisum from './Pages/Project_files/India_Tourisum';

function App() {
  return (
    <>
    <BrowserRouter>
   <AnimatePresence>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/hydropower" element={<Hydropower />} />
          <Route path="/trailor" element={<Trailor_App />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/paint" element={<Paint />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/india_tour" element={<India_Tourisum/>} />
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </AnimatePresence>
    </BrowserRouter>
    
    </>
  
  );
}

export default App;
