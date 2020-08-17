import React from 'react';
import bg5 from '../img/bg5.png'

export const FourthSection = () => {
    const h1 = 'Lorem ipsum dolor sit amet';
    const p = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    return (
        <div className="fourth-section">
            <div className="fourth-image-wrapper">
                <img src={bg5} alt="" />
            </div>
            <div className="fourth-text-composition">
                <h1 className="h1">{h1}</h1>
                <p>{p}</p>
            </div>
        </div>
    )
}