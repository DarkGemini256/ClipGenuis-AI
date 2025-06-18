import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function NotFound404() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-4xl font-bold mb-6">404 - Page Not Found</h1>
        <p className="mb-4">Sorry, the page you're looking for does not exist.</p>
        <a href="/" className="text-indigo-600 underline">Go back home</a>
      </main>
      <Footer />
    </>
  );
}
