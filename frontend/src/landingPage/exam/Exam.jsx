import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { div, image } from 'framer-motion/client';
import "../../App.css"; 
const img = [
  { src: "/media/exam-1.webp" },
  { src: "/media/exam-2.webp" },
  { src: "/media/exam-3.webp" },
  { src: "/media/exam-4.webp" }
];

function Exam() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (


      
        <center>
          <br /><br />
        <div  style={{paddingLeft:'350px',paddingRight:'350px', marginLeft:'100px' }}>
        <Slider {...settings}>
      
         {img.map((image)=>{
            return <div  >
                <img src={image.src} style={{width:'60%'}} alt={image.src} />
            </div>
         })}
       
           
        </Slider></div>
        </center>
        
      );
    }

export default Exam;
