import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tabs from './Tabs';
import './style.scss';

const Panel = () => {
    return(
        <div style={{display: "flex"}}>
            <div id="panel">
                <Tabs />
            </div>
            <div className="glowbar_vertical"></div>
        </div>
    )
}

export default Panel;