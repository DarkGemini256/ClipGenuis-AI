import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PricingTable from "../components/PricingTable";
export default function Pricing() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <PricingTable />
      </main>
      <Footer />
    </>
  );
}
