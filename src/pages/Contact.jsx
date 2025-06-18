import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Contact() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
        <p className="mb-4">Have questions? Reach out to our team!</p>
        {/* Contact form */}
      </main>
      <Footer />
    </>
  );
}
