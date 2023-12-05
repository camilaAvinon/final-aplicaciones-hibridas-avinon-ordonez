import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import View_login from './views/View_login.jsx'
import View_signup from './views/View_signup.jsx'
import View_posts_create from './views/View_posts_create.jsx'
import View_posts_update from './views/View_posts_update.jsx'
import View_posts_delete from './views/View_posts_delete.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { UserProvider } from './components/UserContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <View_login />,
  },
  {
    path: '/signup',
    element: <View_signup/>
  },
  {
    path: '/create_post',
    element: <View_posts_create/>
  },
  {
    path: '/update_post',
    element: <View_posts_update/>
  },
  {
    path: '/delete_post/:id',
    element: <View_posts_delete/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
