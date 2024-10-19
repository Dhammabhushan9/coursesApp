
import './App.css'
 
import Nav from './landingPage/Nav'
import Allen from './landingPage/allen/AllenHero'
import Examcopm from './landingPage/exam/Examcomp'
import Programs from './landingPage/programs/Programs'
 
import Footer from './landingPage/Footer'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App2() {
  
  return  <div >

  <BrowserRouter>
  <Nav/>
    <Routes>
        <Route path="/" element={<Allen/>} />
        <Route path="/exam" element={<Examcopm/>}/>
        <Route path="/programs" element={<Programs/>} />
    </Routes>
  </BrowserRouter>
<Footer/>
  </div>
  
    
}

 

 

export default App2
