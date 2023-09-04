import React from 'react'

const Home = () => {
  return (
    <div name="home" 
    className="h-screen w-full bg-[#121212]">
        <div className="text-5xl max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full 
        px-4 md:flex-row text-white">
            <div>
                <h2>Hello, I'm <span className="text-[#FF00FF] font-bold">Zachary Proch</span>.</h2>
                    <p>
                        Intellectual Property Attorney. Engineer. Coffee Enthusiast.
                    </p>
            </div>
        </div>
    </div>
  );
};

export default Home;