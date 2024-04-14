import { useLoginMutation, useSignupMutation } from "../redux/api/authApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/slice/authSlice";
const useAuthentication = () => {
  const [login, loginResponse] = useLoginMutation();
  const [signup, signupResponse] = useSignupMutation();
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleLogin = async(data, showNotification) => {
    try {
      const res = await login(data);
      if(res?.data?.user) {
        dispatch(setAuthUser(res.data.user))
        showNotification('success', 'Logged in Successfully')
        navigate('/home')
      }
      if(res?.error) {
        showNotification('error', 'Login Failed', res.error.data.error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSignup = async(data, showNotification, setShowForm) => {
    try {
      const res = await signup(data)
      if(res?.data?.user) {
        showNotification('success', 'Sign up Successfull')
        setShowForm("login")
      }
      if(res && res?.error) {
        showNotification('error', 'Login Failed', res.error.data.error)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return {handleLogin, handleSignup, loginResponse, signupResponse}
}

export default useAuthentication;