import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    //let  btnName = 'login';
    const [btnName, setBtnName] = useState("login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home.</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart.</li>
                    <button 
                    className='login-btn'
                    onClick={() => {
                        btnName === "login" ? setBtnName('logout') : setBtnName('login');
                        console.log("btnName", btnName);
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;