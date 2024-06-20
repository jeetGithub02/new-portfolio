import React from 'react'
import "./project.css"

const Project = () => {
  return (
   <section id="projects">
      <div className="container p-4">
        <h1 className="text-3xl md:text-5xl text-center font-medium  text-gray-700">Latest Projects</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-10 items-center justify-center">
        <div className="">
            <a href="">
             <div className=" text-center">
                <a href="https://uni-clothing.vercel.app/" target='_blank'>
                      <img  className="md:hover:scale-105 rounded-lg inline-block mx-auto duration-500 w-[85%] " src="images/uni-clothing.gif" alt="Uni project" /> 
                </a>
             </div>
            </a>
        </div>
        <div>
            <h1 className="md:text-3xl text-[28px] font-medium text-sky-500">UNI Clothing Web App</h1>
            <h2 className="text-2xl  text-sky-500">(ECommerce website)</h2>
            <p className="my-3 text-[14px]">A complete <span className='font-medium'>Front-end</span> and <span className="font-medium">Firebase</span> Backend as service </p>
            <div className="flex flex-wrap gap-2 usedTechno text-[14px]">
                <span>#react.js</span>
                <span>#tailwind</span>
                <span>#javascript</span>
                <span>#css</span>
                <span>$axios</span>
            </div>
        </div>
    </div>
    </div>
   </section>
  )
}

export default Project