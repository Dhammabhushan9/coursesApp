import React from 'react';
import Signin from './Signin';
import Signup from './Signup';

function Home() {
    return (  <>
    <form method='post' action="">
    <div className='container mt-5 pt-5'>
        <div className='row'>

            <div className='col-8 mt-5  '>
                <img style={{ width: '100%' }} src="/media/HOME-PAGE.jpg" alt="img" />
            </div>

            <div className='col-4 mt-5 p-5'  style={{ backgroundColor: 'lightblue'   }}>
                <br /><br /><br />
              <center>
              <h1 style={{color: 'white', fontWeight:'800'  }}
              >ONLINE</h1>
              <h1 style={{ color: 'white',  fontWeight:'800' }}
              >COURSES</h1>
              <br/>
              <br />
              <h2  style={{    fontWeight:'350' } }>SUBSCRIBE NOW</h2>
              <br />    </center>
              <p> Unlock the skills you need now with exclusive, limited-time access to top-rated courses. Time is running out to transform your future—get certified by industry experts and start learning today before it’s too late!</p>
              <br />
              <br /> <center>
              <button className='btn btn-primary ' style={{width:'100px'}}>SignUp </button> &nbsp; &nbsp; &nbsp; &nbsp;
              <button className='btn btn-danger ' style={{width:'100px'}}>Signin</button>
              </center>
            </div>
        </div>

    </div>
    </form>
    </>);
}

export default Home;