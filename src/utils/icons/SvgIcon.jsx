import React from 'react'

export default function SvgIcon({d}) {
    return (
        (<svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-4 h-5 mx-1">
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d = {d} />
        </svg>)
    )
}
