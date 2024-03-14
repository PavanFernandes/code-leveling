import React from 'react'

export default function SvgIcon({classNames, d}) {
    return (
        (<svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} 
            stroke="currentColor" 
            className= {classNames}>
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d = {d} />
        </svg>)
    )
}
