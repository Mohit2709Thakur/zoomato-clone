import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import Footer from "./Footer";


const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
      <div>
        <center><u><h1  className="text-2xl font-bold text-gray-600  flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10"style={{marginLeft:840}}> Welcome to Zoomatoo..</h1></u></center>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold ">Tomato.com...</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
        
      </div>
    </nav>
  
  );
};


export default Navbar;