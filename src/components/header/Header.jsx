import { linksNav } from "../common/linksNav";
import { Link } from "react-router-dom";
import {FaRegSun, FaMoon} from 'react-icons/fa';

import logo from "../../assets/img/logo.webp"
import logoDark from "../../assets/img/logo_Dark.webp"

import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
export default function Header({ path, setDarkModeToggle, darkMode }) {

 
  function routesTitle(route) {
    document.title = route;
  }

  linksNav.forEach((font) => {
    if (path === font.route) {
      routesTitle(font.title);
    }
  });

  return (
    <>
      <header className="dark:text-white w-full bg-white dark:bg-newblue-850 text-center fixed z-10 top-0 flex place-items-center justify-between px-10 pt-2 sm:pt-7 sm:pb-4 md:pb-2 ">
        <Link to="/" className="logo font-bold cursor-pointer">
        <img width="30" height="30" src={darkMode ? logo : logoDark} alt="logo_HB" />
        </Link>

        <NavDesktop fonts={linksNav} path={path} />

        <button onClick={setDarkModeToggle} aria-label="darkmode-button">
        {darkMode ? <FaRegSun/> : <FaMoon/>}
        </button>
      </header>
      <NavMobile
        darkMode={darkMode}
        fonts={linksNav}
        path={path}
      />
    </>
  );
}

//
