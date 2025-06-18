import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function PaymentFailure() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Payment Failed</h1>
        <p className="mb-4">There was an issue processing your payment. Please try again.</p>
      </main>
      <Footer />
    </>
  );
}
