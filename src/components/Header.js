import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    //let  btnName = 'login';
    const [btnName, setBtnName] = useState("login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? '🟢' : '🔴'}</li>
                    <li>
                        <Link to='/'>Home.</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link to='contact'>Contact Us.</Link>
                    </li>
                    <li>
                        <Link to='grocery'>Grocery</Link>
                    </li>
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