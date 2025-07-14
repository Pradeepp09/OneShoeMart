import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ShoeDetailForm from './component/ShoeDetailForm';
import ShoeList from './component/ShoeList';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import UserLogin from './component/pages/userLogin';
import UserSignup from './component/pages/userSignup';
import StoreLogin from './component/pages/storeLogin';
import StoreSignup from './component/pages/storeSignup';
import StoreDashboard from './component/pages/storeDashboard';
export default function AppRoutes() {

  return (
    <>
      <Header />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addShoe" element={<ShoeDetailForm />} />
            <Route path="/products" element={<ShoeList/>} />
            <Route path="/user/login" element={<UserLogin/>} />
            <Route path="/user/signup" element={<UserSignup />} />
            <Route path="/store/login" element={<StoreLogin />} />
            <Route path="/store/signup" element={<StoreSignup />} />
            <Route path="/store/dashboard" element={<StoreDashboard/>}/>
      </Routes>
      <Footer />
    </>
  );
}
