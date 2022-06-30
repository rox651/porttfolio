import Button from "../components/common/Button";
import pdf from "../assets/pdf/HOMERO JOSE BRACAMONTE RAMIREZ.pdf";
import profile from "../assets/img/foto.webp";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.main  
    initial={{ x: -400, opacity: 0 }}
    animate={{ x: 0, opacity: 1}}
    transition={{duration: 0.7 }} className="flex dark:text-white flex-col md:flex-row items-center justify-center text-left h-screen md:px-11 ">
      <section className="w-4/5 md:w-1/2 mx-2">
        <h1 className=" text-4xl lg:text-5xl font-bold ">About Me</h1>
        <p className="mt-3 mb-5 text-sm lg:text-base dark:font-light">
          University student, graduated from the Medellín council educational
          institution as a Computer Technician. I'm capable of working in a
          team, not only with the technologies I know but also contributing
          ideas.
          <br /> I had been able to carry out projects in the past using HTML,
          CSS, JS, PHP, MYSQL and the Scrum Methodology for a more dynamic
          development. I'm willing to give my best in the hopes of working with
          you
        </p>
        <Button dw={pdf}>Download CV</Button>
      </section>
      <img
        width="300px"
        height="300px"        
        className="hidden md:block object-cover shadow-lg shadow-newblue-500/60"
        src={profile}
        alt="profile"
      />
    </motion.main>
  );
}
