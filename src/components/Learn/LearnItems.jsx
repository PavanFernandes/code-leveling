import React from 'react'


export default function LearnItems({ title, img, bgColor }) {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="max-w-xs rounded overflow-hidden shadow-lg bg-cover bg-center" style={{ borderRadius: '0.9rem' }}>
        <div className={bgColor}>
          <div className="relative" style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'contain', height: '160px', width: '275px'
          }}>
            <div className="px-2 py-2">
              <h1 className="text-3xl whitespace-wrap w-[300px] text-gray-800 text-lg font-bold text-white">{title}</h1>
            </div>
          </div>
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