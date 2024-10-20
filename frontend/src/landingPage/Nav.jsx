import React from 'react';
import {   Link } from 'react-router-dom';
import './nav.css'
function Nav() {
    return (
       
        <div className='Nav-outer'>
 
            <Link to="/" className='nav-compo' >
                <img style={{width:'15%'}} src="/media/Allen.svg" alt="Allen main image" />
            </Link  >

            <Link  to="/exam" className='nav-compo'>
                <h6>Exams</h6>
            </Link>

            <Link  to="/programs"className='nav-compo' >
                <h6>Programs</h6>
            </Link>

            <Link to='/test'className='nav-compo'>
                <h6>Test</h6>
            </Link>

             
            <div>
                <button className='btn btn-light'>Talk to us</button>
              
                <button className='btn btn-my' style={{color:'white',borderRadius:'10px',border:'1px solid white'}}>Login</button>
            </div>

            
    </div> );
}

export default Nav; 