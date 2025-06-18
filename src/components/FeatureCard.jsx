import React from "react";
export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="border rounded-lg shadow p-6 flex flex-col items-center text-center">
      <div className="mb-4 text-indigo-600 text-4xl">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
