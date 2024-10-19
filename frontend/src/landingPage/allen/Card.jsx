import React from 'react';

function Card(props) {
    return ( 
        <>
        <div className='container card'>

          <div className='row'>
            <div className='col-6' style={{paddingTop:'20px',paddingLeft:'25px'}}>
                    <h5>
                       {props.hader}
                    </h5>

                    <br /><br />

                    <p>
                       {props.cont}
                    </p>
                </div>

                <div className='col-6'>
                    <img style={{width:'120%',paddingTop:'100px'}} src={props.url} alt={props.url} />
                </div>
          </div>
            

        </div>
        </>
     );
}

export default Card;