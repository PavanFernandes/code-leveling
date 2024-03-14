import React from 'react'

function Learn() {

    const topics = [
        {label : "Instructions" , contents : [
            {title :"Beginner's guide", progress : 10 },
        ]},
        {label : "DSA" , contents : [
            {title :"Basics and loops", progress : 10 },
            {title :"Arrays", progress : 0 },
            {title :"Bit manipulation", progress : 0 },
            {title :"Sorting", progress : 0 },
            {title :"Back Tracking", progress : 0 },
            {title :"Dynamic Programing", progress : 0 },
            {title :"Graphs", progress : 0 },
        ]},
        {label : "Javascript" , contents : [
            {title :"Wed Development", progress : 0 },
            {title :"Dom manipulationn", progress : 0 },
            {title :"Advanced javascipt", progress : 0 },
            {title :"Asynchronous javascript", progress : 0 },
            {title :"project", progress : 0 }
        ]},
        {label : "Frontend deveopment with React JS" , contents : [
            {title :"Introduction", progress : 0 },
            {title :"React Key concept", progress : 0 },
            {title :"React Core", progress : 0 },
            {title :"React Router", progress : 0 },
            {title :"Context state management", progress : 0 }, 
            {title :"Redux", progress : 0 }
        ]}
    ]

  return (
    <div>Learn</div>
  )
}

export default Learn