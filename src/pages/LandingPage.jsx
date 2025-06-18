import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeatureCard from "../components/FeatureCard";
export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Effortless AI-Powered Video Editing</h1>
          <p className="text-lg mb-6">ClipGenius AI helps you clip, edit, and share your videos in seconds using smart automation.</p>
          <a href="/dashboard" className="bg-indigo-600 text-white px-6 py-3 rounded font-semibold">Get Started</a>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          <FeatureCard
            title="Auto Clipping"
            description="Let AI find the best moments in your videos."
            icon="✂️"
          />
          <FeatureCard
            title="Fast Editing"
            description="Edit and publish videos with a single click."
            icon="⚡"
          />
          <FeatureCard
            title="Share Anywhere"
            description="Export your clips for any social platform."
            icon="📤"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
