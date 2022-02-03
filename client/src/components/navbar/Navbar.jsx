import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Logo.jpg';
import './navbar.css'


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='colorBlue__navbar'>
            <div className='colorBlue__navbar-links_logo'>
                <img src={ logo } alt="logo" />
            </div>

            <div className='colorBlue__navbar-search'>
                <form action="/" method='get'>
                    <label htmlFor="search-bar"><span className="hidden"></span></label>
                    <input type="text" name="s" id="search-bar" placeholder='Search the Blue...' value="" />
                </form>
            </div>

            <div className='colorBlue__navbar-links'>
                <div className='colorBlue__navbar-links_container'>
                    <p><a href="#">Explore</a></p>
                    <p><a href="#">Stats</a></p>
                    <p><a href="#">Resources</a></p>
                    <p><a href="#">Create</a></p>
                </div>
            </div>

            <div className='colorBlue__navbar-web3'>
                <button type='button'>Connect</button>
                <img src="" alt="" id="wallet"/>
            </div>

            <div className='colorBlue__navbar-menu'>
                {toggleMenu
                  ? <RiCloseLine color="#7D7D7D" size={27} onClick={() => setToggleMenu(false)} />
                  : <RiMenu3Line color="#7D7D7D" size={27} onClick={() => setToggleMenu(true)} />}  
                {toggleMenu && (
                <div className='colorBlue__navbar-menu_container scale-up-center'>
                    <div className="colorBlue__navbar-menu_container-links">
                        <p><a href="#">Explore</a></p>
                        <p><a href="#">Stats</a></p>
                        <p><a href="#">Resources</a></p>
                        <p><a href="#">Create</a></p>
                    </div>
                    <div className="colorBlue__navbar-menu_container-links-web3">
                        <button type="button">Connect</button>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default Navbar