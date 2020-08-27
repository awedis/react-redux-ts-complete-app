import React from 'react';
import './topnav.styles.css';

import { NavLink } from 'react-router-dom';
import navBar from '../../constants/navBar';

const TopNav = () => {
    return (
        <div className='topnav'>
            {navBar.map((item, key) => {
                return (
                    <NavLink to={item.link} key={key} activeClassName='active' className='link'>{item.text}</NavLink>
                )
            })}
        </div>
    )
}

export default TopNav;