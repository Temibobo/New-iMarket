import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram} from "react-icons/fi";
import { useState } from 'react';


function Popup({popup, setPopupOn}){

   
      return (

        

        <div   className={`${popup? 'block': 'hidden'} bg-gray-700 bg-opacity-90 fixed inset-0 z-50 `} >
          <div id="cardContainer" onClick={(e)=> {
            if(e.target.id === 'cardContainer'){
              setPopupOn()
            }
          }} className=' flex h-screen relative w-auto justify-center items-center'> 
            
            <div id="card" className="flex flex-col justify-center text-center bg-white py-12 px-24 border-4 rounded-xl ">
                
              <div className="font-bold text-2xl text-center ">
                <h3>Login to chat with seller</h3>
              </div>
      

              <button className="hover:bg-orange-400  bg-gray-300 mx-auto w-96 px-28 py-3 rounded-md text-sm font-medium mb-3 mt-10 flex text-center "><FiInstagram className="m-1 "/>Login with Instagram</button>

              
              <Link to='/login' className="hover:bg-gray-300 text-white hover:text-gray-500 bg-blue-900 w-96 px-4 py-3 mx-auto rounded-md text-sm font-medium mb-5">Login</Link>
              
              <div className='text-center'><p>Don't have an account? <span className="text-red-600">Create Account</span></p></div>

            </div>
              
          </div>     
                                
        </div>
        
      )
}

export default Popup;