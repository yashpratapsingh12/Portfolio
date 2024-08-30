import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from "./Reveal"


const About = () => {
  return (
  
   <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="About">
        <Reveal>
        <div className="grid md:grid-cols-1 place-items-center ">
            <div>
                <div className="text-gray-300 my-3">
                    <h3 className="text-4xl font-semibold mb-5  text-center">About <span>me</span></h3>
                    <p className="text-center">
                    I am an enthusiastic Software Developer with deep proficiency in Data Structures and Algorithms and a strong background in Web Development. And I have completed my B.Tech from Rajshree Institute of management and Technology. My involvement in various projects has further enhanced my ability to swiftly adapt emerging technologies and practices.
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