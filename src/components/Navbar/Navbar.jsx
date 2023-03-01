import React from "react"
import { Link } from "react-router-dom";

import './Navbar.scss';
import Logo from '../../images/logo.svg';

export default function Navbar() {
    return (
        
        <nav>
            <div className="nav">
                <Link to={"/Avocado"}>
                    <img src={Logo} alt="" />
                </Link>
                <div className="nav-contenent">
                    <Link to={"/aboutUs"}>
                        <h3>About</h3>
                    </Link>
                </div>
        </div>
        </nav>
        
    )
}