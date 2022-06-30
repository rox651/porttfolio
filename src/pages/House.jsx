import { motion } from "framer-motion";
import { iconsContact } from "../components/common/iconsContact";

const [, linkedin, github] = iconsContact;

export default function House() {
  return (
    <motion.main 
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale:1,opacity: 1}}
    transition={{ duration: 0.8 }} className="dark:text-white flex items-center justify-center flex-col text-left h-screen ">
      <div>
        <h1 className="font-bold text-center text-3xl sm:text-3xl md:text-5xl">
          HOMERO <span className="text-newblue-500 ">B</span>RACAMONTE
        </h1>
        <section className="">
          <h2
            className="text-2xl text-center sm:text-left dark:font-light mb-4"
            style={{
              letterSpacing: "4px",
            }}
          >
            Web developer
          </h2>
          <div className="flex justify-center text-4xl sm:justify-start gap-2">
            <a aria-label="linkedin" className="transition-all duration-150 hover:translate-y-2" target="_new" href="https://www.linkedin.com/in/homero-bracamonte-805399230/">
              {linkedin.iconLink}
            </a>
            <a aria-label="github" className="transition-all duration-150 hover:translate-y-2" target="_new" href="https://github.com/rox651">
              {github.iconLink}
            </a>
          </div>
        </section>
      </div>
    </motion.main>
  );
}
