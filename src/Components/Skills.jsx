import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png";
import firebase from "../assets/firebase.png"
import github from "../assets/github.png"
import aws from "../assets/aws.png";
import javascript from "../assets/javascript.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import react from "../assets/react.png";

const Skills = () => {
  return (
    <div name = "skills" className='bg-[#0a192f] '>
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl  font-bold inline border-b-4 text-gray-300 border-pink-600'>Experience</p>
          <p className='py-4'>//These are technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className = 'w-20 mx-auto' src = {html} alt = "HTML icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className = 'w-20 mx-auto' src = {css} alt = "HTML icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className = 'w-20 mx-auto' src = {javascript} alt = "HTML icon" />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className = 'w-20 mx-auto' src = {react} alt = "HTML icon" />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className = 'w-20 mx-auto' src = {github} alt = "HTML icon" />
            <p className='my-4'>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className = 'w-20 mx-auto' src = {node} alt = "HTML icon" />
            <p className='my-4'>NODE</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className = 'w-20 mx-auto' src = {mongo} alt = "HTML icon" />
            <p className='my-4'>MONGO DB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className = 'w-20 mx-auto' src = {aws} alt = "HTML icon" />
            <p className='my-4'>AWS</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills