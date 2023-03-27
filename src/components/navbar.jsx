import React from 'react';
import Cart from '../images/icon-cart.svg';
import Logo from '../images/logo.svg';
import './navbar.css';


const navbar = () => {
    return (
        <div className='navbar'>

            <div className='navbar-items-1'>
                <img src={Logo} alt='sneakers' className='sneaker' />
                <ul>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='navbar-items-2'>
                <img src={Cart} alt='cart ' className='cart' />
                <img src={require('../images/image-avatar.png')} alt="avatar" className='avatar' />
            </div>
        </div>
    )
}

export default navbar