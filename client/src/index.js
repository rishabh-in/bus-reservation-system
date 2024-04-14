import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import reportWebVitals from './utils/reportWebVitals';
import { RouterProvider} from 'react-router-dom'
import appRouter from './utils/appRouter';
import {Provider} from 'react-redux'
import appStore from './redux/store';

const Application = () => {
  return(
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Application />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
