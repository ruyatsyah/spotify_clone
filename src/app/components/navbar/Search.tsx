import React from "react";
import { BiHome, BiSearch } from "react-icons/bi";
import { BsBrowserChrome } from "react-icons/bs";


const Search = () => {
  return (
    <div className="flex items-center gap-2 text-neutral-300">
    <div className="p-4 bg-neutral-800 rounded-full">
        <BiHome/>
    </div>
    <div className="flex py-3 px-3 gap-3 items-center rounded-full bg-neutral-800">
      <div className="flex items-center gap-3 border-r">
        <BiSearch/>
        <div className="mr-20">What do you want to play?</div>
      </div>
    <BsBrowserChrome/>
    </div>
    </div>
  );
};

export default Search;
