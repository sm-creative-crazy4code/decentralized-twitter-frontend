import React from 'react'


export default function Tweet({tweet:tweet}) {

    



  return (
    <div className="border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll">
    <img
      src="https://lh3.googleusercontent.com/ogw/AOh-ky1oz1pi9nSyOiLmqRvYxmt433lA1-e69khhjndx=s32-c-mo"
      className="h-12 w-12 rounded-full xl:mr-2.5"
    />

    <div>
      <div className="w-full devide-y devide-grey-700">
        <div className={`${selectFiles && "pb-7" } ${input && "space-y-2.5"}`} >
          <div className="bg-gray-700 outline-none text-[#d9d9d9] text-lg placeholder-grey-500 tracking-wide w-full min-h-[50px] ">{tweet}</div>
        </div>
      </div>
      </div>
      </div>
  )
}