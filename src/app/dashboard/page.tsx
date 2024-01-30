// Dashboard
// Imports
import Link from "next/link";
import Image from "next/image";
import LeftNavBar from "../components/templates/left_nav_bar";

export default function Page() {
  return (
    <div className="flex h-screen">
      {/* Left Container (Navbar) */}
      <LeftNavBar />

      {/* Right Container (Main Console Area) */}
      <div className="w-2/3 p-4 bg-primary-light text-white">
        {/* Main console content goes here */}
        <h2 className="text-xl font-semibold mb-4">Main Console</h2>
        {/* Add forms and other content for the main console */}
      </div>
    </div>
  );
}
