import React from "react";
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
const ServiceCard = ({ title, icon, index }) => {
  return (
    <ParallaxTilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </ParallaxTilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview. </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-2-3xl leading-[30px]"
      >
        Welcome! I'm Sugam Karki, a passionate web developer dedicated to
        crafting unique and functional digital experiences. With years of
        experience in the industry, I specialize in front-end development,
        creating responsive websites that not only look great but also
        prioritize usability and performance. My skills include HTML, CSS,
        JavaScript, TypeScript and frameworks like React, NextJS, and Vue.js.
        Whether it's building sleek user interfaces, optimizing code for
        efficiency, or collaborating with teams to bring ideas to life, I thrive
        on turning concepts into reality through clean, scalable code. Explore
        my portfolio to see how I can elevate your digital presence.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
