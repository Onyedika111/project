import React from "react";
import Image from "../assets/avatar.png";
import { FaGithub, FaYoutube } from "react-icons/fa";
import {SiHashnode} from 'react-icons/si'
import {BsTwitter} from 'react-icons/bs'
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[35px] mb-4 font-bold leading-[0.8] lg:text-[110px]"
            >
              KACHI <span>CELESTINE</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "FullStack Developer",
                  2000,
                  "Technical Writer",
                  2000,
                  "Web3 Enthusiast",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 text-base px-4 lg:text-2xl lg:px-0  max-w-lg mx-auto lg:mx-0"
            >
              I am always excited about building solutions to emerging issues with the dynamic power of technology.
            </motion.p>
            <motion.div   variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn h-10 w-30 text-sm py-2 px-6 lg:btn-lg"><a href="#contact">Contact me</a></button>
              <a href="#work" className="text-gradient btn-link text-[25px] font-secondary">
                My Portfolio
              </a>
            </motion.div>

            <motion.div   variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="https://www.youtube.com/channel/UCnMSeRO7EsnPAmoJLG3tePQ" target="_blank">
                <FaYoutube />
              </a>
              <a href="https://github.com/Onyedika111" target="_blank">
                <FaGithub />
              </a>
              <a href="https://cosmosduck.hashnode.dev" target="_blank">
                <SiHashnode />
              </a>

              <a href="https://twitter.com/Onyedik89123768" target="_blank">
                <BsTwitter />
              </a>



            </motion.div>
          </div>
          <motion.div   variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] ">
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
