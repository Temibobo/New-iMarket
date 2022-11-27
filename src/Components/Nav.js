import React, { useState } from "react";
import logo from "../Image/logo.png";
import { Link } from 'react-router-dom';
import { FiChevronRight, FiHelpCircle, FiMenu } from "react-icons/fi";
import vehicles from "../Image/vehicles.png";
import Property from "../Image/Property.png";
import Electronics from "../Image/Electronics.png";
import jobs from "../Image/jobs.png";
import Homeappliances from "../Image/Homeappliances.png";
import sports from "../Image/sports.png";
import games from "../Image/games.png";
import health from "../Image/health.png";
import food from "../Image/food.png";
import fashion from "../Image/fashion.png";
import services from "../Image/services.png";
import kids from "../Image/kids.png";


function Nav(){ 
    const [sidebarDisplay, setSidebarDisplay] = useState(false);

    return(
        <div className="pl-6 p-3 bg-white shadow-lg  dark:border-gray-300">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <span className="md:hidden" onClick={()=> setSidebarDisplay((prev)=> !prev)}><FiMenu size={20} className="mr-4" /></span>
                    <img src={logo} className="logo" alt="logo"/>
                </div>
                <input type="text "  placeholder="Search for anything " className="  search w-56 md:w-80 border focus:outline-gray-100 pl-2 rounded-md text-sm font-sm"/>
                <div className="hidden md:flex justify-items-end space-x-4">
                    <Link to='/' className=" hover:bg-gray-300  hover:text-black px-3 py-2 rounded-md text-sm font-bold">Home</Link>
                    <Link to="/signup" className=" hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Signup</Link>
                     <Link to="/" className=" hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium flex "><FiHelpCircle className="m-1"/> Help</Link>
                    <Link to='/login' className=" bg-orange-500 hover:bg-gray-300 hover:text-black px-7 py-2 rounded-md text-sm font-medium">Get started </Link>
                </div>
            </div>
            <div className={`${sidebarDisplay === true? 'block' : 'hidden'} sidebar bg-white p-6 md:hidden w-11/12 border-r md:w-1/4 border-gray-200 rounded-lg shadow-inner`}>
                <div className="md:hidden flex flex-col justify-center items-start ">
                    <Link to='/' className=" hover:bg-gray-300  hover:text-black px-3 py-2 rounded-md text-sm font-bold">Home</Link>
                    <Link to="/signup" className=" hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Signup</Link>
                    <Link to="/" className=" hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium flex "><FiHelpCircle className="m-1 ml-0"/> Help</Link>
                    <Link to='/login' className=" bg-orange-500 hover:bg-gray-300 hover:text-black px-7 py-2 rounded-md text-sm text-center font-medium">Get started </Link>
                </div>
                <h4 className="uppercase font-bold mt-2 mr-1">Categories</h4>
                <div className="h-px bg-slate-200 mt-3 mb-3"></div>
                <ul className="left m-4 flex flex-col space-y-6">
                    <li className=" flex gap-3"><img alt="car-icon" src={vehicles}/><span className="pt-2 mr-16">Vehicles</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img alt="car-icon"  src={Property}/><span className="pt-2 mr-16">Property</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img alt="car-icon" src={Electronics}/><span className="pt-2 mr-12">Electronics</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img alt="car-icon" src={jobs}/><span className="pt-2 mr-24">Jobs</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img alt="car-icon" src={Homeappliances}/><span className="pt-2 mr-4">Home Appliances</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img alt="car-icon" src={sports}/><span className="pt-2 mr-16">Sports</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img alt="car-icon" src={games}/><span className="pt-2 mr-16">Games</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img alt="car-icon" src={health}/><span className="pt-2 mr-4">Beauty & Health</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img alt="car-icon" src={food}/><span className="pt-2 mr-16">Foods</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img alt="car-icon" src={fashion}/><span className="pt-2 mr-16">Fashion</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img alt="car-icon" src={services}/><span className="pt-2 mr-16">Services</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img alt="car-icon" src={kids}/><span className="pt-2 mr-16">Kids</span><FiChevronRight className="mt-3.5"/></li>
                    

                </ul>
            </div>
        </div>
    )
}


export default Nav;