import React from 'react';
import classes from './Button.css';


const button = (props) => (
    <button
        className={[classes.Button], classesprops[props.btnType]].join(' ')}
        onClick={props.clicked}>{props._children}
    </button>
);

export default button;