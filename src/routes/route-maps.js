import React from 'react';
const Login = React.lazy(() => import('../pages/Login/Login'));
// const ForgotPassword = React.lazy(() => import('../../screens/ForgotPassword'));
// const Dashboard = React.lazy(() => import('../../screens/Dashboard'));

export const routeHashMap = new Map();
const routeFactory = (path, component, options) => {
  const nextRoute = { path: '', component, options };
  if (path) {
    nextRoute.path = path;
  }
  routeHashMap.set(path, nextRoute);
  return nextRoute;
};

export const routeMaps = [
  routeFactory('/login', Login, { title: 'Login' }),
  // routeFactory('/forgot-password', ForgotPassword, {
  //   title: 'Forgot Password',
  // }),
  // routeFactory('/dashboard', Dashboard, { title: 'Dashboard' }),
];
