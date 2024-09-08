import React from "react";

const IconButton = ({Icon , onClick}) => {
    <span className="cursor-pointer flex items-center space-x-2" >
        <Icon size={22} className="text-gray-400"/>
        <button onClick={onClick} className="text-gray-500 hover:text-gray-700">
            Add
        </button>

    </span>


}
export default IconButton