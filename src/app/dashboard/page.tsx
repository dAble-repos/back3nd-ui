// Dashboard
// Imports
import LeftNavBar from "../components/templates/left_nav_bar";
import { Link } from "../../../shared";
import { MediumLinkDark } from "../components/atoms/links/common_links";

export default function Page() {
  return (
    <div className="flex h-screen">
      {/* Left Container (Navbar) */}
      <LeftNavBar />

      {/* Right Container (Main Console Area) */}
      <div className="w-full p-4 bg-primary-dark text-white">
        {/* Main console content goes here */}
        <h2 className="text-xl font-semibold mb-4 z-10">Main Console</h2>
        <p>App Name</p>
        {/* Add forms and other content for the main console */}
        <div className="bg-white bg-opacity-100 rounded-md py-8 px-4 flex flex-col text-black">
          <div className="flex items-center flex-row justify-start">
            <h1 className="text-lg font-semibold mb-4 ">App Name</h1>
            <p className="text-sm font-semibold mb-4 ml-4 border p-2 rounded-full hover:bg-primary-light hover:text-white">
              Free Plan
            </p>
          </div>
          <div className="flex items-center space-x-4 flex-row justify-start p-2">
            <h1 className="text-lg font-semibold mb-4 ">Chain</h1>
            <MediumLinkDark link="/" title="Ethereum" />
            <MediumLinkDark link="/" title="Solana" />
            <MediumLinkDark link="/" title="Bitcoin" />
          </div>
        </div>
      </div>
    </div>
  );
}
