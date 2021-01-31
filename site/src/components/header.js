import React from 'react';
import {Link} from 'react-router-dom'
import './header.css'
import {Link} from "react-router-dom"

function Header(){
    return (
        <div className="header">
            <div className="grid">
                <br/>
                <Link to="/">
                    <img className="logo" src="/images/logo.png" alt="" style={{ width: "3em", height: "3em" }} />
                </Link>
                <em className="slogan">Wash Hands, Wear Masks, Stay Safe</em>
            </div>
        </div>
    )
}

export default Header