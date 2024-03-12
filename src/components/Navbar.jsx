import React, { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import Profile from './Profile'

function Navbar() {
    return (
        <Fragment>
            <div className="bg-gradient-to-r from-[#CDC07F] via-[#EAE6BC] to-[#B7C7C5] py-5 mx-auto h-16 flex justify-around items-center shadow-lg">
                <div className="mx-5 flex items-center">
                    <img src={logo} alt="Logo" className="h-10" />
                    <h1 className="mx-2 font-bold">CODE LEVELING</h1>
                </div>
                <div className='flex justify-end items-center'>
                    <ul className="flex space-x-4 font-bold">
                        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                        <li><Link to="/projects" className="hover:text-gray-300">Projects</Link></li>
                        <li><Link to="/learning" className="hover:text-gray-300">Learning</Link></li>
                        <li><Link to="/compete" className="hover:text-gray-300">Compete</Link></li>
                        <li><Link to="/rankings" className="hover:text-gray-300">Rankings</Link></li>
                    </ul> 
                    <div className="mx-10 flex">
                        <Profile avatar={"https://xsgames.co/randomusers/avatar.php?g=female"}/>
                </div>
                </div>
            </div>
            <Outlet />
        </Fragment>

    )
}

export default Navbar