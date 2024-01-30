import {
  NavBarShortcutData,
  NavBarProductCategoriesData,
} from "../../../../../public/data/nav_bar_links_data";
import { Image, Link } from "../../../../../shared";
import { BuildDropdown } from "../../molecules/dropdowns";

const ProjectCatgories = () => {
  return (
    <div className="m-2 flex flex-col ">
      <h3 className="text-sm font-light mb-2">Project Categories</h3>
      {NavBarProductCategoriesData.map((item, index) => {
        return <BuildDropdown key={index} categoryData={item} />;
      })}
    </div>
  );
};

export default ProjectCatgories;
