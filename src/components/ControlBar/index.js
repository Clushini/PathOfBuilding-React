import React from 'react';
import LogoSmall from '../../media/logo_small.png';
import "./style.scss";

const ControlBar = () => {
    return(
        <>
            <div id="controlbar">
                <img src={LogoSmall} alt="Small Logo" />
            </div>
            <div className="glowbar_horizontal"></div>
        </>
    )
}

export default ControlBar;