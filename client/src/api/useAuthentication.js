import { useLoginMutation, useSignupMutation } from "../redux/api/authApi";

const useAuthentication = () => {
  const [login, loginResponse] = useLoginMutation();
  const [signup, signupResponse] = useSignupMutation();

  const handleLogin = async(data, showNotification) => {
    try {
      const res = await login(data);
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