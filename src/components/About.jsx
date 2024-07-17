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
                I am final year undergraduate  BTech student  of Rajshree Institute of Management and Technology(AKTU) and  a keen and dedicated Software Developer with a robust expertise in  Data structures and algorithms , Web Development. Throughout my early college days, I have engaged in various projects that have not only deepened my understanding but also enabled me to adapt swiftly to new technologies and methodologies. My journey so far has been marked by a continuous commitment to learning and a passion for innovation in the tech sphere.
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