import React, { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import Profile from './Profile'

function Navbar() {

    const elements = [
        {title : "Home", path : "/"},
        {title : "Projects", path : "/projects"},
        {title : "Learn", path : "/learn"},
        {title : "Problems", path : "/problems"},
        {title : "Compete", path : "/compete"},
        {title : "Rankings", path : "/rankings"}
    ]

    return (
        <Fragment>
            <div className="bg-gradient-to-r from-[#CDC07F] via-[#EAE6BC] to-[#B7C7C5] py-5 mx-auto h-16 flex justify-around items-center shadow-lg">
                <div className="mx-5 flex items-center">
                    <img src={logo} alt="Logo" className="h-10" />
                    <h1 className="mx-2 font-bold">CODE LEVELING</h1>
                </div>
                <div className='flex justify-end items-center'>
                    <ul className="flex space-x-4">
                        {elements.map(e => (
                            <li key={e.title}><Link to={e.path} className="font-normal hover:text-gray-400">{e.title}</Link></li>
                        ))}
                    </ul> 
                    <div className="mx-4 flex">
                        <Profile avatar={"https://xsgames.co/randomusers/avatar.php?g=female"}/>
                </div>
                </div>
            </div>
            <Outlet />
        </Fragment>

    )
}

export default Navbar