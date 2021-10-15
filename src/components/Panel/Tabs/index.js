import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tabs } from '../../../constants/paneltabs';
import Tab from './tab.js';
import './style.scss';

const Tabs = () => {
    const activetabname = useSelector(state => state.panelTab.activeTab);
    return(
        <div className="panel_tabs">
            {
                tabs.map(tab => {
                    return <Tab key={tab.name} isActive={(activetabname === tab.name) ? true : false} name={tab.name} display={tab.display} color={tab.color}/>
                })
            }
        </div>
    )
}

export default Tabs;