import React, { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import ResetPassword from '../components/ResetPassword';
import { useLoginMutation } from '../redux/api/authApi';
import {notification} from 'antd';

const Landing = () => {
  const [showForm, setShowForm] = useState('login');
  const [login, {isLoading, data, error}] = useLoginMutation();
  const [api, contextHolder] = notification.useNotification();

  const handleLogin = async(data) => {
    try {
      await login({email: "rishabh"});
    } catch (error) {
      console.log(error)
    }
  }

  const handleAuthOperation = async(operation, data) => {
    switch(operation) {
      case "signin":
        handleLogin(data)
        break;
      
      case 'signup':
        console.log(data);
        break;
      
      case 'resetPassword':
        console.log(data);
        break;
      
      default: 
        console.log(data);
        return
    }

  }
  if(error && error?.status) {
    api.error({
      message: "Login Failed",
      description: error.data.error,
      placement: "top",
      duration: 3
    })
  }
  return (
    <div className='w-full h-[100vh] flex justify-center items-end bg-[#AA89F2]'>
      {contextHolder}
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
  )
}

export default Landing