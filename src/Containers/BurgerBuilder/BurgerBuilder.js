import React, {Component} from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../Components/Burger/Burger";

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger/>
                <div>
                    Builder Controls
                </div>
            </Aux>
        )
    }
}

export default BurgerBuilder;