import React from 'react';
import {
    Link
} from "react-router-dom";

/* Just a simple component not to polute the main App render */

const NavBar = () => {
    return (
        <nav className="navigation">
            <ul className='sections'>
                <li className="routeLink">
                    <Link to={'/'}>
                        Last Updated
                    </Link>
                </li>
                <li className="routeLink">
                    <Link to={'/about'}>
                        About
                    </Link>
                </li>
                <li className="routeLink">
                    <Link to={'/favourites'}>
                        Your Favorites
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
