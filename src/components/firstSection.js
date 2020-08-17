import React from 'react';
import bg2 from '../img/bg2.png'

export const FirstSection = () => {
    const h1 = 'Lorem ipsum dolor sit amet';
    const p = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    return (
        <div className="s-first">
            <div className="image-wrapper-first">
                <img src={bg2} alt="" />
            </div>
            <div className="first-composition-text">
                <h1 className="h1">{h1}</h1>
                <p>{p}</p>
            </div>
        </div>
    )
}