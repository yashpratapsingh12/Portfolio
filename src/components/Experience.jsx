import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'Exhime',
        period: '2024',
        description: " -Created  beautiful Landing page UI using Tailwincss and React ⁠Implemented Shopping Cart feature using Redux toolkit and React  and created Feedback , Contact us form using React Hook Form ",
      },
      {
        company: 'Kroto',
        period: '2024',
        description: '- Implemented New User onboarding flow with collecting use-case and personal data from users, using Next.js, TailwindCSS, React Hook Form and Zod -⁠Created Time slot booking interface for 1:1 Calls feature, using dayjs, React Hook Form and Next.js -⁠Created Learner’s Feedback forms for Courses, eBooks and 1:1 Calls using React Hook Form, TailwindCSS , Next.js and zod',
      },
   
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto' id='experience'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                <Reveal>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-4'>{experience.description}</p>


                </motion.div>
                </Reveal>
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience