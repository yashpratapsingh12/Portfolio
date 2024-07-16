import React from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";
import  {  AiOutlineLinkedin} from"react-icons/ai"

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            {/* <h3 className='text-2xl text-gray-200 font-semibold'>Yash pratap singh links </h3> */}
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://github.com/yashpratapsingh12" target="_blank" rel="noreferrer"><FaGithubSquare /></a>
                <a href="https://www.linkedin.com/in/yash-pratap-singh-b0ba452b7/" target="_blank" rel="noreferrer"><AiOutlineLinkedin /></a>
                <a href="https://leetcode.com/u/yashpratapsingh_11/" target="_blank" rel="noreferrer"><SiLeetcode /></a>
                <a href="https://www.instagram.com/yash_pratapsingh566/" target="_blank" rel="noreferrer"><FaInstagram /></a>


                
            </div>

        </div>


        
    </div>
  )
}

export default Footer