import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiMysql,
  DiPython,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      {/* Grid layout for text and image */}
      <div className="grid md:grid-cols-2 place-items-center gap-8 items-start">
        {/* Left Section - Text */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Fullstack Developer",
              1000,
              "Data Analyst",
              1000,
              "Consultant",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">AYUSH KUMAR</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            a full-stack developer and data analyst skilled in HTML, CSS,
            JavaScript, React.js, Python, and SQL. I have experience building
            dynamic web applications and performing data analysis with Pandas,
            NumPy, and Matplotlib. With certifications in Web Development, Data
            Analytics, AI/ML, and Python, I am passionate about creating
            innovative, data-driven solutions to solve real-world challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            {/* Download CV button */}
            <a
              href="https://drive.google.com/file/d/1h-dMDwQRsFDITb7Pc7g5bEc-XNhsjhkP/view?usp=drive_link"
              download="Ayush-Kumar-CV.pdf"
              className="z-10"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                }}
                className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
              >
                Download CV
              </motion.button>
            </a>

            {/* Social icons */}
            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/ak251103"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/ayush-kumar-657569224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.instagram.com/ayush_._singh._/profilecard/?igsh=eml1YnJpcmNuOHA1"
              >
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.img
  src={profilepic}
  alt="Profile Picture"
  className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] object-cover rounded-2xl shadow-lg mt-4 md:mt-12"
  initial={{ opacity: 0, scale: 0.85 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
/>

      </div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        <p className="text-gray-200 mr-6">My Tech Stack</p>

        <DiJavascript1 className="text-red-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <DiNodejsSmall className="text-green-500 mx-2" />
        <DiMysql className="text-blue-500 mx-2" />
        <DiPython className="text-yellow-500 mx-2" />
      </motion.div>

      {/* Background Effect */}
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
