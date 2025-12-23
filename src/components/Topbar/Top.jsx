import React from 'react'
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { GoDot } from "react-icons/go";
import { MdToggleOff } from "react-icons/md";
import { Link } from 'react-router-dom';
import './top.css'

function Top() {
    return (
        <div className='header-bar'>
            {/* Left: Logo */}
            <div className="logo">
                <Link to="/home">
                    <h2>Dev<span>Jummy.</span></h2>
                </Link>
            </div>
            {/* Center: Search */}
            <div className="searchcommand">
                <input type="text" placeholder='Search Projects, Skills, Mindsets......' />
            </div>

            {/* Right: Theme toggle + Status */}
            <div className="togglestatus">
                <div className="theme">
                    <FaRegMoon size={20} />
                    <MdToggleOff size={30} />
                    <MdOutlineWbSunny size={20} />
                </div>

                <div className="status">
                    <GoDot style={{ color: 'var(--success)', marginRight: '5px' }} />
                    <span>Online</span>
                </div>
            </div>
        </div>
    )
}


export default Top