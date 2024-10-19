import { div, h1 } from 'framer-motion/client';
import React from 'react';
import Card from '../allen/Card'
function Programs() {
    return ( 
           
        <div className="container p-5">
                <div className='row'>
                    <div className='col-7'>
                        <h3><b>Online Programs</b></h3>
                        <br /><br />
                        <p style={{lineHeight:'2'}}>To get the full ALLEN Learning Experience explore the Ultimate Series of Programs for JEE,  
                            NEET and Olympiads. The Ultimate Programs are Allen Recommended. They provide a fully structured  
 
                             curriculum with a week-by-week plan and foster meaningful teacher-student interaction. These programs offer  
                             a personalized study experience, guiding you throughout your journey on where to concentrate your efforts.</p>
                    </div>
                    <div className='col-5 '>
                        <img style={{width:'60%'}} src="/media/pro.webp" alt="neet imga" />
                    </div>
                </div>
                <br /><br />
                <h1>Discover the perfect online program</h1>
                <div className='card-Allen'>
              
                    <Card hader="for 11 th" cont="1 year program" url="/media/neet1.webp"/>
                    <Card hader="for 12 th" cont="1 year program" url="/media/jee1.webp"/>
                    <Card hader="for 6-10 th" cont="1 year program" url="/media/6-10.webp"/>
                </div>

                <div className='container pt-5'>
                    <h1>What's Special</h1>
                     <div className='personalization-section'>
                            <div>
                            <img style={{width:'250px'}}  src="/media/p-1.webp" alt="" />
                            <section>Daily Live Interactive Classes</section>
                            </div>
                           <div>
                           <img  style={{width:'250px'}}  src="/media/p-2.webp" alt="" />
                           <section>Personalised Study Tools</section>
                           </div>
                           <div>
                           <img  style={{width:'250px'}}  src="/media/p-3.webp" alt="" />
                           <section>Personalised Study Tools</section>
                           </div>
                            <div>
                            <img style={{width:'250px'}}  src="/media/p-4.webp" alt="" />
                            <section>Score Improvement Strategy</section>
                            </div>
                            
                     </div>

 
                </div>
        </div>
     );
}

export default Programs;