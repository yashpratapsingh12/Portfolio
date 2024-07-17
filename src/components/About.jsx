import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from "./Reveal"
import profilepic from "../assets/pro.jpeg";

const About = () => {
  return (
  
   <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="About">
        <Reveal>
        <div className="grid md:grid-cols-1 place-items-center ">
            <div>
                <div className="text-gray-300 my-3">
                    <h3 className="text-4xl font-semibold mb-5  text-center">About <span>me</span></h3>
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                    A keen and dedicated Software Developer   I have honed my skills in  "web development ,Data structures and algorithmns".
                   I am pursuing Btech from Rajshree Institute of Management and Technology(AKTU)  where I have developed a strong foundation in Data structures and Web Dev. And in my early college days I have worked on various projects that have allowed me to expand my knowledge and adapt to new technologies and methodologies.
                    </p>

                </div>

            </div>

            <div>
   
          </div>

        </div>
        
        </Reveal>
    </div>
  )
}

export default About