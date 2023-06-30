import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { BsBookHalf } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { GrContactInfo } from "react-icons/gr";

export const SIDEBAR_MENU = [
  {
    path: "/",
    title: "Home",
    icon: <AiOutlineHome />,
  },
  {
    path: "/about",
    title: "About",
    icon: <SiAboutdotme />,
  },
  {
    path: "/blog",
    title: "Blog",
    icon: <BsBookHalf />,
  },
  {
    path: "/profile",
    title: "Profile",
    icon: <BiUser />,
  },
  {
    path: "/contact",
    title: "Contact",
    icon: <GrContactInfo />,
  },
];
