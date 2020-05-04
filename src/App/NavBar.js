import React from 'react';
import {
    Link
} from "react-router-dom";

/* Just a simple component not to polute the main App render */

const NavBar = ({ customClass }) => {
    return (
        <nav className={customClass}>
            <ul className='sections'>
                <li>
                    <Link className="routeLink" to={'/'}>
                        Last Updated
                    </Link>
                </li>
                <li>
                    <Link className="routeLink" to={'/about'}>
                        About
                    </Link>
                </li>
                <li>
                    <Link className="routeLink" to={'/favourites'}>
                        Your Favorites
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
