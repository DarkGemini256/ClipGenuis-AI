import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";
import MyVideos from "./pages/MyVideos";
import LoginSignup from "./pages/LoginSignup";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailure from "./pages/PaymentFailure";
import NotFound404 from "./pages/NotFound404";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/my-videos" element={<MyVideos />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failure" element={<PaymentFailure />} />
        
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}
