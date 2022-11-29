import React, { useEffect } from "react";
import products from "../data";
import card1 from "../Image/card1.png";
import card2 from "../Image/card2.png";
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




import { FiChevronRight, FiHelpCircle } from "react-icons/fi"; 
import Popular from "../Popular";
import ProductItem from "./ProductItem";
import Popup from "../Pages/Popup";
import { useState } from "react";
import { Link } from "react-router-dom";


function ProductGallery(){


const [popup, setpopup] = useState(false);

    function handleClosePopup(){
        setpopup(prev=> !prev);
    }


    return(
        <>
        <div onClick={() => setpopup(true)} type="button" className="gallery mx-auto flex place-content-evenly w-full box-border overflow-x-hidden bg-gray-100 pt-8" 
            style={{maxWidth: '1400px'}}
        >
            
            <div className="sidebar bg-white p-6 hidden md:block w-1/4 border-gray-300 rounded-lg shadow-inner  dark:border-gray-700">
                <div className="md:hidden flex justify-items-end space-x-4">
                    <Link to='/' className=" hover:bg-gray-300  hover:text-black px-3 py-2 rounded-md text-sm font-bold">Home</Link>
                    <Link to="/signup" className=" hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Signup</Link>
                    <Link to="/" className=" hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium flex "><FiHelpCircle className="m-1"/> Help</Link>
                    <Link to='/login' className=" bg-orange-500 hover:bg-gray-300 hover:text-black px-7 py-2 rounded-md text-sm font-medium">Get started </Link>
                </div>
                <h4 className="uppercase font-bold mt-2 mr-1">Categories</h4>
                <div className="h-px bg-slate-200 mt-3 mb-3"></div>
                <ul className="left m-4 flex flex-col space-y-6">
                    <li className=" flex gap-3"><img alt="car-icon" src={Property}/><span className="pt-2 mr-16">Property</span><FiChevronRight className="mt-3.5"/></li>
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

            <div className="overflow-x-hidden flex flex-col w-full md:w-3/4">
                <div className="flex flex-wrap justify-center md:justify-start w-full min-h-72 md:pl-5 " >   
                    <div className=" hidden min-h-72 h-72 md:block w-3/5 md:mr-8 " style={{ backgroundImage:`url(${card1})`,backgroundRepeat:"no-repeat",width:"610px", minWidth:"550px",  }}></div>
                    <div className=" md:hidden xl:block min-h-72 h-72 " style={{backgroundImage:`url(${card2})`,backgroundRepeat:"no-repeat", width:"292px", minWidth:"290px", }}></div>
                </div>


                <div className="main p-2 md:p-5">
                    <div className="popular ">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-xl">Explore Popular Brands</h3>
                            <p className="text-orange-500 flex">SEE ALL <FiChevronRight className="m-1" /></p>
                        </div>

                        <div className=" py-4 lg:p-7 grid grid-cols-6 gap-2 ">{Popular.map((item)=>
                        {
                            return <img src={item.url} key={item.id} alt={item.name}/>
                        })}
                        </div>
                        
                    </div>


                    <div className="">
                        <div className="flex justify-between ">
                            <h3 className="font-bold text-xl">Daily Deals</h3>
                            <p className="text-orange-500 flex ">SEE ALL <FiChevronRight className="m-1" /></p>
                        </div>
                        <div className="flex justify-between mt-5 overflow-x-scroll scrollbar-hide">
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-500 h-10 mx-2 py-2 px-2 md:px-4 rounded">Phones</button>
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-500 h-10 mx-2 py-2 px-2 md:px-4 rounded">Vehicles</button>
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-500 h-10 mx-2 py-2 px-2 md:px-4 rounded">Fashion</button>
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-500 h-10 mx-2 py-2 px-2 md:px-4 rounded">Electronics</button>
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-500 h-10 mx-2 py-2 px-2 md:px-4 rounded">Appliances</button>
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-500 h-10 min-w-max mx-2 py-2 px-2 md:px-4 rounded">Beauty & Health</button>
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-500 h-10 mx-2 py-2 px-2 md:px-4 rounded">Sports</button>
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-500 h-10 mx-2 py-2 px-2 md:px-4 rounded">Games</button>
                            
                            
                        </div>
                        <div className="daily  h-screen64 tailwind-scrollbar-hide md:h-max overflow-y-scroll flex flex-wrap justify-center items-center pt-4 mt-4 text-gray-600 " >  
                        {products.map ((clip) =>
                            <ProductItem
                                key={clip.id}
                                name={clip.name}
                                url={clip.url}
                                location={clip.location}
                                price={clip.price}
                                category={clip.category}
                            />
                        )}
                        </div>

                        
                    </div>
                </div>
            </div>    
        </div>
        < Popup popup={popup} setPopupOn={handleClosePopup} />
        </>

    )
}


export default ProductGallery;