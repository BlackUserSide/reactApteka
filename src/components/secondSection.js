import React from 'react'
import bg3 from '../img/bg3.png'

export const SecondSection = () => {
    const h1 = 'Lorem ipsum dolor sit amet';
    const p = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    return (
        <div className="second-section">
            <div className="second-text-composition">
                <h1 className="h1">{h1}</h1>
                <p>{p}</p>
            </div>
            <div className="second-image-wrapper">
                <img src={bg3} alt="" />
            </div>

        </div>
    )
}