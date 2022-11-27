import React from "react";
import Nav from "../Components/Nav";
import Foot from "../Components/Foot";
import { Link } from 'react-router-dom';


function Verify(){

    return(
        <div>
            <Nav/>
            <div className=" bg-white flex justify-center text-center mt-24 mb-40">
                            
                            
                            <div className="flex flex-col justify-between ">
                                
                            <p className="font-bold text-2xl ">Verify account</p>
                            <p className="text-sm mb-10 ">Enter 6-digit code that was sent to username@gmail.com</p>


                                <form className="flex flex-col">
                                    
                                    
                                    
                                    <input type="text" placeholder="Enter code" className=" text-gray-700 hover:bg-gray-100 rounded-md  w-96 mx-auto px-4 py-3 mb-5"></input>
                                    <Link to='/create' className="hover:bg-gray-300 text-white hover:text-gray-500 bg-blue-900 w-96 px-4 py-3 mx-auto rounded-md text-sm font-medium mb-5">Verify my account</Link>
                                </form>
                                
                                <div><p>Didn't receive any code? <span className="text-red-600">Resend</span></p></div>

                            </div>
                    
                    </div>
            <Foot/>
        </div>
    )
}

export default Verify;