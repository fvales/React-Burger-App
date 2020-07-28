import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Meat', type: 'meat'},
];

const buildControls = (props) => {
    return (<div className={classes.BuildControls}>
        <p>Total price: <strong>{props.totalPrice}</strong></p>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} added={() => props.ingredientAdded(ctrl.type)} removed={() => props.ingredientRemoved(ctrl.type)} disabled={props.disabled[ctrl.type]}/>
        ))}
        <button className={classes.OrderButton} disabled={!props.purchaseable} onClick={props.ordered}>ORDER NOW</button>
    </div>);
}

export default buildControls;