import React, { useEffect, useState } from 'react';
import { RiMenuFill, RiCloseLine, RiMagicLine, RiBarChart2Line, RiFileList3Line, RiUserSettingsLine, RiMoonFill, RiWalletLine, RiSearchLine } from 'react-icons/ri';
import { keyframes } from 'styled-components';
import logo from '../../assets/Logo.jpg';
import './navbar.css'

//TODO - Make Search icon expand to right to cover logo and allow search input in 550px width

const SlideDrawer = (props) => {
    let drawerClasses = 'colorBlue__side-drawer'
    document.body.style.overflow = "visible";

    if (props.show) {
        drawerClasses = 'colorBlue__side-drawer open'
        document.body.style.overflow = "hidden";
    }

    return (
        <div className={drawerClasses}>
            <div className="colorBlue__navbar-menu_container-links">
                <div className="colorBlue__navbar-menu_wallet">
                    <div className="colorBlue__navbar-menu_links_left">
                        <div className="colorBlue__navbar-menu_links_logo">
                            <RiWalletLine />
                        </div>
                        <a href="#">Wallet</a>
                    </div>
                    &#62;
                </div>
                <div className="colorBlue__navbar-menu_profile">
                    <div className="colorBlue__navbar-menu_links_left">
                        <div className="colorBlue__navbar-menu_links_logo">
                            <RiUserSettingsLine />
                        </div>
                        <a href="#">Profile</a>
                    </div>
                    &#62;
                </div>
                <div className="colorBlue__navbar-menu_explore">
                    <div className="colorBlue__navbar-menu_links_left">
                        <div className="colorBlue__navbar-menu_links_logo">
                            <RiMagicLine />
                        </div>
                        <a href="#">Explore</a>
                    </div>
                    &#62;
                </div>
                <div className="colorBlue__navbar-menu_stats">
                    <div className="colorBlue__navbar-menu_links_left">
                        <div className="colorBlue__navbar-menu_links_logo">
                            <RiBarChart2Line />
                        </div>
                        <a href="#">Stats</a>
                    </div>
                    &#62;
                </div>
                <div className="colorBlue__navbar-menu_resources">
                    <div className="colorBlue__navbar-menu_links_left">
                        <div className="colorBlue__navbar-menu_links_logo">
                            <RiFileList3Line />
                        </div>
                        <a href="#">Resources</a>
                    </div>
                    &#62;
                </div>
                <div className="colorBlue__navbar-menu_nightmode">
                    <div className="colorBlue__navbar-menu_links_left">
                        <div className="colorBlue__navbar-menu_links_logo">
                            <RiMoonFill />
                        </div>
                        <a href="#">Night Mode</a>
                    </div>
                    <div className="toggle-switch">
                        <input type="checkbox" className="toggle-switch-checkbox" name="toggleSwitch" id="toggleSwitch" />
                    </div>
                </div>

            </div>
            {/* Old Huy Code
            <div className="colorBlue__navbar-menu_container-links-web3">
                    <button type="button">Connect</button>
            </div>
            */}
        </div>
    );

};


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);
    {/* State for media query*/ }
    const mediaBreak = '550px'
    const [matches, setMatches] = useState(
        window.matchMedia(`(max-width: ${mediaBreak})`).matches
    )
    {/* Set media query listener*/ }
    useEffect(() => {
        window
            .matchMedia(`(max-width: ${mediaBreak})`)
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
    {/* Allow for searchbar toggle -- set width to '100%'  if viewport is larger than mediaBreak(550px) */ }
    const searchBarToggleStyle = {
        overflow: 'hidden',
        width: matches ? toggleSearch ? '100%' : '0%' : '100%',
        transition: "width 500ms ease-out"
    }

    return (
        <div className='colorBlue__navbar'>
            {/* Logo */}
            <div className='colorBlue__navbar-links_logo'>
                <img src={logo} alt="logo" />
            </div>

            {/* Search Bar */}
            <div className='colorBlue__navbar-search'>
                <form action="/" method='get' className='colorBlue__navbar-search_form' style={searchBarToggleStyle}>
                    <label htmlFor="search-bar"><span className="hidden"></span></label>
                    <input type="text" readOnly name="s" id="search-bar" placeholder='Search The Blue...' value="" />
                </form>
            </div>

            {/* Links */}
            <div className='colorBlue__navbar-links'>
                <div className='colorBlue__navbar-links_container'>
                    <p><a href="#">Explore</a></p>
                    <p><a href="#">Stats</a></p>
                    <p><a href="#">Resources</a></p>
                </div>
            </div>

            {/* Old Huy Code
            <div className='colorBlue__navbar-web3'>
                <button type='button'>Connect</button>
                <img src="" alt="" id="wallet"/>
            </div>
            */}

            {/* Buttons - Search*/}
            <div className='colorBlue__navbar-searchicon_border'>
                <div className='colorBlue__navbar-searchicon'>
                    {toggleSearch
                        ? <RiSearchLine color="#000000" size={25} onClick={() => setToggleSearch(false)} />
                        : <RiSearchLine color="#000000" size={25} onClick={() => setToggleSearch(true)} />
                    }
                </div>
            </div>

            {/* Buttons - Menu*/}
            <div className='colorBlue__navbar-menuicon_border'>
                <div className='colorBlue__navbar-menu'>
                    {toggleMenu
                        ? <RiCloseLine color="#000000" size={25} onClick={() => setToggleMenu(false)} />
                        : <RiMenuFill color="#000000" size={25} onClick={() => setToggleMenu(true)} />
                    }
                </div>
            </div>

            {/* Buttons - Profile*/}
            <div className='colorBlue__navbar-profileicon_border'>
                <div className='colorBlue__navbar-profile'>
                    <RiUserSettingsLine color="#000000" size={25} /* onClick={() => setToggleMenu(true)} */ />
                </div>
            </div>

            {/* Buttons - Wallet*/}
            <div className='colorBlue__navbar-walleticon_border'>
                <div className='colorBlue__navbar-wallet'>
                    <RiWalletLine color="#000000" size={25} /* onClick={() => setToggleMenu(true)} */ />
                </div>
            </div>

            {/* Menu Drawer */}
            <div>
                <SlideDrawer show={toggleMenu} />
            </div>
        </div>


    );
};

export default Navbar