import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function MyVideos() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">My Videos</h1>
        <p className="mb-4">All your uploaded and processed videos will appear here.</p>
        {/* List user's videos */}
      </main>
      <Footer />
    </>
  );
}
