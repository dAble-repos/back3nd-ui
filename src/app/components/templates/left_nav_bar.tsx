import { Image, Link } from "../../../../shared";
import logoImg from "../../../../public/images/Back3nd_darkandcolour.png";
import { FaHouse } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import ProjectShortcut from "../organisms/cards/project_shortcut";
import { VscExtensions } from "react-icons/vsc";
import ProjectCatgories from "../organisms/cards/project_categories";

const LeftNavBar = () => {
  return (
    <div className="w-1/5 bg-white text-gray-500 font-semibold p-4">
      {/* Navbar content goes here */}

      <Link href="/">
        <Image
          src={logoImg}
          alt="Logo - Back3nd"
          width={100}
          height={100}
          className="w-auto"
        />
      </Link>
      <hr />
      <div className="flex items-center justify-between my-2 mx-1 bg-primary-dark p-2 text-white rounded-full text-sm">
        <FaHouse className="mr-1" />{" "}
        {/* Add margin to separate icon and text */}
        <span className="mr-2">Project Overview</span>{" "}
        {/* Add margin to separate text and next icon */}
        <IoSettings />
      </div>
      <hr />
      {/* Add more navbar items as needed */}
      {/* project Shortcut */}
      <ProjectShortcut />
      {/* What's new */}
      <div className="m-2">
        <h3 className="text-sm font-light">Whats new</h3>
        <Link
          href=""
          className="flex items-center m-2 px-2 hover:bg-primary-light hover:rounded-full hover:text-white"
        >
          <VscExtensions />

          <span className="ml-2">Extensions</span>
        </Link>
      </div>
      {/* Project Categories */}
      <ProjectCatgories />
    </div>
  );
};

export default LeftNavBar;
