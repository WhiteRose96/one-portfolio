import React from 'react'
import image from "../assets/image.png";

function Home() {
  return (
    <div 
        name="home" className="h-screen w-full bg-[#121212]">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-around h-full
        px-4 md:flex-row">
            
            <div className="flex flex-col justify-center">
                <img src={image} alt="my headshot" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
            </div>

            <div className="flex flex-col justify-center h-full">
                <h2 className="text-6xl text-white">Hello, I'm<span className="font-semibold text-6xl text-[#FF00FF]"> <br /> Zachary Proch</span>.</h2>
                    <p className="text-4xl font-thin text-gray-300 py-4 max-w-md">
                        Intellectual Property Attorney.
                        Engineer. Coffee Enthusiast.
                    </p>
            </div>
            
        </div>
    </div>
  );
};

export default Home;