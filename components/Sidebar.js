import React from "react";
import Image from "next/image";
import Sidelink from "./Sidelink";
import {
  HashtagIcon,
  HomeIcon,
  BookmarkIcon,
  UserIcon,
  InboxIcon,
  DotsHorizontalIcon
} from "@heroicons/react/outline";

function Sidebar({account}) {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start  xl:[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation  p-0 xl:ml-24">
        <Image
          src="https://th.bing.com/th/id/OIP.MQIwb8BgNhB1OzBvadoyRQHaHa?pid=ImgDet&rs=1"
          width={40}
          height={40}
        />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <Sidelink text="Home" Icon={HomeIcon} active />
        <Sidelink text="Hashtag" Icon={HashtagIcon} />
        <Sidelink text="Profile" Icon={UserIcon} />
        <Sidelink text="Bookmark" Icon={BookmarkIcon} /> 
        <Sidelink text="Inbox" Icon={InboxIcon} />
      </div>

      <button className="hidden xl:inline ml-auto bg-cyan-400 text-white w-56 h-[52px] text-lg rounded-full font-semibold shadow-md hover:bg-[#2598cd]">
        Tweet
      </button>
   <div className="text-white flex items-center justify-center xl:ml-auto xl:-mr-5 mt-auto hoverAnimation">
  <img src="https://lh3.googleusercontent.com/ogw/AOh-ky1oz1pi9nSyOiLmqRvYxmt433lA1-e69khhjndx=s32-c-mo" className="h-10 w-10 rounded-full xl:mr-2.5"/>

   <div className=" hidden xl:inline leading-5">
    <h4 className="font-bold text-white">Sneha2004</h4>
    <p className="text-[#6e767d]">{account.slice(0,6)}...</p>

   </div>
<DotsHorizontalIcon className="h-5 hidden xl:inline ml-10"/>

   </div >

    </div>
    
  );
}

export default Sidebar;

// https://th.bing.com/th/id/OIP.Yw_hmzJRpRFjw3GcnUGzkgHaEK?pid=ImgDet&w=1280&h=720&rs=1

// https://th.bing.com/th/id/R.f259bf4693821f8ed8f43eff23d5e576?rik=WuJEs7ywQ%2bpdow&riu=http%3a%2f%2fimg.freepik.com%2ffree-icon%2ftwitter-social-network-symbol_318-31407.jpg%3fsize%3d338c%26ext%3djpg&ehk=jm%2bIsrj3rX84wsAYuEBOkqoXcgILz1G00sF6AhJpjhw%3d&risl=&pid=ImgRaw&r=0
