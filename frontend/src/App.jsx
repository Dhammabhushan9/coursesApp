import React, { useState ,useEffect } from 'react';
import Hero from './Home/Hero';
import Signup from './Home/Signup';
import Signin from './Home/Signin';
 

function App() {
    return (
      <>
      <Hero/>
  <br /><br /><br /><br /><br /><br />
      <Signup/>
      <br /><br /><br /><br /><br /><br />
      <Signin/>
      </>
    );
}


 

export default App;
