import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Views/Home/Home';
import {createBrowserRouter,RouterProvider} from "react-router-dom";


const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>
  },
  {
    path:'/news',
    element:<h1>News</h1>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router}></RouterProvider>
);


