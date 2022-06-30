import { AiFillHome } from "react-icons/ai";
import {BiInfoCircle,BiCalendar} from "react-icons/bi";
import {BsCodeSlash} from "react-icons/bs";


export const linksNav = [
    {
      icon: <AiFillHome/>,
      text: "House",
      route: "/",
      title: "Homero Bracamonte",
    },
    {
      icon: <BiInfoCircle/>,
      text: "About",
      route: "/about",
      title: "About me",
    },
    {
      icon: <BsCodeSlash/>,
      text: "Portfolio",
      route: "/portfolio",
      title: "Portfolio",
    },
    {
      icon: <BiCalendar/>,
      text: "Contact",
      route: "/contact",
      title: "Contact me",
    },
  ];