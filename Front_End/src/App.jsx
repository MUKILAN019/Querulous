import { useState } from 'react';
import Splash_Page from './Components/Splash_Page';
import {Routes,Route} from "react-router-dom";
import LandingPage from './Components/LandingPage';
import SignUp from './Components/SignUp';
function App() {

  return (
    <>
    
       <Routes>
           <Route path="/" element={<Splash_Page/>}/>
           <Route path="/landingPage" element={<LandingPage/>}/>
           <Route path="/SignUp" element={<SignUp/>}/>
       </Routes>
   
    </>
  );
}

export default App;
