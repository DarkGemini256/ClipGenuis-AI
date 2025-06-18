import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Dashboard() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <p className="mb-4">Welcome to your dashboard. Upload and manage your videos here.</p>
        {/* Upload, list videos, and actions will go here */}
      </main>
      <Footer />
    </>
  );
}
