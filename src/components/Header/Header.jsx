import React from 'react';
import {NavLink } from 'react-router';
import './header.css'

const Header = () => {
    return (
        <div>
            <h3>This is header</h3>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/laptops">Laptops</NavLink>
            </nav>
        </div>
    );
};

export default Header;