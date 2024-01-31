import { CgDatabase } from "react-icons/cg";
import { FaUserLock } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { TiCloudStorageOutline } from "react-icons/ti";
import { AiOutlineBuild } from "react-icons/ai";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { TbFileLike } from "react-icons/tb";
import { TbUserScan } from "react-icons/tb";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { IoIosCodeWorking } from "react-icons/io";
import { GoLog } from "react-icons/go";
import { LuTestTubes } from "react-icons/lu";
import { GrDocumentConfig } from "react-icons/gr";
import { FaCloudscale } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { TbHandClick } from "react-icons/tb";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { RiUserHeartLine } from "react-icons/ri";

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
    icon: <TbUserScan />,
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
    icon: <AiOutlineBuild />,
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
        icon: <TbUserScan />,
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
      {
        id: 5,
        title: "Hosting",
        icon: <BsGlobeCentralSouthAsia />,
        description: "Host on dWeb",
        link: "/",
      },
      {
        id: 6,
        title: "Functions",
        icon: <IoIosCodeWorking />,
        description: "Run serverless functions",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Release & Monitor",
    icon: <MdOutlineMonitorHeart />,
    categories: [
      {
        id: 1,
        title: "Monitor",
        icon: <GoLog />,
        description: "Monitor the logs",
        link: "/",
      },
      {
        id: 2,
        title: "A/B Testing",
        icon: <LuTestTubes />,
        description: "Test the scenarios",
        link: "/",
      },
      {
        id: 3,
        title: "Config",
        icon: <GrDocumentConfig />,
        description: "Configure smart contracts",
        link: "/",
      },
      {
        id: 4,
        title: "Scaling",
        icon: <FaCloudscale />,
        description: "Increase the power",
        link: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Analytics",
    icon: <TbBrandGoogleAnalytics />,
    categories: [
      {
        id: 1,
        title: "Dashboard",
        icon: <MdOutlineDashboard />,
        description: "Go to the analytics dashboard",
        link: "/",
      },
      {
        id: 2,
        title: "Events",
        icon: <TbHandClick />,
        description: "Web3 events",
        link: "/",
      },
      {
        id: 3,
        title: "Conversions",
        icon: <MdOutlineOutlinedFlag />,
        description: "Web3 conversations",
        link: "/",
      },
      {
        id: 4,
        title: "User metrics",
        icon: <RiUserHeartLine />,
        description: "Metrics about your users",
        link: "/",
      },
    ],
  },
];
