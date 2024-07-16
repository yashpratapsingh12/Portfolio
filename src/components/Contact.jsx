import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from "./Reveal"
import profilepic from "../assets/pro.jpeg";

const Contact = () => {
  return (
    // <div className="px-60 max-w-[1000px] mx-auto md:my-12 "id="contact">
    //     <Reveal> 
    //      <div >
    //         <div>
    //             <div className="text-gray-300 my-3">
    //                 <h3 className=" text-4xl font-semibold mb-5"><span>Education</span></h3>
    //                 <p className="text-justify leading-7 w-11/12\\  mx-auto">
    //                  : I have completed my high school from sobtis public school
    //                   <br/>
    //                   <br/>
    //                   : Intermediate from basubaral saraswati vidya mandir 
    //                   <br/>
    //                   <br/>
    //                   :Currently pursuing Btech(cs) from Rajshree institute of management and technology(Aktu)
    //                 </p>
    //             </div>

    //         </div>
            

    //     </div> 
        
    //      </Reveal>
    // </div>
   <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="About">
        <Reveal>
        <div className="grid md:grid-cols-1 place-items-center ">
            <div>
                <div className="text-gray-300 my-3">
                    <h3 className="text-4xl font-semibold mb-5  text-center">About <span>me</span></h3>
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                    A keen and dedicated "Software Developer   I have honed my skills in  "web development, and Data structures and algorithmns".

and i am pursuing Btech from Rajshree institute of management and technology  where I developed a strong foundation in Data structures and web dev. And in my early college days I have worked on various projects that have allowed me to expand my knowledge and adapt to new technologies and methodologies.
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

export default Contact