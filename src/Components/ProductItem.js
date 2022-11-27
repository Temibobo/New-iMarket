import React from "react";


function ProductItem (props) {
    return (
        <div className="productItem w-52 md:w-56 min-w-52 mr-4 mb-4">
            <img className="item mb-3" src={props.url} alt={props.name}/>
            <p className="itemName">{props.name}</p>
            <p className="itemLocation text-xs">{props.location}</p>
            <p className="itemPrice font-bold">{props.price}</p>
        </div>
    )
}

export default ProductItem;