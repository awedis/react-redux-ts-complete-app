import React from 'react';
import { NavLink } from 'react-router-dom';

const TopNav = () => {
    return (
        <div>
            <NavLink to='./dashboard' activeStyle={{fontWeight: 'bold', color: 'red'}}>Dashboard</NavLink>
            <NavLink to='./home' activeStyle={{fontWeight: 'bold', color: 'red'}}>Home</NavLink>
        </div>
    )
}

export default TopNav;