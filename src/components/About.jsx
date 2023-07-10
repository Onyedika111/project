import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[540px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent font-secondary text-[40px]">About Me</h2>
            <h3 className="h3 mb-4">
              I am into building web technologies making use of the MERNSTACK
            </h3>
            <p className="mb-6">
              Making use of Frontend frameworks such Next JS, React JS, Typescript etc and NoSQL database technologies like MongoDB, I have been able to build several functional web applications.

              <br />
              <br />

              I also have fun writing on several of these technologies on my Hashnode blog while taking out time to create tutorials for a lot of young people out there interested in learning how to build FullStack applications.
            </p>
        

            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg"><a href="#contact">Contact me</a></button>
              <a href="#work" className="text-gradient btn-link font-secondary text-2xl">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
