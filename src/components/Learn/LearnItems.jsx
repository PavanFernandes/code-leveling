import React from 'react'


export default function LearnItems({bg, title}) {
  return (
    <div className="flex flex-wrap justify-center">
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-cover bg-center" style={{ borderRadius: '0.9rem' }}>
    <div className="relative " style={{backgroundImage: `url(${bg})`, backgroundSize: 'contain',height: '200px',width:'700px'}}>
     
            <div className="text-gray-200   py-2">
                <p className="text-sm  px-2 font-semibold">LeetCode Interviews Crash Course</p>
            </div>
      <div className="px-2 py-2">
        <h1  className="text-3xl whitespace-wrap w-[300px] text-gray-800 text-lg font-bold text-white">{title}</h1>
      </div>
       
      {/* <div className="px-6 py-4 flex justify-center items-center">
        <button className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z" />
          </svg>
        </button>
       
      </div> */}
      </div>
      <div className="px-6 py-4 flex flex-row flex-wrap justify-center">
        <div className="text-center mr-6">
          <h4 className="text-xl font-semibold">13</h4>
          <p className="text-sm">chapters</p>
        </div>
        <div className="text-center mr-6">
          <h4 className="text-xl font-semibold">149</h4>
          <p className="text-sm">items</p>
        </div>
        
    </div>
  </div>
  </div>
  
  )
}
