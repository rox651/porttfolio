

import { projects } from "../assets/img/portfolio";
import { motion } from "framer-motion";
export default function Portfolio() {

  return (
    <motion.main
    initial={{ x: -400, opacity: 0 }}
    animate={{ x: 0, opacity: 1}}
    transition={{duration: 0.7 }} className="relative dark:text-white w-full flex flex-col justify-center place-items-center h-screen ">
        <div className=" grid grid-cols-2 h-4/5 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 sm:w-11/12 sm:h-3/4 mx-3 gap-2">
    {projects.map((project, index) => {

      const {img,link, projectLink} = project
      return (
        <div key={`project ${index}`} className="overflow-hidden relative w-full h-full flex flex-col justify-center">
          <img
            width="500"
            height="300"
            src={img}
            alt={index}
            className=" object-center object-cover"
          />
          <div className="comp hover:bg-newblue-100/50 absolute w-full h-full grid place-items-center bg-transparent ">
            <a 
              href={projectLink}
              target="_new"
              className="hidden text-xs sm:text-base cursor-pointer rounded-md bg-newblue-400 text-white px-4 py-3 "
            >
              See project
            </a>
            <a 
              href={link}
              target="_new"
              className="hidden text-xs sm:text-base cursor-pointer rounded-md bg-newblue-400 text-white px-4 py-3 "
            >
              See repository
            </a>
          </div>
        </div>
      );
    })}
  </div>
    </motion.main>
  );
}
