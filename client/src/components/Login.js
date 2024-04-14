import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);

  const {setShowForm, handleAuthOperation} = props;

  const handleSignin = () => {
    handleAuthOperation('signin', {
      email,
      password,
      check
    }) 
  }
  return (
    <div className='w-[30rem] h-[43rem] rounded-3xl bg-[#FDF5F9] shadow-2xl hover:scale-[1.01] duration-200 ease-linear'>
      <div className='flex flex-col w-full justify-center items-center'>
        <div className='flex w-[85%] justify-center items-center mt-5'>
          <div className='flex w-full justify-between items-center p-4'>
            <div className='text-2xl font-mono font-extrabold'>Yatra<span className='text-red-600'>.</span>com</div>
            <div>
              <Link onClick={() => setShowForm('signup')} className='flex flex-col items-end text-lg text-blue-600'>
                <h1>No Account?</h1>
                <h2 className='font-bold'>Sign up</h2>
              </Link>
            </div>
          </div>
        </div>
        <div className='w-[85%] p-3'>
          <h1 className='text-6xl font-extrabold'>Sign in</h1>
        </div>
        <div className='w-[85%] mt-8'>
          <Link className='flex justify-center w-full'>
            <div className='flex rounded-xl justify-center p-3 bg-blue-600 text-white w-[80%] hover:bg-opacity-85 duration-100 ease-in-out'>
              <img className='w-7 h-7 mr-4' alt='google logo' src='https://www.svgrepo.com/show/327365/logo-google.svg' /> 
              <h1 className='text-lg text-center'>Sign in with Google</h1>
            </div>
          </Link>
        </div>
        <div className='w-[85%] p-3 mt-14'>
          <div className='flex flex-col p-2 items-start'>
            <h2 className='font-mono my-3 text-[#7C7E7D]'>Email Address</h2>
            <input className='w-full outline-none p-3 rounded-xl focus:outline-blue-600' value={email} type='text' onChange={(e) => setEmail(e.target.value)}/>
            <div className='w-full flex justify-between'>
              <h2 className='font-mono my-3 text-[#7C7E7D]'>Password</h2>
              <Link onClick={() => setShowForm('resetPassword')}><h2 className='font-mono my-3 text-blue-600'>Forgot Password?</h2></Link>
            </div>
            <input className='w-full outline-none p-3 rounded-xl focus:outline-blue-600' value={password} type='password' onChange={(e) => setPassword(e.target.value)}/>
            <label className='flex mt-3 font-mono items-center'>
              <input className='mr-3 h-4 w-4' type='checkbox' checked={check} onChange={() => setCheck(!check)}/>
              Log in as travel agency
            </label>
            <button className='w-[42%] font-mono mt-4 p-4 rounded-xl font-bold bg-black text-white' onClick={handleSignin}>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login