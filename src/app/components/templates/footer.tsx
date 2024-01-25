import * as shared from "../../../../shared";
import {
  column1,
  column2,
  column3,
} from "../../../../public/data/footer_links_data";
import logoImg from "../../../../public/images/Back3nd_darkandcolour.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 w-full mt-12">
      <div className="container mx-auto flex justify-between">
        {/* Column 1 */}
        <div className="flex-shrink-0">
          <h3 className="text-lg font-semibold">Learn</h3>
          <ul className="mt-2 space-y-3">
            {column1.map((item, index) => {
              return (
                <li key={index}>
                  <shared.Link
                    href={item.link}
                    className="text-black hover:text-white"
                  >
                    {item.label}
                  </shared.Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Column 2 */}
        <div className="flex-shrink-0">
          <h3 className="text-lg font-semibold">Stay Connected</h3>
          <ul className="mt-2 space-y-3">
            {column2.map((item, index) => {
              return (
                <li key={index}>
                  <shared.Link
                    href={item.link}
                    className="text-black hover:text-white"
                  >
                    {item.label}
                  </shared.Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex-shrink-0">
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="mt-2 space-y-3">
            {column3.map((item, index) => {
              return (
                <li key={index}>
                  <shared.Link
                    href={item.link}
                    className="text-black hover:text-white"
                  >
                    {item.label}
                  </shared.Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <hr className="mt-16" />
      <div className="flex items-center">
        <shared.Image
          src={logoImg}
          alt="Logo - Back3nd"
          width={100}
          height={100}
          className="w-auto my-4"
        />
        <span>for Developers, Innovators and Degens</span>
      </div>

      <hr className="" />
      {/* Copyright, Privacy, Terms links */}
      <div className="mt-4 text-center">
        <span className="text-gray-500">
          &copy; 2024 Back3nd. All rights reserved.
        </span>
        <span className="mx-2 text-gray-500">|</span>
        <a href="/privacy" className="text-gray-500 hover:text-white">
          Privacy
        </a>
        <span className="mx-2 text-gray-500">|</span>
        <a href="/terms" className="text-gray-500 hover:text-white">
          Terms
        </a>
      </div>
    </footer>
  );
};

export default Footer;
