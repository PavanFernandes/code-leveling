import React from 'react'
import SvgIcon from '../../utils/icons/SvgIcon'

function project({ project }) {
    return (
        <div>
            <div className='flex jsutify-start my-5'>

                <div className='mx-5'>
                    <img className='h-20 w-20' src={project.logo} alt="" />
                </div>
                <div className='items-start'>
                    <h1 className='font-medium text-lg'>{project.name}</h1>
                    <p className='mt-0.5 whitespace-wrap w-[300px]'>{project.summary}</p>
                    <p className='mt-3 text-xs'>{project.createdAt}</p>
                </div>
                <div className='flex flex-col justify-between ml-36 mr-10 '>
                    <div className='flex justify-center'>
                        <SvgIcon classNames={"w-5 h-5 mx-1 my-0.5"}
                            d={"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"}
                        />
                        {project.starCount}
                    </div>
                    <div className='text-sm'>
                        {project.status}
                    </div>
                </div>
            </div>
            <hr className='mx-6' />
        </div>
    )
}

export default project