import React from "react";
export default function Header() {
  return (
    <header className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="font-bold text-2xl">ClipGenius AI</span>
        <nav>
          <a href="/" className="mx-2 hover:underline">Home</a>
          <a href="/dashboard" className="mx-2 hover:underline">Dashboard</a>
          <a href="/pricing" className="mx-2 hover:underline">Pricing</a>
          <a href="/blog" className="mx-2 hover:underline">Blog</a>
          <a href="/contact" className="mx-2 hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}
