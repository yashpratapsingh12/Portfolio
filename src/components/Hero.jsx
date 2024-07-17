import React from "react";
import profilepic from "../assets/pro.jpeg";
import pdf from "../assets/Yashpratapsingh.pdf"
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,

  
} from "react-icons/di";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto min-w-[400px]:mx-10  relative">
        <div className="grid md:grid-cols-2 place-items-center gap-8 mx-3">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <TypeAnimation
                    sequence={[
                        "Software Engineer",
                        1000,
                        "Expertise in DSA",
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
                    HEY, I AM <br/>import { RiTailwindCssFill }
                    <span className="text-purple-500">Yash pratap singh</span>
                </motion.p>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                >
                    Passionate software engineer with expertise in problem solving and algorithmic thinking and always fanatic to explore new technologies
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
                    <motion.a whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-purple-400 rounded-xl"    
                                
                                     href="https://drive.google.com/file/d/1hf-oo16A0U3iEMH6uc1Cr8pXOSDlJEgI/view?usp=sharing" target="_blank" rel="noreferrer"
                    >
                     Resume
                    </motion.a>

                    <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/yashpratapsingh12" target="_blank" rel="noreferrer">
                            <AiOutlineGithub/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/yash-pratap-singh-b0ba452b7/"    target="_blank"
                                  rel="noreferrer">
                            <AiOutlineLinkedin/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://leetcode.com/u/yashpratapsingh_11/"target="_blank" rel="noreferrer">
                            <SiLeetcode/>
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/yash_pratapsingh566/" target="_blank" rel="noreferrer">
                            <AiOutlineInstagram/>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>


            <motion.img 
                src={profilepic}
                className=" w-[300px] md:w-[450px]  h-50 mx-auto object-cover rounded-full "
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                
            />
        </div>

        <div
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{ duration: 1, delay: 2 }}
            className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-2"
        >
            </div>
            {/* <p className="text-gray-200 mr-6">My Tech Stack</p>
            <DiHtml5 className="text-orange-600 mx-2" />
            <DiCss3 className="text-blue-600 mx-2" />
            <DiJavascript1 className="text-yellow-500 mx-2" />
            <DiReact className="text-blue-500 mx-2" />
            <RiTailwindCssFill className="text-green-500 mx-2" />
            <SiMui className="text-green-500 mx-2" /> */}




        <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1400} />
        </div>
        
    </div>
  )
}

export default Hero