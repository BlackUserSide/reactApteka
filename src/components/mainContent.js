import React from 'react'
import bg1 from '../img/bg-1.png'

export const MainContent = () => {
    return (
        <div className="main-content">
            <div className="text-composition-main">
                <h1 className="h1">Pharmacy Medical Incorporated</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="/#">Подробнее</a>
            </div>
            <div className="image-wrapper-main">
                <img src={bg1} alt="" />
            </div>
        </div>
    )
}