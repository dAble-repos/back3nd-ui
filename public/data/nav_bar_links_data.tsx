import { CgDatabase } from "react-icons/cg";
import { FaUserLock } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { TiCloudStorageOutline } from "react-icons/ti";

export const NavBarShortcutData = [
  {
    id: 1,
    title: "Database",
    icon: <CgDatabase />,
    description: "Store your data in a blockchain database",
    link: "/",
  },
  {
    id: 2,
    title: "Authentication",
    icon: <FaUserLock />,
    description: "Web3 auth using account abstraction",
    link: "/",
  },
  {
    id: 3,
    title: "Analytics",
    icon: <TbBrandGoogleAnalytics />,
    description: "Blockchain analytics",
    link: "/",
  },
  {
    id: 4,
    title: "Storage",
    icon: <TiCloudStorageOutline />,
    description: "Store in dWeb",
    link: "/",
  },
];

export const NavBarProductCategoriesData = [
  {
    id: 1,
    title: "Build",
    icon: <CgDatabase />,
    categories: [
      {
        id: 1,
        title: "Database",
        icon: <CgDatabase />,
        description: "Store your data in a blockchain database",
        link: "/",
      },
      {
        id: 2,
        title: "Authentication",
        icon: <FaUserLock />,
        description: "Web3 auth using account abstraction",
        link: "/",
      },
      {
        id: 3,
        title: "Analytics",
        icon: <TbBrandGoogleAnalytics />,
        description: "Blockchain analytics",
        link: "/",
      },
      {
        id: 4,
        title: "Storage",
        icon: <TiCloudStorageOutline />,
        description: "Store in dWeb",
        link: "/",
      },
    ],
  },
];
