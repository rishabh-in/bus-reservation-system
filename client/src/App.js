import { Fragment } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import {useSelector} from 'react-redux';

function App() {
  const user = useSelector((store) => store.auth.user);
  console.log(user)
  return (
    <Fragment>
      {user && user?.email && (<Header />)}
      <Outlet />
    </Fragment>
  );
}

export default App;
