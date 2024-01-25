import { TbBrandAuth0 } from "react-icons/tb";
import { BsPlugin } from "react-icons/bs";
import { CgPerformance } from "react-icons/cg";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { GrStorage } from "react-icons/gr";
import { SiTestcafe } from "react-icons/si";
import { FaFileContract } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import img1 from "../images/Back3nd_1.png";
import img2 from "../images/Back3nd_2.png";
import img3 from "../images/Back3nd_3.png";

export const cardsData = [
  {
    id: 1,
    title: "Build",
    img: img1,
    description:
      "Accelerate dapp development with fully managed backend infrastructure",
    link: "/",
    list: [
      {
        icon: <TbBrandAuth0 />,
        info: "Authentication",
      },
      {
        icon: <BsPlugin />,
        info: "Plugins",
      },
      {
        icon: <CgPerformance />,
        info: "Performance",
      },
    ],
  },
  {
    id: 2,
    title: "Deploy",
    img: img2,
    description:
      "Release with confidence and monitor performance and stability for your dapps",
    link: "/",
    list: [
      {
        icon: <AiOutlineDeploymentUnit />,
        info: "Deploy dapp",
      },
      {
        icon: <CiSettings />,
        info: "Settings",
      },
      {
        icon: <GrStorage />,
        info: "Storage",
      },
    ],
  },
  {
    id: 3,
    title: "Testing",
    img: img3,
    description:
      "A/B testing, messaging, analytics, contract testing and metrics. You name it, we have it",
    link: "/",
    list: [
      {
        icon: <SiTestcafe />,
        info: "Testing",
      },
      {
        icon: <FaFileContract />,
        info: "Smart Contract",
      },
      {
        icon: <MdOutlineMessage />,
        info: "Messaging",
      },
    ],
  },
];
