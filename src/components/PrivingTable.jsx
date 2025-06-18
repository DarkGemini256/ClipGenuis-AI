import React from "react";
export default function PricingTable() {
  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-4">Pricing</h2>
      <div className="flex gap-8 justify-center">
        <div className="border rounded-lg p-6 bg-white shadow">
          <h3 className="text-lg font-semibold mb-2">Basic</h3>
          <p className="mb-2">$0 / month</p>
          <ul className="mb-4 text-sm">
            <li>✔ 3 free video clips</li>
            <li>✔ Community support</li>
          </ul>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded">Get Started</button>
        </div>
        <div className="border-2 border-indigo-600 rounded-lg p-6 bg-white shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Pro</h3>
          <p className="mb-2">$20 / month</p>
          <ul className="mb-4 text-sm">
            <li>✔ Unlimited clips</li>
            <li>✔ Priority support</li>
            <li>✔ Early access to new features</li>
          </ul>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded">Upgrade</button>
        </div>
      </div>
    </div>
  );
}
