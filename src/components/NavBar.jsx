import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom"

function NavBar () {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'Home',
        },
        {
            id: 2,
            link: 'About',
        },
        {
            id: 3,
            link: 'Projects',
        },
        {
            id: 4,
            link: 'Intellectual Property',
        },
        {
            id: 5,
            link: 'Contact',
        },
    ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-[#121212] fixed z-10">
        <div>
            <h1 className="text-5xl font-signature ml-2">Zachary Proch</h1>
        </div>

        <ul className="hidden md:flex">
            {links.map(({id, link}) => (
                <li 
                    key={id} 
                    className="px-4 cursor-pointer capitalize 
                    font-medium text-gray-300 hover:scale-110 duration-200 hover:text-purple-600"
                >
                    <NavLink 
                    to={link}
                    className={({ isActive }) => (isActive ? "text-purple-600" : "")}
                    >
                        {link} </NavLink>
                </li>
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
            {nav ? <FaTimes size={30} /> : <FaBars size = {30} />}
        </div>

        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
            bg-gradient-to-b from-black to-gray-800 text-white" onClick={() => setNav(false)}>

            {links.map(({id, link}) => (
                <li 
                    key={id} 
                    className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                    <NavLink 
                    to={link}
                    className={({ isActive }) => (isActive ? "text-purple-600" : "")}
                    >
                        {link} </NavLink>
                </li>
            ))}
            </ul>
        )}
    </div>
  );
};

export default NavBar;