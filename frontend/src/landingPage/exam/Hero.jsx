import React from 'react';
import Card from '../allen/Card'
function Hero() {
    return ( <>
    
    <div className='conatiner basic'>
        <div className='row'>
            <div className="col-8">
                <h1 style={{fontWeight:'bold'}}>JEE Online Coaching</h1>
                <br /><br />

                <p style={{lineHeight:'2'}}>Our JEE coaching programs are expertly designed to navigate the complexity of <br />
                    JEE concepts. The program balances its focus on both in-depth understanding andbr
                        <br />
                     challenging problem-solving, empowering you with confidence to ace the JEE Main and Advanced exams.</p>
            </div>

            <div className='col-4'>
                <img src="/media/jee1.webp" alt="" />
            </div>
        </div>

        <div className='card-Allen'>
                    <Card hader="for 11 th" cont="1 year program" url="/media/neet1.webp"/>
                    <Card hader="for 12 th" cont="1 year program" url="/media/jee1.webp"/>
                    <Card hader="for 6-10 th" cont="1 year program" url="/media/6-10.webp"/>
                </div>
    </div>
    
    </> );
}

export default Hero;