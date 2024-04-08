import React from 'react'

function Hero() {
  return (
    <>
    <header>
    <div className="w-full bg-center bg-cover h-[38rem]" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg")`}}>
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
                <h1 className="text-3xl font-semibold text-white lg:text-4xl">Elevate Your Hiring Journey <br />
with Expert Interview Support </h1>
                <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-[#09005F] capitalize transition-colors duration-300 transform bg-white rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Choose the role</button>
            </div>
        </div>
    </div>
</header>
    </>
  )
}

export default Hero