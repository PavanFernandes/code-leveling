import React from 'react'
import Project from './project';

function Projects() {

    const projects = [
        {
            id : 1, name: "Fat Cat", summary : "platform to collborate and build projects", createdAt : "Apr 17 2024",
            starCount : "45", status : "active",
            logo : "https://images-platform.99static.com/mhPjZKSPCHw7HJTa6TIYbWRTJ1A=/217x890:1292x1965/500x500/top/smart/99designs-contests-attachments/128/128368/attachment_128368080" 
        },
        {
            id : 2, name: "Hat Cat", summary : "platform to collborate and build projects", createdAt : "Mar 13 2024",
            starCount : "45", status : "active",
            logo : "https://cdn1.vectorstock.com/i/1000x1000/69/25/fat-cat-abstract-vintage-sign-symbol-vector-8936925.jpg"
        },
        {
            id : 3, name: "Big Cat", summary : "platform to collborate and build projects", createdAt : "Feb 14 2024",
            starCount : "45", status : "closed",
            logo : "https://static.vecteezy.com/system/resources/previews/004/912/457/original/fat-cat-logo-mascot-illustration-vector.jpg"
        },
        {
            id : 4, name: "Records Cat", summary : "platform to collborate and build projects", createdAt : "Feb 15 2024",
            starCount : "45", status : "active",
            logo : "https://i0.wp.com/fatcat.online/wp-content/uploads/2023/07/fatcat_records_logo_blue.png?fit=2424%2C2424&ssl=1"
        }
    ]


  return (
    <div className= 'grid justify-center mb-24'>
        <div className='border'>
            <div className='mx-5 mt-3 mb-2'>
            <h1>Discover the projects taking place within our university</h1>
            <br />
            </div>
        </div>
        <div className='border pt-1'>
        {projects.map(project => (
            <Project key={project.id} project={project} />
        ))}
        </div>
    </div>
  )
}

export default Projects