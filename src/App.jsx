import Courses from './components/Courses';
import FeatureSection from './components/FeatureSection';
import Herosection from './components/Herosection';
import Navbar from './components/Navbar';
import React from 'react'
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Footerbottom from './components/Footerbottom';


const App = () =>{
  return(
    <>
       <Navbar/>
       <div className="max-w-7xl mx-auto pt-20 px-6">
         <Herosection/>
         <FeatureSection/>
         <Courses/>
         <Testimonials/>
         <Footer/>
         <Footerbottom/>
        
       </div>
      

    </>
    
  );
};

export default App






