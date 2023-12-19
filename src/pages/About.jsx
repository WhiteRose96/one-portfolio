import React from "react";
import image from "../assets/aboutme_image.png";
import { useIsVisible } from '../components/useIsVisible';
import { useRef } from "react";
import useDocumentTitle from "../components/useDocumentTitle";

function About() {

  useDocumentTitle("About | Zachary Proch")

  const ref0 = useRef();
  const isVisible0 = useIsVisible(ref0);

  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);

  const ref5 = useRef();
  const isVisible5 = useIsVisible(ref5);

  const ref6 = useRef();
  const isVisible6 = useIsVisible(ref6);

  const ref7 = useRef();
  const isVisible7 = useIsVisible(ref7);

  const ref8 = useRef();
  const isVisible8 = useIsVisible(ref8);

  return (
    <div name="about" className="h-full w-full bg-[#121212]">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
      
        <div className="mt-20">
          <h2 className="text-purple-600 mt-0 md:mt-5 underline text-3xl font-bold">
            About Me
          </h2>
        </div>

        <br />

        <div>
          <p className="text-gray-300 text-sm">
            Last Update: December 18, 2023
          </p>
        </div>

        <br/>

        <div className="">

          <img ref={ref0} src={image} alt="professional headshot" className={`transition-opacity ease-in delay-100 duration-500 
          ${isVisible0 ? "opacity-100" : "opacity-0"} float-right rounded-full w-1/3 pt-5 md:w-1/3 md:pt-0`} />

          <p className="text-white">
            
            Hello again!

            <br/>
            <br/>

            I'm Zach, an Intellectual Property Attorney with a unique blend of legal expertise and a foundation in chemical and polymer engineering.
            My journey in the legal profession began as a natural extension of my profound passion for science and engineering.

            <br/>
            <br/>

            In the legal field, I navigate the intricate domains of intellectual property law, encompassing patent prosecution and litigation, 
            trademark law, and copyright law. Through my professional journey, I've honed my skills to safeguard the intellectual treasures that 
            emerge from the ever-evolving world of innovation.

            <br/>
            <br/>

            Beyond the courtroom and office, I'm more than just a legal mind. This website serves as a canvas where I paint my diverse array of 
            passions and reflections. Intellectual property is not just a career for me; it's a gateway to exploring the intersection of creativity, 
            law, and technology.

            <br/>
            <br/>

            While I thrive in the world of law, my interests are far-reaching. From capturing the wonders of the cosmos through astrophotography 
            to perfecting my swing on the golf course, every pursuit fuels my curiosity and adds a unique dimension to my identity. Coffee is a 
            constant companion, it not only keeps me alert but also serves as a catalyst for contemplation.
           
            <br/>
            <br/>

            On my journey through life, I've discovered the joy of travel—a chance to explore new cultures, savor diverse cuisines, and broaden my 
            perspective. It's in these moments of exploration that I find inspiration and recharge my creativity.

            <br/>
            <br/>

            Join me on this digital journey as I share insights, musings, and glimpses into the multifaceted tapestry of my life. Let's explore the 
            fascinating intersections of law, science, and personal interests together.

            <br/>
            <br/>

            Thanks for stopping by!

            <br/>
            <br/>

          </p>
          
        </div>

        <div>
          <h3 className="text-purple-600 underline text-2xl font-bold">
            A Brief History (of Time)
          </h3>
        </div>

        <br/>

        <div>
          <p className="text-white">
            Presented below is a consise summary of my education, accompanied by pertinent professional experiences. For a more comprehensive
            understanding, you may peruse my detailed resume, available for your review&nbsp;
            <a href={"Zachary_T_Proch_WebResume.pdf"} target="_blank" className="underline text-cyan-400" rel="noreferrer">here.</a>
          </p>
        </div>

        <div className="bg-[#121212] text-white py-10">
          <div className="container mx-auto flex flex-row items-start justify-center">
            
            <div className="">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-0 h-full">
                  <div className="border-2 border-purple-600 absolute h-full"
                    style={{"right": "50%"}}></div>
                  <div className="border-2 border-purple-600 absolute h-full"
                    style={{"left": "50%"}}> </div>

                  <div ref={ref1} className={`transition-opacity ease-in delay-100 duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} 
                  mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline`}>
                    <div className="order-1 w-5/12"></div>
                    <div className= "order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-purple-600">August 2014 - May 2019</p>
                      <h4 className="font-bold text-lg md:text-2xl">B.S. Chemical Engineering</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 italic">Certificate in Polymer Engineering</p>
                      <p className="text-lg md:text-2xl">The University of Akron </p> 
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">Akron, Ohio</p>
                    </div>
                  </div>

                  <div ref={ref2} className={`transition-opacity ease-in delay-100 duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"} 
                  mb-8 flex justify-between items-center w-full right-timeline`}>
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-purple-600">January 2017 - August 2018</p>
                      <h4 className="font-bold text-lg md:text-2xl">Chemical Engineer Co-Op</h4>
                      <p className="text-lg md:text-2xl">Hancook Tire America Technical Center</p>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">Uniontown, Ohio</p>
                    </div>
                  </div>

                  <div ref={ref3} className={`transition-opacity ease-in delay-100 duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"} 
                  mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline`}>
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-purple-600">January 2019 - May 2019</p>
                      <h4 className="font-bold text-lg md:text-2xl">Research Assistant</h4>
                      <p className="text-lg md:text-2xl">Dr. Monty Research Group, The University of Akron</p>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">Akron, Ohio</p>
                    </div>
                  </div>

                  <div ref={ref4} className={`transition-opacity ease-in delay-100 duration-700 ${isVisible4 ? "opacity-100" : "opacity-0"} 
                  mb-8 flex justify-between items-center w-full right-timeline`}>
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-purple-600">January 2020 - December 2022</p>
                      <h4 className="font-bold  text-lg md:text-2xl text-left">Juris Doctorate</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 italic">Certificate in Intellectual Property Law</p>
                      <p className="text-lg md:text-2xl" >The University of Akron School of Law</p>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">Akron, Ohio</p>
                    </div>
                  </div>

                  <div ref={ref5}className={`transition-opacity ease-in delay-100 duration-700 ${isVisible5 ? "opacity-100" : "opacity-0"} 
                  mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline`}>
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-purple-600">May 2021 - August 2021</p>
                      <h4 className="font-bold text-lg md:text-2xl">Research Assistant</h4>
                      <p className="text-lg md:text-2xl">Center for Intellectual Property, The University of Akron School of Law</p>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">Akron, Ohio</p>
                    </div>
                  </div>

                  <div ref={ref6} className={`transition-opacity ease-in delay-100 duration-700 ${isVisible6 ? "opacity-100" : "opacity-0"} 
                  mb-8 flex justify-between items-center w-full right-timeline`}>
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-purple-600">June 2021 - December 2021</p>
                      <h4 className="font-bold  text-lg md:text-2xl text-left">Volunteer</h4>
                      <p className="text-lg md:text-2xl">CQE Clinic, The University of Akron School of Law</p>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">Akron, Ohio</p>
                    </div>
                  </div>

                  <div ref={ref7} className={`transition-opacity ease-in delay-100 duration-700 ${isVisible7 ? "opacity-100" : "opacity-0"} 
                  mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline`}>
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-purple-600">August 2021 - December 2021</p>
                      <h4 className="font-bold text-lg md:text-2xl">Volunteer</h4>
                      <p className="text-lg md:text-2xl">Trademark Clinic, <br/> The University of Akron School of Law</p>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">Akron, Ohio</p>
                    </div>
                  </div>
                  
                  <div ref={ref8} className={`transition-opacity ease-in delay-100 duration-700 ${isVisible8 ? "opacity-100" : "opacity-0"} 
                  mb-8 flex justify-between items-center w-full right-timeline`}>
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-purple-600">May 2021 - June 2023</p>
                      <h4 className="font-bold  text-lg md:text-2xl text-left">Law Clerk</h4>
                      <p className="text-lg md:text-2xl">Emerson, Thomson & Bennett LLC</p>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">Akron, Ohio</p>
                    </div>
                  </div>

                </div>
                
              </div>
            </div>
        </div>
      </div>


      </div>
    </div>
  )
}

export default About;