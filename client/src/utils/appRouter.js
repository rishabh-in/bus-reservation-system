import {createBrowserRouter} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Landing from '../pages/Landing';
import App from '../App';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />
      },
      {
        path: "/home",
        element: <Homepage />
      }
    ]
  },
])

export default appRouter