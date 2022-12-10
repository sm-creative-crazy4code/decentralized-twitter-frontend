    import React from 'react'

function TrendingResult({result}) {
  return (
    <div className= "hover:bg-white hover:bg-opacity-[0.03] px-4 py-4 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full ">

        <div className='space-y-2'>
        <h6 className='font-light max-w-[250px] text-xs text-gray-500'>{result.details}</h6>  
        <p className=' text-white text-sm font-medium'>{result.heading}</p>
      
      <p>Trending with
      {result.tags.map((tags)=><span className='space-x-0.5 text-cyan-300 text-xs font-bold mx-1 '>{tags}</span>)}
      </p>

        </div>
    </div>
  )
}

export default TrendingResult