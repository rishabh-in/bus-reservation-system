import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ResetPassword = (props) => {
  const [email, setEmail] = useState();
  const {setShowForm, handleAuthOperation} = props;

  const handleResetPassword = () => {
    handleAuthOperation('resetPassword', {
      email
    })
  }

  return (
    <div className='w-[30rem] h-[43rem] rounded-3xl bg-[#FDF5F9] shadow-2xl hover:scale-[1.01] duration-200 ease-linear'>
      <div className='flex flex-col w-full justify-center items-center'>
        <div className='flex w-[85%] justify-center items-center mt-5'>
          <div className='flex w-full justify-between items-center p-4'>
            <div className='text-2xl font-mono font-extrabold'>Yatra<span className='text-red-600'>.</span>com</div>
            <div>
              <Link onClick={() => setShowForm("signup")} className='flex flex-col items-end text-lg text-blue-600'>
                <h1>No Account?</h1>
                <h2 className='font-bold'>Sign up</h2>
              </Link>
            </div>
          </div>
        </div>
        <div className='w-[85%] p-3 mt-5'>
          <h1 className='text-3xl font-extrabold'>Reset your password</h1>
        </div>
        <div className='w-[85%] p-3 mt-14'>
          <div className='flex flex-col p-2 items-start'>
            <h2 className='font-mono my-3 text-[#7C7E7D]'>Email Address</h2>
            <input className='w-full outline-none p-3 rounded-xl focus:outline-blue-600' type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button className='w-[50%] font-mono mt-8 p-4 rounded-xl font-bold bg-black text-white' onClick={handleResetPassword}>Reset Password</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword