import React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { updateActiveTab } from './actions';
import './style.scss';

const Skills = ({name, display, color, isActive}) => {
    const dispatch = useDispatch();
    return(
        <Button variant={isActive ? "contained" : "outlined"} className={`panel_tab ${!isActive ? color : `${color}_active`}`} onClick={() => dispatch(updateActiveTab(name))}>
            {display}
        </Button>
    )
}

export default Skills;