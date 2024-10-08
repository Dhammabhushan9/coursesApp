import React, { useState } from 'react';

function Signin() {
  return (
    <div className='container' style={{ backgroundColor: 'lightblue' }}>
      <div className='row'>
        <div className='col-8'>
          <img style={{ width: '100%' }} src="/media/signup.jpg" alt="Signup" />
        </div>

        <div className='col-4 mt-5 p-5' >
          <div>
            <label htmlFor="email" className='form-label'>Email</label>
            <input type="text" name='email' className='form-control' required />
            <div className="invalid-feedback">
              Email is required
            </div>
          </div>

          <div>
            <label htmlFor="password" className='form-label'>Password</label>
            <input type="password" name='password' className='form-control' required />
            <div className="invalid-feedback">
              Password is required
            </div>
          </div>

          <div>
            <label htmlFor="firstname" className='form-label'>First Name</label>
            <input type="text" name='firstname' className='form-control' required />
            <div className="invalid-feedback">
              First name is required
            </div>
          </div>

          <div>
            <label htmlFor="lastname" className='form-label'>Last Name</label>
            <input type="text" name='lastname' className='form-control' required />
            <div className="invalid-feedback">
              Last name is required
            </div>
          </div>
                     <br /><br /> 

          <button className='btn btn-primary'>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
