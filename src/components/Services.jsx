import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "FullStack Developer",
    description:
      "Building highly responsive and performance effective applications making use of in-demand programming languages.",
    link: "Learn more",
    src:"https://github.com/Onyedika111"
  },
  {
    name: "Technical Writing",
    description:
      "I write on several web framework on Hashnode with large emphasis on NoSQL backend building content around such framework documentation and guide to effective use.",
    link: "Learn more",
    src:"https://cosmosduck.hashnode.dev/"
  },
  {
    name: "Youtube Trainer",
    description:
      " Actively curating several tutorial videos for learning programming languages required to become a Fullstack developer.",
    link: "Learn more",
    src:"https://www.youtube.com/channel/UCnMSeRO7EsnPAmoJLG3tePQ"
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container px-8 lg-px-0 mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6 text-[40px] font-secondary">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I am a FullStack Developer and Technical Writer interested in building helpful applications
            </h3>
            <button className="btn h-10 w-30 text-sm py-2 px-6 lg:btn-sm"><a href="#work">See my works</a></button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link,src } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary text-sm lg:text-xl leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end ">
                      <a
                        href={src}
                        target="_blank"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href={src} target="_blank" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
