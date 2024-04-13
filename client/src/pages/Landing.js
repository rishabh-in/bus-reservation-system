import React, { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import ResetPassword from '../components/ResetPassword';

const Landing = () => {
  const [showForm, setShowForm] = useState('login');

  const handleAuthOepration = (operation, data) => {
    if(operation === "login") {
      // perform api call
      return
    }
    if(operation === 'signup') {
      // perform api call
      return;
    }
    if(operation === 'forgotPassword') {
      // perform api call
      return;
    }

  }
  return (
    <div className='w-full h-[100vh] flex justify-center items-end bg-[#AA89F2]'>
      <div className='w-[90%] h-[90%] bg-landing-bg bg-cover rounded-t-[5rem] flex'>
          <div className='w-1/2 flex justify-center items-center'>
            {showForm === 'login' && (
              <Login setShowForm={setShowForm} handleAuthOepration={handleAuthOepration}/>
            )} 
             {showForm === 'signup' && (
              <Signup setShowForm={setShowForm} handleAuthOepration={handleAuthOepration}/>
            )}
            {showForm === 'resetPassword' && (
              <ResetPassword setShowForm={setShowForm} handleAuthOepration={handleAuthOepration}/>
            )}
          </div>
      </div>
    </div>
  )
}

export default Landing