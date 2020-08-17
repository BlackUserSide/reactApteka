import React from 'react';
import bg4 from '../img/bg4.png'
import img1 from '../img/img1.png'

export const ThirdSection = () => {
    let h1 = 'Lorem ipsum dolor sit amet';
    let p = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    return (
        <div className="third-section">
            <div className="third-image-wrapper">
                <img src={bg4} alt="" />
            </div>
            <div className="third-text-composition">
                <h1 className="h1">{h1}</h1>
                <p>{p}</p>
                <div className="img-wrapper-text">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    )
}