import React from "react";
import image from "../assets/image.png";
import { useIsVisible } from "../components/useIsVisible";
import { useRef } from "react";
import useDocumentTitle from "../components/useDocumentTitle";

function Home() {

    useDocumentTitle("Home | Zachary Proch")

    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

  return (
    
    <div 
        name="home" className="h-screen w-full bg-[#121212]">
        <div className="max-w-screen-lg mx-auto flex flex-col w-full h-full justify-center">

            <div className="flex items-center p-5">

                <img src={image} alt="professional headshot" className="float-left rounded-full w-5/12" />

                <p className=""> 
                <span className="text-white text-4xl md:text-6xl"> Hello, I'm </span>

                <br/>

                <span ref={ref1} className={`transition-opacity ease-in delay-200 duration-1000
          ${isVisible1 ? "opacity-100" : "opacity-0"} font-semibold text-4xl md:text-6xl text-purple-600`}> Zachary Proch. </span>

                <br/>
                
                <span className="text-gray-300 text-2xl font-thin md:text-4xl"> Intellectual Property Attorney. Engineer. Coffee Enthusiast. </span>
                </p>

            </div>
            
        </div>

    </div>

  );
}

export default Home;