import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './User/UserLayout';
import Home from './User/pages/Home/Home';
import ProfilePage from './User/pages/Profile/Profile';

const App = () => {
  return (
    <>
      <Router>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} /> 
          <Route path='profile' element={<ProfilePage />} /> 
          
        </Route>

        {/* Admin Routes */}
        {/* <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPanel />} />
          <Route path="auth" element={<AdminLogin />} /> 
          <Route path="productform" element={<ProductForm />} />
          <Route path="register" element={<Registration />} />
        </Route> */}

        {/*Farmer Routes*/ }
        {/* <Route path="/farmer" element={<FarmerLayout />}>
          <Route index element={<FarmerDashboard />} />
          <Route path="auth" element={<FarmerAuth/>} /> 
           <Route path="productform" element={<ProductForm />} />
          <Route path="dashboard" element={<FarmerDashboard />} /> 
        </Route> */}

      </Routes>
    </Router>
    </>
  )
}

export default App
