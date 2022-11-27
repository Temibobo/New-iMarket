import React from "react";
import Nav from "../Components/Nav";
import Foot from "../Components/Foot";
import ProductGallery from "../Components/ProductGallery";
import Popup from "./Popup";


function Home() {
    return(
           <div className="bg-gray-100">
            <Nav/>
            <ProductGallery/>
            
            <Foot/>
            </div>
    )
}

export default Home;