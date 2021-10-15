import React from 'react';
import { getComponentFromTabName } from './helpers';
import { useSelector, useDispatch } from 'react-redux';
import "./style.scss";

const View = () => {
    const currentTab = useSelector(state => state.panelTab.activeTab);
    return(
        <div id="view">
            {getComponentFromTabName(currentTab)}
        </div>
    )
}

export default View;