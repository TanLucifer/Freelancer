import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './User/UserLayout';
import Home from './User/pages/Home/Home';
import ProfilePage from './User/pages/Profile/Profile';
import Subscription from './User/pages/Subscription/Subscription';
import Auth from './User/pages/Auth/Auth';
import FAQ from './User/pages/FAQ/FAQ';
import Messenger from './User/pages/Messenger/Messenger';
import UserDashboard from './User/pages/UserDashboard/UserDashboard';
import Pop from './User/components/AfterSignup/Popups';
const App = () => {
  return (
    <>
      <Router>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} /> 
          <Route path='profile' element={<ProfilePage />} /> 
          <Route path='subscription' element={<Subscription />} /> 
          <Route path='auth' element={<Auth/>} /> 
          <Route path='faq' element={<FAQ/>} /> 
          <Route path='messages' element={<Messenger/>} /> 
          <Route path='userDashboard' element={<UserDashboard/>} /> 
          <Route path='pop' element={<Pop/>} /> 
          
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
