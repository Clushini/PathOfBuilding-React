import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Tabs from './Tabs';
import PantheonBandits from './pantheonbanditmodal';
import { updatePBModal } from './actions';
import './style.scss';

const Panel = () => {
    const showpb = useSelector(state => state.pbModal.showPBModal);
    let dispatch = useDispatch();
    return(
        <>
            {showpb && <PantheonBandits />}
            
            <div style={{display: "flex"}}>
                <div id="panel">
                    <Tabs />
                    <Button variant="contained" className="grey_button bandit_button" onClick={() => dispatch(updatePBModal(true))}>Pantheons & Bandits</Button>
                </div>
                <div className="glowbar_vertical"></div>
            </div>
        </>
    )
}

export default Panel;