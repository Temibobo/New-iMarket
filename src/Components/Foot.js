import React from "react";
import Logo from "../Image/Footerlogo.png";

function Foot(){

    return(
    <div className=" bg-imarketblue relative text-white text-xs md:text-sm px-12 pb-5 pt-5 text-center sm:">
        <div className="flex h-50 justify-between " >
                <div className="mt-7 sm:mt-7">
                    <ul className="text-left" >
                        <li className="my-2"><a href="#" >Home</a></li>
                        <li className="my-2"><a href="#" >About us</a></li>
                        <li className="my-2"><a href="#" >Trending Products</a></li>
                        <li className="my-2"><a href="#" >Contact Us</a></li>
                        <li className="my-2"><a href="#" >Vendors</a></li>
                    </ul>
                </div>
            <div className="my-10 center">
                <img className="ml-3" src={Logo} alt="Footerlogo"/>
                <p className="m-0 text-center">Reach Globally, Interact Locally</p>
            </div>
                <div className="mt-7">
                <ul className="text-right">
                    <li className="my-2"><a href="#" >Privacy Policy</a></li>
                    <li className="my-2"><a href="#" >Safety Tips</a></li>
                    <li className="my-2"><a href="#" >FAQs</a></li>
                    <li className="my-2"><a href="#" >Join Forum</a></li>
                    <li className="my-2"><a href="#" >Terms and Conditions</a></li>
                </ul>
            </div>
        </div>
    
        <p className="">Designed by @<span className="text-amber-600">Temitope Ayannusi</span></p>
    </div>
    )
}

export default Foot;
