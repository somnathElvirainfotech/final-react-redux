import React from 'react';
import {createBrowserRouter, useRouteError} from 'react-router-dom';

import {AdminRequireAuth, UserRequireAuth, WithOutAuth} from './MiddleWare';
import NotFound from './NotFound';


import Header from '../components/Header';
import Counter from '../components/Counter';
import UserProfile from '../components/UserProfile';
import Login from '../components/Login';

import AdminHeader from '../components/Admin/Header';
import Dashboard from '../components/Admin/Dashboard'
import UserList from '../components/Admin/UserList';
import AdminLogin from '../components/Admin/Login';

function ErrorBoundary () {
  let error = useRouteError ();
  console.error (error);
  // Uncaught ReferenceError: path is not defined
  return <>
    <center>
      <h1>Error!</h1>
      <br/><br/><br/>
      <p>
      {error}
      </p>
    </center>
  </>;
}

const UserRouter = createBrowserRouter ([
  // ============== user path ============== //
  {
    path: '/',
    element: <Header />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <WithOutAuth><Login /></WithOutAuth>,
        errorElement: <ErrorBoundary />,
      },
      {
        path: 'counter',
        element: <UserRequireAuth><Counter /></UserRequireAuth>,
        errorElement: <ErrorBoundary />,
      },
      {
        path: 'profile',
        element: <UserRequireAuth><UserProfile /></UserRequireAuth>,
        errorElement: <ErrorBoundary />,
      },
    ],
  },

   // ============== admin path =============== //
  {
    path: '/admin',
    element: <AdminHeader />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <AdminRequireAuth><Dashboard /></AdminRequireAuth>,
        errorElement: <ErrorBoundary />,
      },
      {
        path: 'userlist',
        element: <AdminRequireAuth><UserList /></AdminRequireAuth>,
        errorElement: <ErrorBoundary />,
      },
      {
        path: 'login',
        element: <WithOutAuth><AdminLogin /></WithOutAuth>,
        errorElement: <ErrorBoundary />,
      },
    ],
  },

  // ========== not fount page ========== //
  {
    path: '*',
    element: <NotFound />,
    errorElement: <ErrorBoundary />,
  }
]);

export default UserRouter;
