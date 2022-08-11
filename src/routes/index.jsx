import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Login = React.lazy(() => import('../pages/Login/Login'));
const SignUp = React.lazy(() => import('../pages/SignUp/SignUp'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));

const BeezerRoutes = React.memo(() => {
  return (
    <React.Suspense fallback={<span>Faled</span>}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </React.Suspense>
  );
});

export default BeezerRoutes;
