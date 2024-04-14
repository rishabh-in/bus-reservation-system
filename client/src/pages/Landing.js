import React, { Fragment, useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import ResetPassword from '../components/ResetPassword';
import {notification} from 'antd';
import useAuthentication from '../api/useAuthentication';

const Landing = () => {
  const [showForm, setShowForm] = useState('login');
  const [api, contextHolder] = notification.useNotification();
  const {handleLogin, handleSignup, loginResponse, signupResponse} = useAuthentication();

  const showNotification = (type, message, description = "", placement = "top", duration = 3) => {
    api[type]({
      message,
      description,
      placement,
      duration
    })
  }

  const handleAuthOperation = async(operation, data) => {
    switch(operation) {
      case "login":
        await handleLogin(data, showNotification);
        break;
      
      case 'signup':
        await handleSignup(data, showNotification, setShowForm);
        break;
      
      case 'resetPassword':
        console.log(data);
        break;
      
      default: 
        console.log(data);
        return
    }

  }
  console.log("login response", loginResponse.isLoading)
  return (
    <Fragment>
      {contextHolder}
      <div className='w-full h-[100vh] flex justify-center items-end bg-[#AA89F2]'>
        <div className='w-[90%] h-[90%] bg-landing-bg bg-cover rounded-t-[5rem] flex'>
          <div className='w-1/2 flex justify-center items-center'>
            {showForm === 'login' && (
              <Login setShowForm={setShowForm} handleAuthOperation={handleAuthOperation}/>
            )} 
            {showForm === 'signup' && (
              <Signup setShowForm={setShowForm} handleAuthOperation={handleAuthOperation}/>
            )}
            {showForm === 'resetPassword' && (
              <ResetPassword setShowForm={setShowForm} handleAuthOperation={handleAuthOperation}/>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Landing