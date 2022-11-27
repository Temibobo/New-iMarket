import React from "react";
import Nav from "../Components/Nav";
import Foot from "../Components/Foot";
import loginimage from "../Image/loginimage.png";
import { FiInstagram} from "react-icons/fi";
// import { Link } from "react-router-dom";


function Login(){

    return(
        <div>
            <Nav/>
                <div className="grid grid-cols-2 relative">
                    <div className="relative" style={{backgroundImage:`url(${loginimage})`,backgroundRepeat:"no-repeat",  }}></div>


                    
                        <div className=" bg-white flex justify-center text-center mt-24 mb-40">
                            
                            
                                <div className="flex flex-col justify-between ">
                                    
                                <p className="font-bold text-2xl ">Welcome to iMarket</p>
                                <p className="text-sm mb-8 ">lorem ipsum dolor dit amet, consectur adipicing elit</p>

                                    <button className="hover:bg-orange-400  bg-gray-300 mx-auto w-96 px-28 py-3 rounded-md text-sm font-medium mb-10 mt-14 flex text-center "><FiInstagram className="m-1 "/>Login with Instagram</button>

                                    <form className="">
                                        <input type="email" placeholder="Enter email address" className=" text-gray-400 hover:bg-gray-100 rounded-md mx-auto w-96 px-4 py-3 mb-5 "></input>
                                        <input type="password" placeholder="Enter password" className=" text-gray-400 hover:bg-gray-100 rounded-md  w-96 px-4 py-3 mb-10"></input>
                                        <button className="hover:bg-gray-300 text-white hover:text-gray-500 bg-blue-900 w-96 px-4 py-3 mx-auto rounded-md text-sm font-medium mb-5">Login </button>
                                    </form>
                                    
                                    <div><p>Don't have an account? <span className="text-red-600">Create Account</span></p></div>

                                </div>
                        
                        </div>

                </div>
            <Foot/>

        </div>
    )
}

export default Login;