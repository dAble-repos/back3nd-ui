import Link from "next/link";
import Image from "next/image";
import heroImage from "../../../../public/images/Back3nd_hero_1.png";
import { CommonButtonLight } from "../atoms/buttons/common_button";

const ContentContainer = () => {
  return (
    <div className="container mx-auto mt-32 ">
      <div className="grid grid-cols-2 gap-2 text-white ">
        {/* Column 1 content */}
        <div>
          <h1 className="font-bold text-8xl">
            AWS for FinTech using blockchain
          </h1>
          <h4 className="font-medium mt-4 text-2xl">
            Back3nd is an dapp development platform that helps you build and
            grow dapps.
          </h4>
          <div className="flex flex-row mt-4 space-x-2">
            <CommonButtonLight label="Get Started" />
            <Link
              href="/"
              className=" text-white font-semibold py-4 px-4 focus:outline-none hover:text-gray-200 w-auto"
            >
              Try Demo
            </Link>

            <Link
              href="/"
              className=" text-white font-semibold py-4 px-4 focus:outline-none hover:text-gray-200 w-auto"
            >
              Watch Video
            </Link>
          </div>
        </div>

        {/* Column 2 content */}
        <div className="items-center justify-center h-screen">
          <Image
            src={heroImage}
            alt="Back3nd hero image"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
