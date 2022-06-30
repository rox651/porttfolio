
import { Link } from "react-router-dom";

export default function NavDesktop({fonts,path}) {
  return (
    <nav
    className={` w-150 hidden lg:bg-transparent lg:flex lg:justify-between `}
  >
    {fonts.map((font) => {
      const { route, text, icon } = font;
      return (
        <Link
          to={route}
          key={text}
          className={`my-10  transition-all ease-in duration-100 md:my-0  text-sm sm:text-base cursor-pointer ${
            path === route
              ? "text-newblue-500 hover:text-black dark:text-newblue-300 dark:hover:text-white"
              : "text-black hover:text-newblue-500 dark:text-white dark:hover:text-newblue-400 "
          }`}
        >
          <div className="flex justify-center place-items-center">
            <button aria-label={text}  className={" mx-1"}>
              {icon}
            </button>
            <p>{text}</p>
          </div>
        </Link>
      );
    })}
  </nav>
  )
}
