import {SearchIcon} from "@heroicons/react/outline";
import React from "react";
import TrendingResult from "./TrendingResult";

function Widgets({  FallowResults }) {
  const trendingResults = [
     {
        heading: "IIIT BBSR hosting freshers organized bY 2021 batch for a warm welcome of 2022",
        details:
          "Freshers being organized at iiitbbsr ....",
        tags:["#Nebula","#iitbbsr"],
      },
    
       {
        heading: "Brazil won the  FIFA worldcup with phenonmenam performance by players",
        details:
          "Freshers being organized b.... ",
        tags: ["#FIFA", "#football"],
      },
     {
        heading: "BJP wons Gujrat with a phenomreman victory winning more than 102 seats",
        details:
          "Freshers being organized bY 2021 batch for a warm welcome of 2022 batch.... ",
        tags: ["#MODI","#GujratElection"],
      },
  
  ];

  return (
    <div className="hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5">
      <div className="sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12">
        <div classsname="flex items-cener bg-[#202327] p-3 rounded-full relative ">
          <SearchIcon className="text-gray-500 h-5 z-52  " />
          <input
            type="text"
            className="bg-transparent placeholder-gray-500 outlilne-none text-gray-50 absolute inset-0 pl-11 border border-transparent w-full "
            placeholder="search twitter  "
          />
        </div>
      </div>

      <div className="text-white  pt-2 bg-gray-900 rounded-xl space-y-3 w-11/12 xl:/12">
        <h4 className="font-bold rounded full text-white px-10 m-auto">
          What's happening ?
        </h4>
        {trendingResults.map((result) => (
          <TrendingResult  result={result} />
        ))}
        <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-4 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-cyan-500 font-light ">
          Show more
        </button>
      </div>
    </div>
  );
}

export default Widgets;
