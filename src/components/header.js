import React from 'react';
import { Navbar } from './navbar';

export const Header = ({ logo }) => {
    return (
        <header className="main-header">
            <div className="logo-wrapper">
                <img src={logo} alt="" />
            </div>
            <div className="nav-bar-wrapper">
                <Navbar />
            </div>
        </header>
    )
}