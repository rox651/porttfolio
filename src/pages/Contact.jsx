import { iconsContact } from "../components/common/iconsContact";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <motion.main
    initial={{ x: -400, opacity: 0 }}
    animate={{ x: 0, opacity: 1}}
    transition={{duration: 0.7 }}
    className="w-3/4 dark:text-white  md:w-2/4 mx-auto my-0 grid place-items-center  h-screen ">
      <div className=" rounded-2xl px-2 flex justify-center flex-wrap gap-10 md:gap-20 place-content-center" >
        {iconsContact.map((icon, index) => {
          const { iconLink,  info, link } = icon;
          return (
            <div
              key={`icon ${index}`}
              className="contact-icon grid place-items-center text-center cursor-pointer "
            >
              <h2 className=" font-bold my-2">{info}</h2>
              <a className="text-5xl sm:text-6xl  transition-all duration-150 hover:translate-x-2" href={icon.hasOwnProperty("link") ? link : null} target="_new">
                {iconLink}
              </a>
            </div>
          );
        })}
      </div>
    </motion.main>
  );
}
