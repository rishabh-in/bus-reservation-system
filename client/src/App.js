import { Fragment, useEffect } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuthCheckQuery } from "./redux/api/authApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setAuthUser } from './redux/slice/authSlice';

function App() {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const authToken = localStorage.getItem("authToken");
  const {data, isLoading, error} = useAuthCheckQuery(authToken);

  useEffect(() => {
    if(data && data?.user) {
      dispatch(setAuthUser(data.user));
      navigate("/home")
    }
  }, [data]);

  console.log("App rendered", data, isLoading)

  if (isLoading) return <div>Loading...</div>;

  return (
    <Fragment>
      {data?.user && data.user?.email && <Header /> }
      <Outlet />
    </Fragment>
  );
}

export default App;
