import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => (
    props.show ? <div  onClicked={props.clicked} className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;