import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function PaymentSuccess() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Payment Successful!</h1>
        <p className="mb-4">Thank you for your purchase. Your account has been upgraded.</p>
      </main>
      <Footer />
    </>
  );
}
