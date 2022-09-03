import React from "react";
import "./SignOutButton.scss"

const SignOutButton = ({signOut}) => {
    return (
        <div class="button" onClick={signOut}></div>
    )
}

export default SignOutButton;