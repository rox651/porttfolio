import { Link } from "react-router-dom";

export default function NavMobile({ fonts, path }) {
  return (
    <nav
      className={`w-full dark:bg-newblue-850 bg-white gap-10 z-40 absolute flex justify-center place-items-end py-2 md:py-5 bottom-0  lg:hidden  `}
    >
      {fonts.map((font) => {
        const { route, text, icon } = font;
        return (
          <Link
            to={route}
            key={text}
            className={`font-normal flex flex-col  transition-all ease-in duration-100 text-xs  sm:text-xl cursor-pointer ${
              path === route
                ? "text-newblue-500  dark:text-newblue-300 "
                : "text-black hover:text-newblue-500 dark:text-white dark:hover:text-newblue-400 "
            }`}
          >
          <div className="flex flex-col justify-center place-items-center">
           <button aria-label={text} className="mx-1">
            {icon}
           </button>
            <p>{text}</p>
          </div>
          </Link>
        );
      })}
    </nav>
  );
}
