import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./style.scss";

const View = () => {
    const test = useSelector((state) => state.testReducer.test);
    console.log(test);
    return(
        <div id="view">
            View
        </div>
    )
}

export default View;