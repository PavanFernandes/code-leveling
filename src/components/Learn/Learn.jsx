import React from 'react'
import LearnItems from './LearnItems'

function Learn() {

    const topics = [
        {
            label: "DSA", contents: [
                { title: "", progress: 0,  img: "https://miro.medium.com/v2/resize:fit:691/1*fb0_9D02RHiW8mTi4ZkArw.png"},
                { title: "", progress: 0, img: "https://technologystrive.com/static/52af122b7896b28f7dcdee40c3e4d3f3/9a63f/bit-manipulation.png" },
                { title: "", progress: 0, img : "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1644309594126-Sorting%20image-02.png"},
                { title: "", progress: 0, img : "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2023_01_MicrosoftTeams-image-3.jpg"},
                { title: "Dynamic Programing", progress: 0, img: "https://miro.medium.com/v2/resize:fit:1026/1*YEa9RovJmEyzsVwqIFTkeg.png"},
                { title: "Graphs", progress: 0, img: "https://assets.leetcode.com/explore/cards/dynamic-programming/img.png" },
            ]
        },
        {
            label: "Javascript",  bgColor : "bg-gradient-to-r from-[#9484E7] to-[#1059A4]",
            contents: [
                { title: "Web Development", progress: 0 },
                { title: "DOM anipulation", progress: 0  },
                { title: "Advanced javascipt", progress: 0 },
                { title: "Asynchronous javascript", progress: 0 },
                { title: "project", progress: 0 }
            ]
        },
        {
            label: "Frontend deveopment with React JS", bgColor : "bg-gradient-to-r from-[#ECEC21] to-[#ECBE21]",
            contents: [
                { title: "Introduction", progress: 0 },
                { title: "React Key concept", progress: 0 },
                { title: "React Core", progress: 0 },
                { title: "React Router", progress: 0 },
                { title: "Context state management", progress: 0 },
                { title: "Redux", progress: 0 }
            ]
        }
    ]

    return (
        <div className='mt-10'>
            {
                topics.map(topic => (
                    <div>
                        <h1 className='font-bold text-2xl mt-5 mb-2 mx-24'> {topic.label} </h1>
                        <div className='flex flex ml-14 p-5 hover:overflow-x-scroll scroll'>
                            {topic.contents.map(item => (
                                <div className='flex justify-around mx-5'>
                                <LearnItems title={item.title} img={item.img} bgColor={topic.bgColor} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Learn