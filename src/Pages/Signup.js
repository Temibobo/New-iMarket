import React from "react";
import Nav from "../Components/Nav";
import Foot from "../Components/Foot";
import signup from "../Image/signupimage.png";
// import { FiInstagram} from "react-icons/fi";
import { Link } from "react-router-dom";
// import usePasswordToggle from "../Hooks/usePasswordToggle";

function Signup() {

    // const [PasswordInputType, ToggleIcon] = usePasswordToggle;
    return(
        <div>
            <Nav/>
            <div className="grid grid-cols-2 relative ">
                    <div className="relative" style={{backgroundImage:`url(${signup})`,backgroundRepeat:"no-repeat",  }}></div>


                    
                        <div className=" bg-white flex justify-center text-center mt-24 mb-40">
                            
                            
                                <div className="flex flex-col justify-between ">
                                    
                                <p className="font-bold text-2xl ">Welcome to iMarket</p>
                                <p className="text-sm mb-10 ">lorem ipsum dolor dit amet, consectur adipicing elit</p>


                                    <form className="flex flex-col">
                                        
                                        <input  type="text" placeholder="Enter full name" className=" text-gray-700 hover:bg-gray-100 rounded-md w-96 px-4 py-3 mx-auto mb-5 "></input>
                                        <input type="tel" placeholder="Enter phone number" className=" text-gray-700 hover:bg-gray-100 rounded-md   w-96 px-4 mx-auto py-3 mb-5"></input>
                                        <input type="email" placeholder="Enter email address" className=" text-gray-700 hover:bg-gray-100 rounded-md  w-96 mx-auto px-4 py-3 mb-5"></input>
                                        <input type="password" placeholder="Enter password" className=" text-gray-700 hover:bg-gray-100 rounded-md  w-96 mx-auto px-4 py-3 mb-5"/>
                                        {/* <span className="password-toggle-icon absolute mt-3 mr-4 z-1000">{ToggleIcon}</span> */}
                                        <Link to='/verify' className="hover:bg-gray-300 text-white hover:text-gray-500 bg-blue-900 w-96 px-4 py-3 mx-auto rounded-md text-sm font-medium mb-5">Login</Link>
                                    </form>
                                    
                                    <div><p>Have an account? <span className="text-red-600">Login</span></p></div>

                                </div>
                        
                        </div>

                </div>

            <Foot/>

        </div>
    )
}

export default Signup;