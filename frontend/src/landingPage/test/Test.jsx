 
import React from 'react';
import Card from '../allen/Card';
function Test() {
    return ( 
        <div className='container'>
            <h4>Packages for NEET Online Test Series</h4>
             <div className='card-Allen'>
                    <Card hader="for 11 th" cont="1 year program" url="/media/neet1.webp"/>
                    <Card hader="for 12 th" cont="1 year program" url="/media/jee1.webp"/>
                    <Card hader="for 6-10 th" cont="1 year program" url="/media/6-10.webp"/>
                </div>
                <br /><br />
                <h4>Packages for JEE (Mains + Advanced) Online Test Series</h4>
                <div className='card-Allen'>
                    <Card hader="for 11 th" cont="1 year program" url="/media/neet1.webp"/>
                    <Card hader="for 12 th" cont="1 year program" url="/media/jee1.webp"/>
                    <Card hader="for 6-10 th" cont="1 year program" url="/media/6-10.webp"/>
                </div>
                <br /><br />

                <h4>Packages for JEE Mains Online Test Series
                </h4>
                <div className='card-Allen'>
                    <Card hader="for 11 th" cont="1 year program" url="/media/neet1.webp"/>
                    <Card hader="for 12 th" cont="1 year program" url="/media/jee1.webp"/>
                    <Card hader="for 6-10 th" cont="1 year program" url="/media/6-10.webp"/>
                </div>
        </div>
     );
}

export default Test;