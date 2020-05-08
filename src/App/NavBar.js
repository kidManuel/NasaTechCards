import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/* Just a simple component not to polute the main App render */

const NavBar = ({ customClass }) => (
    <nav className={customClass}>
        <ul className="sections">
            <li>
                <NavLink exact activeClassName="selected" className="routeLink" to="/">
                    Last Updated
                </NavLink>
            </li>
            <li>
                <NavLink exact activeClassName="selected" className="routeLink" to="/favourites">
                    Your Favorites
                </NavLink>
            </li>
            <li>
                <NavLink exact activeClassName="selected" className="routeLink" to="/about">
                    About
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default NavBar;

NavBar.propTypes = {
    customClass: PropTypes.string,
};

NavBar.defaultProps = {
    customClass: '',
};
