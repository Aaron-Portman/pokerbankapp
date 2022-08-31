import React from "react";
import Button from "./Button";
import "./Header.css"

const Header = ({user, signOut}) => {
    return(
        <>
        <div className="wrapper">
            <div className="title">
                Poker Bank App
            </div>
            <div className="user">
                {user.username}
            </div>
            <div className="sign-out-button">
                <Button signOut={signOut}/>
            </div>
        </div>
        </>
    )
}

export default Header;