import React from 'react';
import './header.css'

function Header(){
    return (
        <div className="header">
            <div className="grid">
                <br/>
                <img className="logo" src="/images/logo.png" alt="" style={{width: "3em", height: "3em"}}/>
                <em className="slogan">Wash Hands, Wear Masks, Stay Safe</em>
            </div>
        </div>
    )
}

export default Header