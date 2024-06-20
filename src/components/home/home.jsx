import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js';

const Home = () => {
    const el = useRef(null);
    const elTwo=useRef(null);
    const[cursorClient,setCursorClient]=useState({left:70,top:70});
    const card = document.querySelector(".card")
    const[aboutDisplay,setAboutDisplay]=useState("none");

    function handleMouseMove(e){
        setCursorClient({left:e.clientX-30,top:e.clientY-90})
        // console.log("X "+e.clientX);
        // console.log("Y " + e.clientY)
    }
    function heroMouseMove(e){

      
      const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
      const THRESHOLD = 15;
      const { clientX, clientY, currentTarget } = e;
      const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
        console.log(`X:${clientX}, Y: ${clientY}`)

        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;
        const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
        const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
        card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
      }
    function heroMouseLeave(e){
      card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }

    function closeBtn(){
        setAboutDisplay("none")
    }
    function aboutBtnClick(){
      setAboutDisplay("block")
  }


    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Hello','नमस्ते','નમસ્તે','హలో','வணக்கம்'],
          typeSpeed: 150,
          backDelay:500,
          backSpeed:50,
          loop:true
          

        });

        const typedTwo= new Typed(elTwo.current,{
            strings:['Jitendra Gupta.','Front-end Developer.',"Back-end Developer.","React Developer."],
            typeSpeed:150,
            backDelay:500,
            backSpeed:50,
            loop:true,
            
        })
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
          typedTwo.destroy()
        };
      }, []);
  return (
    <main className="pt-[50px] overflow-hidden relative " onMouseMove={handleMouseMove}>
        <div className="container grid grid-cols-1 items-center md:grid-cols-2 text-gray-700 relative z-10">
       
            <div className="px-2">
                <div>
                    <div className="italic mb-2">"Skills define knowledge, not a piece of paper"</div>
  
                </div>
               <div>
                   <h2 className="sm:text-3xl text-2xl text-sky-500 font-bold"><span ref={el} /></h2>
                    <h1 className="sm:text-3xl lg:text-4xl xl:text-5xl text-[27px] font-semibold my-2">I'm <span className="font-bold  text-sky-500"><span ref={elTwo}/></span></h1>
                    <button onClick={aboutBtnClick} className="text-lg px-4 mt-2 py-1 rounded bg-slate-300 font-medium relative aboutBtn">About me <span className="bi bi-arrow-right  font-bold aboutArrow"></span></button>
               </div>

            </div>
            <div className="">
                <div className="flex justify-center card duration-200" onMouseMove={heroMouseMove} onMouseLeave={heroMouseLeave}>
            
                    <img src="images/hero1-min.png" style={{filter:"drop-shadow(0 0 10em #aaaaff)"}} className="md:hover:scale-105 duration-1000 w-[70%] hover:filter-red" alt="hero Image"   />
                </div>
            </div>
           
        </div>
        <div className=" bg-gradient-to-b from-transparent to-white h-[80px] absolute -bottom-1 left-0 right-0 z-[20]"></div>

        <div className="
        topBox 
        
        h-[400px] w-[400px]
        lg:h-[700px] lg:w-[700px] 
         bg-slate-100 rounded-full absolute 
         lg:top-[-400px] lg:right-[-150px]
         md:top-[-200px] md:right-[-100px]
         top-[-150px] right-[-150px]
         "></div>
        <div className="topBox
         h-[400px] w-[400px]
         lg:h-[700px] lg:w-[700px]
       bg-slate-100 rounded-full absolute
        bottom-[-100px] left-[-100px]
        lg:top-[150px] lg:left-[-150px]
    
           
           "
          ></div>
           <div className={
            ` w-14 h-14
            absolute 
           bg-slate-50/20 rounded-full
             z-[1]
             top-[${cursorClient.Y}px]
             duration-300
             `
           } style={{...cursorClient,filter:"drop-shadow(0 0 1em #aaaaff)"}} >
           </div>
           <div className={`bg-slate-200 md:p-10 p-5 rounded-xl min-w-[350px] `} id="aboutCard" style={{display:`${aboutDisplay}`}}>
                <h1 className="text-center text-sky-500 text-2xl font-medium  md:text-left ">ABOUT ME</h1>
                <p>I help business owners and busy web developers to design & develop creative websites that fits their vision and attracts the visitors to stay for ever. Technologies and tools that I use to create such awesome websites.</p>
                <div className="technologyList flex gap-2 flex-wrap mt-4">
                    <div>#javascript</div>
                    <div>#react</div>
                    <div>#redux</div>
                    <div>#node.js</div>
                    <div>#express.js</div>
                    <div>#mongoDB</div>
                    <div>#mongoose</div>
                    <div>#tailwind</div>
                    <div>#bootstrap</div>
                    <div>#html</div>
                    <div>#css</div>
                    <div>#git</div>
                    <div>#github</div>
                    
                </div>
                <div className="mt-4">
                    <h1 align='center' className="text-2xl text-sky-500 font-medium  ">MERN STACK</h1>
                    <div className="flex aboutBox justify-around items-center text-2xl font-medium mt-5">
                        <div>
                            <img src="images/mongodb.png" className="object-contain" width="50" style={{height:"50px"}} alt="" />
                            <span className="text-[#47a248]">M</span>
                        </div>
                        <div>
                            <img src="images/express.png" className="object-contain" width="50" style={{height:"50px"}} alt="" />
                            <span className="text-white">E</span>
                        </div>
                        <div>
                            <img src="images/react.png" className="object-contain" width="50" style={{height:"50px"}} alt="" />
                            <span className="text-[#61dafb]">R</span>
                        </div>
                        <div>
                            <img src="images/nodejs.png" className="object-contain" width="50" style={{height:"50px"}} alt="" />
                            <span className="text-[#8cc84b]">N</span>
                        </div>
                    </div>
                </div>
                <button onClick={closeBtn} className="bi bi-x-lg text-black absolute top-3 right-5"></button>
           </div>
           {/* style={{top:`${cursorClient.X}px`,left:`${cursorClient.X}px`}} left-[${cursorClient.X}px] */}
    </main>
  )
}

export default Home