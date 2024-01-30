import { NavBarShortcutData } from "../../../../../public/data/nav_bar_links_data";
import { Image, Link } from "../../../../../shared";

const ProjectShortcut = () => {
  return (
    <div className="m-2">
      <h3 className="text-sm font-light">Project Shortcuts</h3>
      {NavBarShortcutData.map((item: any, index: number) => {
        return (
          <Link
            key={index}
            href=""
            className="flex items-center m-2 px-2 hover:bg-primary-light hover:rounded-full hover:text-white"
          >
            {item.icon}
            <span className="ml-2">{item.title}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectShortcut;
