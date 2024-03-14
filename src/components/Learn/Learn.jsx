import React from 'react'
import LearnItems from './LearnItems'

function Learn() {

    const topics = [
        {label : "Instructions" , contents : [
            {title :"Beginner's guide", bg : "https://assets.leetcode.com/explore/cards/leetcodes-interview-crash-course-data-structures-and-algorithms/img-1663091244.png", progress : 10 },
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
            {title :"Web Development", progress : 0 },
            {title :"Dom manipulation", progress : 0 },
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
    <div className=''>
      <h1 className='font-bold text-xl my-5 mx-20'> {topics[1].label} </h1>
      
<div className='flex justify-around mx-10'>
       <LearnItems bg={"https://i.pinimg.com/564x/ba/7e/b9/ba7eb9f6065c655562caa96040ccc980.jpg"} title="Data Structures and Algorithm"/>
       <LearnItems bg={"https://assets.leetcode.com/explore/cards/dynamic-programming/img.png"} title="Data Structures and Algorithm"/>
       <LearnItems bg={"https://miro.medium.com/v2/resize:fit:1026/1*YEa9RovJmEyzsVwqIFTkeg.png"} title=""/>
       <LearnItems bg={"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1644319068083-Blog%20topic%20Image-19.png"} title=""/>
    </div>
    </div>
  )
}

export default Learn