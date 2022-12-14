import React, { useState } from "react";
import { SparklesIcon } from "@heroicons/react/outline";
import InputBox from "./InputBox";


 function Feeds() {

  
 










  return (
    <div className="text-white flex-grow border-l border-r border-gray-700 max-w-3xl sm:ml-[73px] xl:ml-[340px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
        <h2 className=''>Home</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5 text-white " />
        </div>
      </div>

      <InputBox />
    </div>
  );
}


export default Feeds;