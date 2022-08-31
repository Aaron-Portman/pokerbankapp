import React from "react";
import "./Button.scss"

const Button = ({signOut}) => {
    return (
        <div class="button" onClick={signOut}></div>
    )
}

export default Button;