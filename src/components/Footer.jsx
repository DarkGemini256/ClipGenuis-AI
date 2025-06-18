import React from "react";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-10">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} ClipGenius AI. All rights reserved.
      </div>
    </footer>
  );
}
