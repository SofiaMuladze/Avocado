import React from "react"
import './Navbar.css';
import Heart from '../../images/heart.svg';
import Logo from '../../images/logo.svg';
import SearchIcon from '../../images/search.svg';
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export default function Navbar() {
    return (
        
        <nav>
            <div className="nav">
                <Link to={"/"}>
                    <img src={Logo} alt="" />
                </Link>
                <div className="nav-contenent">
                    <Link to={"/about/"}>
                        <h3>About</h3>
                    </Link>
                </div>
        </div>
        </nav>
        
    )
}