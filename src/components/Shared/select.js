import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select2 from '@mui/material/Select';
import { makeStyles } from '@material-ui/core/styles';
import './style.scss';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));

const Select = (props) => {
    const classes = useStyles();
    return(
        <FormControl variant="outlined" className={classes.formControl} fullWidth={props.fullWidth}>
            <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
            <Select2
                labelId="demo-simple-select-outlined-label"
                key={Math.random()}
                id="demo-simple-select-outlined"
                MenuProps={props.overrideClass ? {classes: {paper: props.overrideClass}} : {}}
                value={props.value ? props.value : ''}
                label={props.label}
                onChange={(e) => props.handleChange(e.target.value)}
                style={{width: props.width}}
            >
                {
                    props.items.map((item, index) => {
                        let selected = false;
                        if (item === props.value) selected = true;
                        return <MenuItem key={index} value={item} selected={selected}>{item}</MenuItem>
                    })
                }
            </Select2>
        </FormControl>
    )
}

export default Select;