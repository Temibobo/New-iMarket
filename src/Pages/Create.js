import React from "react";
import Nav from "../Components/Nav";
import Foot from "../Components/Foot";
import { Link } from 'react-router-dom';
import loginimage from "../Image/loginimage.png";
import { FiHelpCircle } from "react-icons/fi";


function Create(){

    return(

        <div>
            <Nav/>

            <div className="grid grid-cols-2 relative ">
                    <div className="relative" style={{backgroundImage:`url(${loginimage})`,backgroundRepeat:"no-repeat",  }}></div>


                    
                        <div className=" bg-white flex justify-center text-center mt-24 mb-40">
                            
                            
                                <div className="flex flex-col justify-between ">

                                    <p className="text-sm mb-2 text-left ">Step 1 of 2</p>    
                                    <p className="font-bold text-2xl text-left  ">Create your iMarket profile</p>
                                    <p className="text-sm mb-8 text-left  ">lorem ipsum dolor dit amet, consectur adipicing elit</p>


                                    <form className="flex flex-col">
                                        
                                                <input  type="text" placeholder="Enter full name" className=" text-gray-700 hover:bg-gray-100 rounded-md w-96 px-4 py-3 mx-auto mb-5 "></input>
                                                <input type="tel" placeholder="Enter phone number" className=" text-gray-700 hover:bg-gray-100 rounded-md   w-96 px-4 mx-auto py-3 mb-5"></input>
                                                <input type="email" placeholder="Enter email address" className=" text-gray-700 hover:bg-gray-100 rounded-md  w-96 mx-auto px-4 py-3 mb-5"></input>
                                                
                                                <select type="password" className=" text-gray-700 hover:bg-gray-100 rounded-md  w-96 mx-auto px-4 py-3 mb-5">
                                                    <option>Choose gender</option>
                                                    <option>Female</option>
                                                    <option>Male</option>
                                                </select> 

                                                <input type="text" onfocus="(this.type='date')" placeholder="Choose date of birth" className=" text-gray-700 hover:bg-gray-100 rounded-md  w-96 mx-auto px-4 py-3 mb-5"></input>

                                                <p className="text-xs text-left mb-3 ">ADD SOCIAL MEDIA LINK *</p>
                                                <input type="text" placeholder="@username" className=" text-gray-700 hover:bg-gray-100 rounded-md  w-96 mx-auto px-4 py-3 mb-5"></input>
                                                <p className="text-xs text-left flex mb-4"><FiHelpCircle className=" text-orange-500 m-1 " />Add your correct social media account username for verification</p>

                                                <Link to='/create2' className="hover:bg-gray-300 text-white hover:text-gray-500 bg-blue-900 w-96 px-4 py-3 mx-auto rounded-md text-sm font-medium mb-5">Next</Link>
                                    </form>
                                    
                                    

                                </div>
                        
                        </div>

                </div>

            <Foot/>
        </div>

    )

}

export default Create;