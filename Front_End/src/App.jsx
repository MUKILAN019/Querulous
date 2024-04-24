import { useState } from 'react';
import Splash_Page from './Components/Splash_Page';
import {Routes,Route} from "react-router-dom";
import LandingPage from './Components/LandingPage';
import SignUp from './Components/SignUp';
import OTP from './Components/OTP';
import HomePage from './Components/Home';
import Profile from './Components/Profile';
import ChoicePage from './Components/Choice';
function App() {

  return (
    <>
    
       <Routes>
           <Route path="/" element={<Splash_Page/>}/>
           <Route path="/landingPage" element={<LandingPage/>}/>
           <Route path="/SignUp" element={<SignUp/>}/>
           <Route path="/OTP" element={<OTP/>}/>
           <Route path="/home" element={<HomePage/>}/>
           <Route path="/profile" element={<Profile/>}/>
           <Route path="/choice" element={<ChoicePage/>}/>
       </Routes>
   
    </>
  );
}

export default App;
