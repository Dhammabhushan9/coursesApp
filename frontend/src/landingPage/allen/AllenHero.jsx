 
import React from 'react';
import Card from './Card';
import './allen.css'

function Allen() {
    return ( <div className='Allen-main'>

            <div>
                <img style={{width:'95%'}} src="/media/hero1.webp" alt="" />
            </div>

            <div className='Allen-hero'>

                <div>
                    <h2>Your Dream. <br></br>
                    Our Expertise.</h2>

                    <br /><br />
                    <p>What brings you to us today?</p>

                    <button className='btn btn-my-hero'>Jee</button>
                    <button className='btn btn-my-hero'>Neet</button>
                    <button className='btn btn-my-hero'>Grade 6-10</button>
                </div>

                <div >
                    <img style={{width:'55%'  }} src="/media/learning-journey.webp" alt="" />
                </div>
                     


            </div>

                <br /> <br />
                    <div>
                    <img style={{width:'90%'}} src="/media/jee-neet.webp" alt="" />
                </div>


                <div className='Padding'>
                    <center>
                    <h1>
                    Our remarkable results in 2024
                    </h1>
                    </center>
                </div>


                <div className='card-Allen'>
                    <Card hader="for 11 th" cont="1 year program" url="/media/neet1.webp"/>
                    <Card hader="for 12 th" cont="1 year program" url="/media/jee1.webp"/>
                    <Card hader="for 6-10 th" cont="1 year program" url="/media/6-10.webp"/>
                </div>

                <br /><br /><br />
    </div>
     );
}

export default Allen;