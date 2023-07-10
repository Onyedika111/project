import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/port1.jpg";
import Img2 from "../assets/port2.jpg";
import Img3 from "../assets/port3.jpg";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }} className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <div>
              <h2 className="h2 leading-tight text-accent text-[40px] font-secondary -mb-0">
                My Latest <br /> Work
              </h2>

              <p className="max-w-sm mb-16">
                Overtime, I have created several high-end applications and I am glad I can share them with you.
              </p>
              <button className="btn btn-sm"><a href="https://linktr.ee/kachi111" target="_blank">View all projects</a></button>
            </div>

            <a href="https://admin-frontend-bszj.onrender.com/" target="_blank" className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
             <span className="text-gradient"> FullStack Dev</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
         
                <span className="text-3xl text-white">KACHINANCE DASHBOARD</span>
              </div>
            </a>

            
         
          </motion.div>

          <motion.div
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10">


          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
             <span className="text-gradient"> FullStack Dev</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
         
                <span className="text-3xl text-white">K MART ECOMMERCE</span>
              </div>
            </div>
            
            <a href="https://wedaa.netlify.app/#/weather?lat=6.4550575&lon=3.3941795" target="_blank" className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
             <span className="text-gradient">   Frontend Dev</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
         
                <span className="text-3xl text-white">WeatherApp </span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
