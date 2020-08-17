import React from 'react'
import phoneIcon from '../img/phone-icon.png'

export const Navbar = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><a href="#" className="nav-link">Главная</a></li>
                <li><a href="#" className="nav-link">Партнеры</a></li>
                <li><a href="#" className="nav-link">Контакты</a></li>
                <li><a href="#" className="phone-link">8-903-123-45-67 <img src={phoneIcon} alt="" /> </a></li>
            </ul>
        </nav>
    )
}