import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function LoginSignup() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Login / Signup</h1>
        <p className="mb-4">Access your account or create a new one.</p>
        {/* Login/Signup forms */}
      </main>
      <Footer />
    </>
  );
}
