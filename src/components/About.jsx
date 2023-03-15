import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
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
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4  text-[17px] max-w-3xl leading-[30px]"
      >
        3 years of experience as a Front-End-Developer have acquainted me well
        with the nuances of this role. I have worked on various enterprise-level
        projects comprising an e-commerce brand management system, an online
        notary system, official banking websites, and web-scrapping projects. I
        have worked with Typescript, React-js, React-Native, Nodejs, MongoDB,
        and related technologies namely Redux-Toolkit, Zustand for global state
        management and MUI, Evergreen-Ui, and Mantine for creating contemporary
        UI designs. Besides that, I'm proficient in Javascript, CSS3, and
        HTML5.I have worked with version control system namely GIT. Moreover, I
        have a working knowledge of other programming languages like Python,
        Java, and SQL. Being well-versed in advanced design patterns and code
        optimization in react I make an effort to avoid unnecessary re-renders
        and write modular, scalable code. Additionally , I keep myself
        up-to-date with the latest design patterns in react.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
