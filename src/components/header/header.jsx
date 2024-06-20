import React from 'react';
import "./header.css"

const Header = () => {
   

  return (
    <header className="text-gray-700 shadow-md px-2" id="home">
        <div className="container flex items-center justify-between h-[60px] ">
                <div>
                   <a href="/" className="md:text-4xl text-4xl font-bold hover:text-sky-600 duration-300">JEET</a>
                </div>
                <nav className="sm:flex gap-7 duration-500 sm:text-lg text-sm none font-semibold " id='navItems'>
                    <a href="#home" className="hover:text-sky-600 duration-300 flex sm:flex-row flex-col sm:gap-1"><span className="bi bi-house-fill"></span> <span>Home</span></a>
                    <a href="#projects" className="hover:text-sky-600 duration-300 flex sm:flex-row flex-col sm:gap-1"><span className="bi bi-database-fill"></span><span>Projects</span></a>
                    <a href="#contact" className="hover:text-sky-600 duration-300 flex sm:flex-row flex-col sm:gap-1"><span className="bi bi-chat-left-text-fill"></span> <span>Contact</span></a>
                </nav>
                <div className="text-xl flex ">
                    <a href="https://www.linkedin.com/in/jitendra-gupta-om" target="_blank" className="bi bi-linkedin hover:bg-gray-50 p-2 px-3 rounded-full hover:text-sky-600 duration-300"></a>
                    <a href="https://github.com/jeetGithub02" target="_blank" className="bi bi-github hover:bg-gray-50 p-2 px-3 rounded-full hover:text-sky-600 duration-300"></a>
                    <a href="https://www.instagram.com/jeettech_/" target="_blank" className="bi bi-instagram hover:bg-gray-50 p-2 px-3 rounded-full hover:text-sky-600 duration-300"></a>
                    <a href="mailto:jeettech02@gmailcom" className="bi bi-envelope-at-fill hover:bg-gray-50 p-2 px-3 rounded-full hover:text-sky-600 duration-300"></a>
                </div>
        </div>
                {/* <nav className="duration-500 text-sm font-semibold" id='bottomNavItems'>
                    <a href="/" className="hover:text-sky-600 duration-300 flex sm:flex-row flex-col sm:gap-1"><span className="bi bi-house-fill"></span> <span>Home</span></a>
                    <a href="" className="hover:text-sky-600 duration-300 flex sm:flex-row flex-col sm:gap-1"><span className="bi bi-database-fill"></span><span>Projects</span></a>
                    <a href="" className="hover:text-sky-600 duration-300 flex sm:flex-row flex-col sm:gap-1"><span className="bi bi-chat-left-text-fill"></span> <span>Contact</span></a>
                </nav> */}
    </header>
  )
}

export default Header