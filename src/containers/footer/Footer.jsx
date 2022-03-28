import React from 'react';
import './footer.css';
import logo from '../../assets/Logo-white.png'

const Footer = () => {

    return (
        <div className='colorBlue__footer'>
            
            <div className='footer-column'>
                <img src={ logo } alt="ColorBlue logo" id='footer-logo' />
            </div>

            <div className='footer-column'>
                <h5>Marketplace</h5>
                <ul>
                    <li><a href="">All NFTs</a></li>
                    <li><a href="">Collectibles</a></li>
                    <li><a href="">Domain Names</a></li>
                    <li><a href="">Music</a></li>
                    <li><a href="">Photography</a></li>
                    <li><a href="">Sports</a></li>
                    <li><a href="">Trading Cards</a></li>
                    <li><a href="">Utility</a></li>
                    <li><a href="">Visual Worlds</a></li>
                </ul>
            </div>

            <div className='footer-column'>
                <h5>My Account</h5>
                <ul>
                    <li><a href="">Profiles</a></li>
                    <li><a href="">Favorites</a></li>
                    <li><a href="">My Collections</a></li>
                    <li><a href="">Settings</a></li>
                </ul>
            </div>

            <div className='footer-column'>
                <h5>Resources</h5>
                <ul>
                    <li><a href="">Help Center</a></li>
                    <li><a href="">Platform Status</a></li>
                    <li><a href="">Partners</a></li>
                    <li><a href="">Gas-Free Marketplace</a></li>
                    <li><a href="">Blogs</a></li>
                    <li><a href="">Docs</a></li>
                    <li><a href="">Newsletter</a></li>
                </ul>
            </div>

            <div className='footer-column'>
                <h5>Company</h5>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Careers</a></li>
                </ul>
            </div>

            <span className='blue-line'></span>
            <div className='copyright footer-row'>
                <p>2018-2022 © ColorBlue</p>
                
                <div className='wrapper'>
                    <a href="" className='privacy-policy'>Privacy Policy</a>
                    <a href="" className='tos'>Terms of Service</a>
                </div>
            </div>  
            

        </div>
    )
}

export default Footer